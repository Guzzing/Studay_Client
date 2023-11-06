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

const EditingChildren = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [childInfo, setChildInfo] = useState<EditChildInfoRequest>({
    childId: location.state.childId,
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
    }
  })

  const regex = /^[\sA-Za-z가-힣]{1,10}$/
  const handleChildrenName = (name: string) => {
    if (regex.test(name)) {
      setValid(true)
    } else {
      setValid(false)
    }
  }
  return (
    <div className={'flex flex-col items-center relative h-full px-[35px]'}>
      <Spacing size={150} />
      <Profile imageSize={'XL'} canEdit={true} />
      <Spacing size={10} />
      <div className={'flex flex-col w-full'}>
        <StepQuestion step={1} text={'이름'} />
        <Spacing size={10} />
        <Input
          fullWidth={true}
          value={childInfo.nickname}
          onChange={(e) => {
            setChildInfo({
              childId: childInfo.childId,
              nickname: e.target.value,
              grade: childInfo.grade
            })
            handleChildrenName(e.target.value)
          }}
          placeholder={'아이의 이름을 입력해주세요'}
          inputType={'Default'}
          errorMessage={
            valid ? undefined : '한글, 영어 10자 이내로 작성해주세요'
          }
        />
        <Spacing size={25} />
        <StepQuestion step={2} text={'학년'} />
        <Spacing size={10} />
        <Select
          onChange={(e) => {
            setChildInfo({
              childId: childInfo.childId,
              nickname: childInfo.nickname,
              grade: e.target.value
            })
          }}
          selectType={'Single'}
          options={[
            '초등학교 1학년',
            '중학교 1학년',
            '중학교 2학년',
            '중학교 3학년'
          ]}
          fullWidth={true}
          value={childInfo.grade}
        />
      </div>
      <Button
        className={'absolute bottom-[25px] '}
        buttonType={'Round-blue-500'}
        width={'XLW'}
        label={'수정 완료'}
        onClick={() => childInfoMutation.mutate(childInfo)}
      />
    </div>
  )
}
export default EditingChildren
