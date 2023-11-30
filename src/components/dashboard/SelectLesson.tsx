import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import ListRowSelect from '@/components/common/listRowSelect/ListRowSelect'
import { getAcademyClass } from '@/libs/api/academy/AcademyApi'
import useToastify from '@/libs/hooks/useToastify'
import { academyInfoAtom } from '@/libs/store/academyInfo'

const SelectLesson = ({
  classSelectRef
}: {
  classSelectRef: React.RefObject<HTMLSelectElement>
}) => {
  const [academyInfo, setAcademyInfo] = useAtom(academyInfoAtom)
  const { setToast } = useToastify()
  const { data } = useQuery({
    queryKey: ['lessons', academyInfo.academyId],
    queryFn: () => getAcademyClass(academyInfo.academyId),
    enabled: !!academyInfo.academyId
  })

  useEffect(() => {
    if (academyInfo.lessonId > 0 && classSelectRef.current) {
      const lessonOptionArray = [...classSelectRef.current.options]
      const indexAry = lessonOptionArray.map((option, index) => {
        return option.value == String(academyInfo.lessonId) ? index : 0
      })
      const idx = indexAry.find((data) => data > 0)
      if (idx) classSelectRef.current.selectedIndex = idx
    }
  }, [academyInfo.lessonId, classSelectRef, data])

  return (
    <>
      <ListRowSelect
        ref={classSelectRef}
        title={'우리 아이 반'}
        selecttype={'Single'}
        values={data ? data?.map((data) => data.lessonId) : []}
        options={data ? data?.map((data) => data.subject) : []}
        placeholder={'반을 선택해주세요'}
        onClick={() => {
          if (academyInfo.academyId === 0) {
            setToast({
              comment: '학원과 아이를 먼저 선택해주세요!',
              type: 'warning'
            })
          }
        }}
        onChange={(e) =>
          setAcademyInfo({
            ...academyInfo,
            lessonId: Number.parseInt(e.target.value, 10)
          })
        }
      />
    </>
  )
}

export default SelectLesson
