import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import Loading from '@/components/Loading/Loading'
import Button from '@/components/common/button/Button'
import ListRow from '@/components/common/listRow/ListRow'
import Profile from '@/components/common/profile/Profile'
import Spacing from '@/components/common/spacing/Spacing'
import { deleteChild, getChildrenInfo } from '@/libs/api/children/ChildrenApi'
import { GetChildrenInfoResponse } from '@/libs/api/children/ChildrenType'
import { queryClient } from '@/libs/api/queryClient'
import { childAtom } from '@/libs/store/childInfoAtom'
const EditChildren = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [childInfo, setChildInfo] = useAtom(childAtom)
  //const [childInfo, setChildInfo] = useState<GetChildrenInfoResponse>()
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
      console.log(mychild[0])
      setChildInfo(mychild[0])
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
          label={'아이 삭제하기'}
          onClick={() => childInfoMutation.mutate(id)}
        />
      </div>
    </div>
  )
}

export default EditChildren
