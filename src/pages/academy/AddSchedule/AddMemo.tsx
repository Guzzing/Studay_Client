import Label from '@/components/common/label/Label'
import { AcademyMemo } from '@/libs/api/academy/AcademyType'
const AddMemo = () => {
  return (
    <div
      className={
        'grid grid-rows-3 grid-cols-2 justify-items-stretch px-[20px] gap-2'
      }>
      {AcademyMemo.map((data, index) => {
        return <Label key={index} variant={'medium'} label={data} />
      })}
    </div>
  )
}

export default AddMemo
