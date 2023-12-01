import { useRef, useState } from 'react'
import { useAtom, useSetAtom } from 'jotai'
import SelectTime from '@/components/academy/SelectTime'
import Button from '@/components/common/button/Button'
import Icon from '@/components/common/icon/Icon'
import SelectWeek from '@/components/common/selectweek/SelectWeek'
import Spacing from '@/components/common/spacing/Spacing'
import { ClientWeekData, WeekData } from '@/libs/api/academy/AcademyType'
import { schedulesAtom } from '@/libs/store/academyInfo'
import { academyInfoAtom, academyTimeFamily } from '@/libs/store/academyInfo'

const AddSchedule = ({ isEdit }: { isEdit?: boolean }) => {
  const [academyInfo, setAcademyInfo] = useAtom(academyInfoAtom)
  const [scheduleInfo, setScheduleInfo] = useAtom(schedulesAtom)
  const [fixedDate, setFixedDate] = useState<number[]>(
    isEdit ? [0, 1, 2, 3, 4, 5, 6] : []
  )
  const setTimeInfo = useSetAtom(academyTimeFamily('schedules'))
  const selectRef = useRef<HTMLSelectElement>(null)

  const deleteTimeSchedule = (week: number) => {
    setAcademyInfo({
      ...academyInfo,
      schedules: academyInfo.schedules.filter((data) => data.dayOfWeek !== week)
    })
    setFixedDate(fixedDate.filter((data) => data !== week))
  }
  const addTimeSchedule = () => {
    if (scheduleInfo.weekArray.length === 1) {
      setTimeInfo([
        {
          dayOfWeek: WeekData[scheduleInfo.weekArray[0]],
          startTime: scheduleInfo.startTime.split(':').slice(0, 2).join(':'),
          endTime: scheduleInfo.endTime?.split(':').slice(0, 2).join(':')
        }
      ])
      setFixedDate([...fixedDate, ...scheduleInfo.weekArray])
      setScheduleInfo({
        startTime: '',
        weekArray: [],
        endTime: ''
      })
    } else {
      const newArray = scheduleInfo.weekArray.map((data) => {
        return {
          dayOfWeek: WeekData[data],
          startTime: scheduleInfo.startTime.split(':').slice(0, 2).join(':'),
          endTime: scheduleInfo.endTime?.split(':').slice(0, 2).join(':')
        }
      })
      setTimeInfo([...newArray])
      setFixedDate([...fixedDate, ...scheduleInfo.weekArray])
      setScheduleInfo({
        startTime: '',
        weekArray: [],
        endTime: ''
      })
    }
    if (selectRef.current) selectRef.current.selectedIndex = 0
  }

  return (
    <div className={'flex flex-col items-center w-full border-b'}>
      <SelectWeek fixedDate={fixedDate} />
      <SelectTime isEdit={isEdit} />
      <Button
        buttonType={
          scheduleInfo.weekArray.length > 0 &&
          scheduleInfo.startTime.length > 1 &&
          scheduleInfo.endTime
            ? 'Plain-blue'
            : 'Plain-disabled'
        }
        disabled={
          scheduleInfo.weekArray.length > 0 &&
          scheduleInfo.startTime.length > 1 &&
          scheduleInfo.endTime
            ? false
            : true
        }
        label={'추가하기'}
        onClick={addTimeSchedule}></Button>
      <Spacing size={16} />
      {academyInfo.schedules.map((data, index) => {
        return (
          <div key={index} className={'w-full px-[20px] py-[10px]'}>
            <div
              className={
                'flex w-full justify-between items-center body-16 text-gray-600'
              }>
              <div>
                {'매주 '}
                {ClientWeekData[data.dayOfWeek]}
              </div>
              <div className={'flex flex-row gap-1'}>
                <div>
                  {data.startTime}
                  {' ~ '}
                  {data.endTime}
                </div>
                {isEdit ? (
                  ''
                ) : (
                  <Icon
                    icon={'Delete'}
                    classStyle={'cursor-pointer'}
                    onClick={() => {
                      deleteTimeSchedule(data.dayOfWeek)
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        )
      })}
      <Spacing size={5} />
    </div>
  )
}

export default AddSchedule
