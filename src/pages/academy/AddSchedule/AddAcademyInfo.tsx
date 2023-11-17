import { useQuery } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import ListRowSelect from '@/components/common/listRowSelect/ListRowSelect'
import { getChildrenInfo } from '@/libs/api/children/ChildrenApi'
import { academyInfoAtom } from '@/libs/store/academyInfo'
const AddAcademyInfo = () => {
  const [academyInfo, setAcademyInfo] = useAtom(academyInfoAtom)
  const { data } = useQuery({
    queryKey: ['children'],
    queryFn: () => getChildrenInfo()
  })
  return (
    <div className={'w-full flex flex-col items-center gap-[11px] border-b '}>
      <div className={'w-full px-[20px] flex flex-col items-center gap-[11px]'}>
        <ListRowSelect
          title={'아이 선택하기'}
          placeholder={'아이를 선택해주세요'}
          values={data?.map((data) => data.childId)}
          options={data?.map((data) => data.nickname)}
          onChange={(e) =>
            setAcademyInfo({
              ...academyInfo,
              childId: Number.parseInt(e.target.value, 10)
            })
          }
        />
        <ListRowSelect
          title={'우리 아이 반'}
          options={data?.map((data) => data.nickname)}
          placeholder={'반을 선택해주세요'}
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
