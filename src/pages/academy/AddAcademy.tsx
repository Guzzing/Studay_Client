import { useAtom } from 'jotai'
import Input from '@/components/common/inputbox/input/Input'
import Spacing from '@/components/common/spacing/Spacing'
import { academyInfoAtom } from '@/libs/store/academyInfo'
import AddSchedule from '@/pages/academy/AddSchedule'

const AddAcademy = () => {
  const [academyInfo, setAcademyInfo] = useAtom(academyInfoAtom)

  return (
    <>
      <Spacing size={100} />
      <Input placeholder={'학원 등록하기'} inputType={'Default'} />
      <div
        className={
          'caption-13 text-gray-600 underline underline-offset-2 cursor-pointer'
        }>
        {'찾는 학원이 없나요?'}
      </div>
      <Spacing size={20} />
      <h2 className={'body-16 text-black-800'}>{'요일 선택하기'}</h2>
      <Spacing size={20} />
      <AddSchedule />
    </>
  )
}

export default AddAcademy
