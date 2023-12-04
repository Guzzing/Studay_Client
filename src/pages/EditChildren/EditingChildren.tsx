import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import Button from '@/components/common/button/Button'
import Input from '@/components/common/inputbox/input/Input'
import Select from '@/components/common/inputbox/select/Select'
import Profile from '@/components/common/profile/Profile'
import Spacing from '@/components/common/spacing/Spacing'
import StepQuestion from '@/components/common/stepquestion/StepQuestion'
import { editChildInfo } from '@/libs/api/children/ChildrenApi'
import { EditChildInfoRequest } from '@/libs/api/children/ChildrenType'
import { queryClient } from '@/libs/api/queryClient'
import useToastify from '@/libs/hooks/useToastify'
import { CHILD_GRADE } from '@/pages/onboarding/constants'

const EditingChildren = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { setToast } = useToastify()
  const [childInfo, setChildInfo] = useState<EditChildInfoRequest>({
    childId: location.state.childId,
    profileImageUrl: `${location.state.profileImageUrl}?q=${new Date()}`,
    nickname: location.state.nickname,
    grade: location.state.grade
  })
  const [valid, setValid] = useState<boolean>(true)

  const childInfoMutation = useMutation({
    mutationFn: (payload: EditChildInfoRequest) => editChildInfo(payload),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['children'] })
    },
    onSuccess: (data) => {
      navigate(`/edit/${childInfo.childId}`, {
        state: {
          childId: data
        }
      })
      setToast({ comment: '아이 정보를 수정했어요', type: 'success' })
    }
  })

  const handleChildrenName = (name: string) => {
    if (name.length > 10) {
      setValid(false)
    } else {
      setValid(true)
    }
  }
  return (
    <div className={'flex flex-col items-center relative h-full px-[35px]'}>
      <Spacing size={150} />
      <Profile
        imageSize={'XL'}
        canEdit={true}
        editId={childInfo.childId}
        imageUrl={childInfo?.profileImageUrl}
      />
      <Spacing size={10} />
      <div className={'flex flex-col w-full'}>
        <StepQuestion step={1} text={'이름'} />
        <Spacing size={10} />
        <Input
          field={'childname'}
          fullWidth={true}
          value={childInfo.nickname}
          onChange={(e) => {
            setChildInfo({
              childId: childInfo.childId,
              profileImageUrl: childInfo.profileImageUrl,
              nickname: e.target.value,
              grade: childInfo.grade
            })
            handleChildrenName(e.target.value)
          }}
          placeholder={'아이의 이름을 입력해주세요'}
          inputType={'Default'}
        />
        <Spacing size={25} />
        <StepQuestion step={2} text={'학년'} />
        <Spacing size={10} />
        <Select
          onChange={(e) => {
            setChildInfo({
              childId: childInfo.childId,
              profileImageUrl: childInfo.profileImageUrl,
              nickname: childInfo.nickname,
              grade: e.target.value
            })
          }}
          selecttype={'Single'}
          options={CHILD_GRADE.filter((data) => data.length > 0)}
          fullWidth={true}
          value={childInfo.grade}
        />
      </div>
      <Button
        className={'absolute bottom-[25px] '}
        buttonType={'Round-blue-500'}
        fullWidth={true}
        label={'수정 완료'}
        onClick={() => {
          if (valid) {
            childInfoMutation.mutate(childInfo)
          } else {
            setToast({ comment: '닉네임 규칙을 지켜주세요!', type: 'warning' })
            return
          }
        }}
      />
    </div>
  )
}
export default EditingChildren
