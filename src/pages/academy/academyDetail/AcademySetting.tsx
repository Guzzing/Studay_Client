import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/common/button/Button'
import ReviewBottomSheet from '@/components/review/ReviewBottomSheet'
import { deleteDashboard } from '@/libs/api/dashboard/DashBoardApi'
import { patchToggleDashboardState } from '@/libs/api/dashboard/DashBoardApi'
import { GetAllDashBoardResponse } from '@/libs/api/dashboard/DashBoardType'
import { queryClient } from '@/libs/api/queryClient'
const AcademySetting = ({ data }: { data: GetAllDashBoardResponse }) => {
  const navigate = useNavigate()
  const [isbottomSheetOpen, setBottomSheetOpen] = useState(false)
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const deleteDashboardInfo = async (dashboardId: number) => {
    const data = await deleteDashboard(dashboardId)
    return data
  }

  const fetchToggleDashboard = async (dashboardId: number) => {
    const res = await patchToggleDashboardState(dashboardId)
  }
  return (
    <>
      {isbottomSheetOpen && (
        <ReviewBottomSheet
          academyTitle={data.academyInfo.academyName}
          academyId={data.academyInfo.academyId}
          setBottomSheetClose={setBottomSheetOpen}
        />
      )}
      <div className={'w-full mt-[37px] px-[20px]'}>
        {data.isActive ? (
          <div className={'flex flex-col gap-[12px]'}>
            <Button
              fullWidth={true}
              buttonType={'Plain-blue'}
              label={'리뷰 남기기'}
              onClick={() => setBottomSheetOpen(!isbottomSheetOpen)}
            />
            <Button
              fullWidth={true}
              buttonType={'Plain-red'}
              label={'학원을 그만뒀어요'}
              onClick={() => {
                fetchToggleDashboard(data.dashboardId)
                queryClient.invalidateQueries({
                  queryKey: ['dashboard', data.dashboardId]
                })
                alert('성공적으로 처리했음.')
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
                fetchToggleDashboard(data.dashboardId)
                queryClient.invalidateQueries({
                  queryKey: ['dashboard', data.dashboardId]
                })
                alert('성공적으로 처리했음.')
              }}
            />
            <Button
              buttonType={'Plain-red'}
              label={'삭제하기'}
              fullWidth={true}
              onClick={() => {
                if (data.isActive) {
                  alert('다니고 있는 학원은 삭제가 불가능합니다!')
                } else {
                  deleteDashboardInfo(data.dashboardId)
                  alert('삭제 완료!')
                  navigate('/academies')
                }
              }}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default AcademySetting
