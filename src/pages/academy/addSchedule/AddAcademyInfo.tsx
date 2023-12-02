import SelectChild from '@/components/dashboard/SelectChild'
import SelectLesson from '@/components/dashboard/SelectLesson'
const AddAcademyInfo = ({
  childrenSelectRef,
  classSelectRef,
  isEdit = false
}: {
  childrenSelectRef: React.RefObject<HTMLSelectElement>
  classSelectRef: React.RefObject<HTMLSelectElement>
  isEdit?: boolean
}) => {
  return (
    <div className={'w-full flex flex-col items-center gap-[11px] border-b '}>
      <div className={'w-full px-[20px] flex flex-col items-center gap-[11px]'}>
        <SelectChild childrenSelectRef={childrenSelectRef} isEdit={isEdit} />
        <SelectLesson classSelectRef={classSelectRef} isEdit={isEdit} />
      </div>
      <div
        className={
          'w-full text-right caption-13 py-[4px] px-[20px] mb-[10px] text-gray-600 underline underline-offset-2 cursor-pointer'
        }></div>
    </div>
  )
}

export default AddAcademyInfo
