import Input from '@/components/common/inputbox/input/Input'
const AddAcademyName = () => {
  return (
    <div className={'flex flex-col items-center'}>
      <Input placeholder={'학원 등록하기'} inputType={'Default'} />
      <div
        className={
          'w-full py-[10px] px-[28px] text-right caption-13 text-gray-600 underline underline-offset-2 cursor-pointer'
        }>
        {'찾는 학원이 없나요?'}
      </div>
    </div>
  )
}

export default AddAcademyName
