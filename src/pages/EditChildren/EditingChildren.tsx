import { useState } from 'react'
import Button from '@/components/common/button/Button'
import Input from '@/components/common/inputbox/input/Input'
import Select from '@/components/common/inputbox/select/Select'
import Profile from '@/components/common/profile/Profile'
import Spacing from '@/components/common/spacing/Spacing'
import StepQuestion from '@/components/common/stepquestion/StepQuestion'

const EditingChildren = () => {
  const [value, setValue] = useState<string>('김잼민')
  const [valid, setValid] = useState<boolean>(true)
  const regex = /^[A-Za-z가-힣]{1,10}$/
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
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
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
          selectType={'Single'}
          optionData={['중학교 1학년', '중학교 2학년', '중학교 3학년']}
          fullWidth={true}
          value={'중학교 3학년'}
        />
      </div>
      <Button
        className={'absolute bottom-[25px] '}
        buttonType={'Round-blue-500'}
        width={'XLW'}
        label={'수정 완료'}
      />
    </div>
  )
}
export default EditingChildren
