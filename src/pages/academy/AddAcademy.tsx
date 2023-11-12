import { useState } from 'react'
import SelectTime from '@/components/academy/SelectTime'
import Button from '@/components/common/button/Button'
import Input from '@/components/common/inputbox/input/Input'
import SelectWeek from '@/components/common/selectweek/SelectWeek'
import Spacing from '@/components/common/spacing/Spacing'
const AddAcademy = () => {
  const [selectedWeek, setSelectedWeek] = useState<number[]>([])
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
      <SelectWeek
        selectedDate={selectedWeek}
        setSelectedDate={setSelectedWeek}
      />
      <Spacing size={14} />
      <SelectTime />
      <Button buttonType={'Plain-blue'} label={'추가하기'}></Button>
    </>
  )
}

export default AddAcademy
