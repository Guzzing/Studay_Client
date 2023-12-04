import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'
import { useSetAtom } from 'jotai'
import Loading from '@/components/Loading/Loading'
import Button from '@/components/common/button/Button'
import ListRow from '@/components/common/listRow/ListRow'
import Profile from '@/components/common/profile/Profile'
import Spacing from '@/components/common/spacing/Spacing'
import { deleteChild, getChildrenInfo } from '@/libs/api/children/ChildrenApi'
import { GetChildrenInfoResponse } from '@/libs/api/children/ChildrenType'
import { queryClient } from '@/libs/api/queryClient'
import useModal from '@/libs/hooks/useModal'
import useToastify from '@/libs/hooks/useToastify'

const EditChildren = () => {
  const navigate = useNavigate()
  const { setToast } = useToastify()
  const location = useLocation()
  const { open, close, Modal } = useModal()
  const [childInfo, setChildInfo] = useState<GetChildrenInfoResponse>()
  const id = location.state.childId
  const { data, isLoading } = useQuery({
    queryKey: ['children'],
    queryFn: () => getChildrenInfo()
  })

  const childInfoMutation = useMutation({
    mutationFn: (childId: number) => deleteChild(childId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['children'] })
      navigate(`/`)
    }
  })

  useEffect(() => {
    const mychild = data?.filter((data) => data.childId === id)
    if (mychild) {
      setChildInfo({
        childId: mychild[0].childId,
        schedule: mychild[0].schedule,
        grade: mychild[0].grade,
        nickname: mychild[0].nickname,
        profileImageUrl: `${mychild[0].profileImageUrl}?q=${new Date()}`
      })
    }
  }, [data])

  if (isLoading || childInfo === undefined) return <Loading />
  return (
    <div className={'flex flex-col items-center relative h-full'}>
      <Spacing size={150} />
      <Profile
        imageSize={'XL'}
        canEdit={false}
        imageUrl={childInfo?.profileImageUrl}
      />
      <div className={'mt-[30px]'}></div>
      <ListRow
        leftElement={<div className={'font-nsk subHead-18'}>{'이름'}</div>}
        rightElement={
          <div className={'font-nsk body-18'}>{childInfo?.nickname}</div>
        }
      />
      <ListRow
        leftElement={<div className={'font-nsk subHead-18'}>{'학년'}</div>}
        rightElement={
          <div className={'font-nsk body-18'}>{childInfo?.grade}</div>
        }
      />
      <div
        className={
          'absolute bottom-[40px] flex flex-col gap-[13px] items-center'
        }>
        <Button
          buttonType={'Plain-blue'}
          width={'LW'}
          height={'SH'}
          label={'아이 정보 수정하기'}
          onClick={() => {
            navigate('editing', {
              state: {
                childId: childInfo?.childId,
                profileImageUrl: childInfo?.profileImageUrl,
                nickname: childInfo?.nickname,
                grade: childInfo?.grade
              }
            })
          }}
        />
        <Button
          buttonType={'Plain-red'}
          width={'LW'}
          height={'SH'}
          label={'아이 정보 삭제하기'}
          onClick={() => open()}
        />
      </div>
      <Modal
        children={
          <div
            className={
              'h-[200px] w-[370px] bg-white-0 p-[24px] px-[50px] flex flex-col items-center justify-between rounded-[15px]'
            }>
            <h2 className={'subHead-18 pb-3'}>{'아이 정보를 삭제할까요?'}</h2>
            <Button
              buttonType={'Plain-red'}
              label={'삭제할래요'}
              onClick={() => {
                childInfoMutation.mutate(id)
                close()
                setToast({
                  comment: '삭제가 완료되었어요.',
                  type: 'success'
                })
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
    </div>
  )
}

export default EditChildren
