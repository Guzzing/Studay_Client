import { useQuery } from '@tanstack/react-query'
import ListRowSelect from '@/components/common/listRowSelect/ListRowSelect'
import { getChildrenInfo } from '@/libs/api/children/ChildrenApi'
const AddAcademyInfo = () => {
  const { data } = useQuery({
    queryKey: ['children'],
    queryFn: () => getChildrenInfo()
  })
  return (
    <div className={'w-full flex flex-col items-center gap-[11px] border-b '}>
      <div className={'w-full px-[20px] flex flex-col items-center gap-[11px]'}>
        <ListRowSelect
          title={'아이 선택하기'}
          options={data?.map((data) => data.nickname)}
        />
        <ListRowSelect
          title={'우리 아이 반'}
          options={data?.map((data) => data.nickname)}
        />
      </div>
      <div
        className={
          'w-full text-right caption-13 py-[4px] px-[20px] mb-[10px] text-gray-600 underline underline-offset-2 cursor-pointer'
        }>
        {'찾는 학원이 없나요?'}
      </div>
    </div>
  )
}

export default AddAcademyInfo
