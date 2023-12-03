import { useState, useEffect } from 'react'
import { useRef } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import Select from '@/components/common/inputbox/select/Select'
import ListRowSelect from '@/components/common/listRowSelect/ListRowSelect'
import Spacing from '@/components/common/spacing/Spacing'
import { getChildrenInfo } from '@/libs/api/children/ChildrenApi'
import { getAllDashboards } from '@/libs/api/dashboard/DashBoardApi'
import { scheduleAtom } from '@/libs/store/scheduleInfo'

type AcademyListType = {
  dashBoardId: number
  academyName: string
}

const AddScheduleAcademy = ({
  isEdit
}: {
  isEdit?: boolean
  lessonId?: number
}) => {
  const childrenSelectRef = useRef<HTMLSelectElement>(null)
  const lessonSelectRef = useRef<HTMLSelectElement>(null)
  const [scheduleInfo, setScheduleInfo] = useAtom(scheduleAtom)
  const [academyList, setAcademyList] = useState<AcademyListType[]>([])
  const { data } = useQuery({
    queryKey: ['children'],
    queryFn: () => getChildrenInfo()
  })
  const fetchChildrenDashboard = async (childId: number) => {
    const res = await getAllDashboards(childId)
    const academyList = res.map((data) => {
      return {
        dashBoardId: data.dashboardId,
        academyName: `${data.academyInfo.academyName} - ${data.lessonInfo.curriculum}`
      }
    })
    setAcademyList([...academyList])
  }

  useEffect(() => {
    if (isEdit && lessonSelectRef.current) {
      const idx = academyList?.findIndex(
        (data) => data.dashBoardId === scheduleInfo.dashboardId
      )
      lessonSelectRef.current.selectedIndex = idx + 1
    }
  }, [academyList])

  useEffect(() => {
    if (scheduleInfo.childId) {
      fetchChildrenDashboard(scheduleInfo.childId)
      if (isEdit && childrenSelectRef.current) {
        const idx = data?.findIndex(
          (data) => data.childId === scheduleInfo.childId
        ) as number
        childrenSelectRef.current.selectedIndex = idx + 1
      }
    }
  }, [scheduleInfo.childId])

  return (
    <div className={'w-full mb-[20px]'}>
      <Spacing size={120} />
      <ListRowSelect
        ref={childrenSelectRef}
        title={'아이 선택하기'}
        selecttype={'Single'}
        placeholder={'아이를 선택해주세요'}
        values={data ? data?.map((data) => data.childId) : []}
        options={data ? data?.map((data) => data.nickname) : []}
        onChange={(e) => {
          setScheduleInfo({
            ...scheduleInfo,
            childId: Number.parseInt(e.target.value, 10)
          })
        }}
      />
      <Spacing size={15} />
      <Select
        ref={lessonSelectRef}
        selecttype={'Single'}
        fullWidth={true}
        placeholder={'반을 선택해주세요'}
        values={academyList.map((data) => data.dashBoardId)}
        options={academyList.map((data) => data.academyName)}
        onChange={(e) => {
          setScheduleInfo({
            ...scheduleInfo,
            dashboardId: Number.parseInt(e.target.value, 10)
          })
        }}
      />
    </div>
  )
}

export default AddScheduleAcademy
