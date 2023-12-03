import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'
import Button from '@/components/common/button/Button'
import ReviewBottomSheet from '@/components/review/ReviewBottomSheet'
import {
  deleteDashboard,
  getIsUserWroteReview
} from '@/libs/api/dashboard/DashBoardApi'
import { patchToggleDashboardState } from '@/libs/api/dashboard/DashBoardApi'
import { GetAllDashBoardResponse } from '@/libs/api/dashboard/DashBoardType'
import { queryClient } from '@/libs/api/queryClient'
import useModal from '@/libs/hooks/useModal'
import useToastify from '@/libs/hooks/useToastify'

const AcademySetting = ({ data }: { data: GetAllDashBoardResponse }) => {
  const navigate = useNavigate()
  const { setToast } = useToastify()
  const { open, close, Modal } = useModal()
  const { data: reviewData } = useQuery({
    queryKey: ['isReview', data.academyInfo.academyId],
    queryFn: () => getIsUserWroteReview(data.academyInfo.academyId),
    enabled: !!data.academyInfo.academyId
  })
  const [isbottomSheetOpen, setBottomSheetOpen] = useState(false)
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const deleteDashboardInfo = async (dashboardId: number) => {
    const data = await deleteDashboard(dashboardId)
    return data
  }

  const applyMutation = useMutation({
    mutationFn: (dashboardId: number) => patchToggleDashboardState(dashboardId),
    onSuccess: () => {},
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['dashboard', data.dashboardId]
      })
    }
  })

  return (
    <>
      <ReviewBottomSheet
        academyTitle={data.academyInfo.academyName}
        academyId={data.academyInfo.academyId}
        bottomSheetState={isbottomSheetOpen}
      />
      <div className={'w-full mt-[37px] px-[20px]'}>
        {data.isActive ? (
          <div className={'flex flex-col gap-[12px]'}>
            {reviewData?.reviewable && (
              <Button
                fullWidth={true}
                buttonType={'Plain-blue'}
                label={'리뷰 남기기'}
                onClick={() => setBottomSheetOpen(!isbottomSheetOpen)}
              />
            )}

            <Button
              fullWidth={true}
              buttonType={'Plain-red'}
              label={'학원을 그만뒀어요'}
              onClick={() => {
                applyMutation.mutate(data.dashboardId)
                setToast({
                  comment: '학원을 그만둔 상태로 설정했어요',
                  type: 'success'
                })
              }}
            />
          </div>
        ) : (
          <div className={'flex flex-col gap-[12px]'}>
            <Button
              buttonType={'Plain-blue'}
              label={'학원을 등록했어요'}
              fullWidth={true}
              onClick={() => {
                applyMutation.mutate(data.dashboardId)
                setToast({
                  comment: '학원을 등록했어요.',
                  type: 'success'
                })
              }}
            />
            <Button
              buttonType={'Plain-red'}
              label={'삭제하기'}
              fullWidth={true}
              onClick={() => {
                if (data.isActive) {
                  setToast({
                    comment:
                      '다니고 있는 학원은 삭제가 불가해요. 먼저 미등록 상태로 만들어주세요',
                    type: 'warning'
                  })
                } else {
                  open()
                }
              }}
            />
          </div>
        )}
      </div>
      <Modal
        children={
          <div
            className={
              'h-[200px] w-[370px] bg-white-0 p-[24px] px-[50px] flex flex-col items-center justify-between rounded-[15px]'
            }>
            <h2 className={'subHead-18 pb-3'}>{'학원 정보를 삭제할까요?'}</h2>
            <Button
              buttonType={'Plain-red'}
              label={'학원 정보를 삭제할게요'}
              onClick={() => {
                deleteDashboardInfo(data.dashboardId)
                setToast({
                  comment: '학원 정보를 삭제했어요.',
                  type: 'success'
                })
                navigate('/academies')
              }}
            />
            <Button
              buttonType={'Plain-blue'}
              label={'취소하기'}
              onClick={close}
            />
          </div>
        }
      />
    </>
  )
}

export default AcademySetting
