import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import ListRowSelect from '@/components/common/listRowSelect/ListRowSelect'
import { getChildrenInfo } from '@/libs/api/children/ChildrenApi'
import { academyInfoAtom } from '@/libs/store/academyInfo'

const SelectChild = ({
  childrenSelectRef,
  isEdit
}: {
  childrenSelectRef: React.RefObject<HTMLSelectElement>
  isEdit: boolean
}) => {
  const [academyInfo, setAcademyInfo] = useAtom(academyInfoAtom)
  const { data } = useQuery({
    queryKey: ['children'],
    queryFn: () => getChildrenInfo()
  })

  useEffect(() => {
    if (academyInfo.childId && childrenSelectRef.current) {
      const childOptionArray = [...childrenSelectRef.current.options]
      const indexAry = childOptionArray.map((option, index) => {
        return option.value === String(academyInfo.childId) ? index : 0
      })
      const idx = indexAry.find((data) => data > 0)
      if (idx) childrenSelectRef.current.selectedIndex = idx
    }
  }, [academyInfo.childId, childrenSelectRef])

  return (
    <ListRowSelect
      ref={childrenSelectRef}
      title={'아이 선택하기'}
      disabled={isEdit ? true : false}
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
  )
}

export default SelectChild
