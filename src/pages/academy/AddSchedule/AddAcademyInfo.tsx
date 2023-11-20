import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import ListRowSelect from '@/components/common/listRowSelect/ListRowSelect'
import { getAcademyClass } from '@/libs/api/academy/AcademyApi'
import { AcademyClassResponse } from '@/libs/api/academy/AcademyType'
import { getChildrenInfo } from '@/libs/api/children/ChildrenApi'
import { academyInfoAtom } from '@/libs/store/academyInfo'
const AddAcademyInfo = ({
  childrenSelectRef,
  classSelectRef
}: {
  childrenSelectRef: React.RefObject<HTMLSelectElement>
  classSelectRef: React.RefObject<HTMLSelectElement>
}) => {
  const [academyInfo, setAcademyInfo] = useAtom(academyInfoAtom)
  const [classInfo, setClasssInfo] = useState<AcademyClassResponse[]>([])
  const { data } = useQuery({
    queryKey: ['children'],
    queryFn: () => getChildrenInfo()
  })
  const fetchAcademyInfo = async (academyId: number) => {
    const data = await getAcademyClass(academyId)
    setClasssInfo(data)
  }
  useEffect(() => {
    fetchAcademyInfo(academyInfo.academyId)
  }, [academyInfo.academyId])

  return (
    <div className={'w-full flex flex-col items-center gap-[11px] border-b '}>
      <div className={'w-full px-[20px] flex flex-col items-center gap-[11px]'}>
        <ListRowSelect
          ref={childrenSelectRef}
          title={'아이 선택하기'}
          selecttype={'Single'}
          placeholder={'아이를 선택해주세요'}
          values={data ? data?.map((data) => data.childId) : []}
          options={data ? data?.map((data) => data.nickname) : []}
          onChange={(e) =>
            setAcademyInfo({
              ...academyInfo,
              childId: Number.parseInt(e.target.value, 10)
            })
          }
        />
        <ListRowSelect
          ref={classSelectRef}
          title={'우리 아이 반'}
          selecttype={'Single'}
          values={classInfo ? classInfo?.map((data) => data.lessonId) : []}
          options={classInfo ? classInfo?.map((data) => data.subject) : []}
          placeholder={'반을 선택해주세요'}
          onChange={(e) =>
            setAcademyInfo({
              ...academyInfo,
              lessonId: Number.parseInt(e.target.value, 10)
            })
          }
        />
      </div>
      <div
        className={
          'w-full text-right caption-13 py-[4px] px-[20px] mb-[10px] text-gray-600 underline underline-offset-2 cursor-pointer'
        }>
        {'찾는 반이 없나요?'}
      </div>
    </div>
  )
}

export default AddAcademyInfo
