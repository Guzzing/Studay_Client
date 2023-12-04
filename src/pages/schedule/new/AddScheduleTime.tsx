import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import SelectWeek from '@/components/common/selectweek/SelectWeek'
import SelectAttendanceDate from '@/components/schedule/SelectAttendanceDate'
import { getDetailDashboard } from '@/libs/api/dashboard/DashBoardApi'
import {
  ScheduleServerWeekData,
  ScheduleClientWeekData,
  ScheduleServerWeekDataString
} from '@/libs/api/schedule/scheduleType'
import { scheduleAtom } from '@/libs/store/scheduleInfo'
const AddScheduleTime = ({
  isEdit,
  isAllUpdated = true,
  date = ''
}: {
  isEdit?: boolean
  isAllUpdated?: boolean
  date?: string
}) => {
  const [academySchedule, setAcademySchedule] = useAtom(scheduleAtom)
  const [fixedDate, setFixedDate] = useState<number[]>([])
  const { data } = useQuery({
    queryKey: ['dashboard', academySchedule.dashboardId],
    queryFn: () => getDetailDashboard(academySchedule.dashboardId),
    enabled: !!academySchedule.dashboardId
  })
  const addTimeSchedule = () => {
    if (data?.schedules) {
      setAcademySchedule({
        ...academySchedule,
        lessonScheduleCreateRequests: data.schedules.map((data) => {
          return {
            dayOfWeek: ScheduleServerWeekData[data.dayOfWeek],
            lessonTime: {
              lessonStartTime: data.startTime,
              lessonEndTime: data.endTime
            }
          }
        })
      })
      setFixedDate(data.schedules.map((data) => data.dayOfWeek))
    }
  }
  useEffect(() => {
    addTimeSchedule()
  }, [data])

  useEffect(() => {
    setFixedDate(
      academySchedule.lessonScheduleCreateRequests.map(
        (data) => ScheduleServerWeekDataString[data.dayOfWeek]
      )
    )
  }, [academySchedule])

  return (
    <div className={'flex flex-col items-center w-full '}>
      <div className={'pointer-events-none'}>
        <SelectWeek fixedDate={fixedDate} />
      </div>
      <SelectAttendanceDate
        isEdit={isEdit}
        isAllUpdated={isAllUpdated}
        date={date}
      />
      {academySchedule.lessonScheduleCreateRequests.map((data, index) => {
        return (
          <div key={index} className={'w-full px-[20px] py-[10px]'}>
            <div
              className={
                'flex w-full justify-between items-center body-16 text-gray-600'
              }>
              <div>
                {'매주 '}
                {ScheduleClientWeekData[data.dayOfWeek]}
              </div>
              <div className={'flex flex-row gap-1'}>
                <div>
                  {data.lessonTime.lessonStartTime}
                  {' ~ '}
                  {data.lessonTime.lessonEndTime}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AddScheduleTime
