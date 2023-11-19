import { useEffect, useState } from 'react'
import { useAtom, useSetAtom } from 'jotai'
import SelectTime from '@/components/academy/SelectTime'
import Button from '@/components/common/button/Button'
import Icon from '@/components/common/icon/Icon'
// import Select from '@/components/common/inputbox/select/Select'
import ListRowSelect from '@/components/common/listRowSelect/ListRowSelect'
import SelectWeek from '@/components/common/selectweek/SelectWeek'
import Spacing from '@/components/common/spacing/Spacing'
import {
  ClientWeekData,
  ServerWeekType,
  RepeatOptionType,
  RepeatanceData,
  WeekData
} from '@/libs/api/academy/AcademyType'
import { schedulesAtom } from '@/libs/store/academyInfo'
import { academyInfoAtom, academyTimeFamily } from '@/libs/store/academyInfo'

const AddSchedule = () => {
  const [academyInfo, setAcademyInfo] = useAtom(academyInfoAtom)
  const [scheduleInfo, setScheduleInfo] = useAtom(schedulesAtom)
  const [fixedDate, setFixedDate] = useState<number[]>([])
  const setTimeInfo = useSetAtom(academyTimeFamily('schedules'))

  const deleteTimeSchedule = (week: ServerWeekType) => {
    setAcademyInfo({
      ...academyInfo,
      schedules: academyInfo.schedules.filter((data) => data.dayOfWeek !== week)
    })
  }
  useEffect(() => {
    console.log(academyInfo)
  }, [academyInfo])

  const addTimeSchedule = () => {
    if (scheduleInfo.weekArray.length === 0) {
      alert('요일을 선택해주세요.')
    } else if (scheduleInfo.weekArray.length === 1) {
      setTimeInfo([
        {
          dayOfWeek: WeekData[scheduleInfo.weekArray[0]],
          startTime: scheduleInfo.startTime.split(':').slice(0, 2).join(':'),
          endTime: scheduleInfo.endTime?.split(':').slice(0, 2).join(':'),
          repeatance: scheduleInfo.repeatance
        }
      ])
      setFixedDate([...fixedDate, ...scheduleInfo.weekArray])
      setScheduleInfo({
        startTime: '',
        weekArray: [],
        endTime: '',
        repeatance: scheduleInfo.repeatance
      })
    } else {
      const newArray = scheduleInfo.weekArray.map((data) => {
        return {
          dayOfWeek: WeekData[data],
          startTime: scheduleInfo.startTime.split(':').slice(0, 2).join(':'),
          endTime: scheduleInfo.endTime?.split(':').slice(0, 2).join(':'),
          repeatance: scheduleInfo.repeatance
        }
      })
      setTimeInfo([...newArray])
      setFixedDate([...fixedDate, ...scheduleInfo.weekArray])
      setScheduleInfo({
        startTime: '',
        weekArray: [],
        endTime: '',
        repeatance: 'NONE'
      })
    }
  }
  useEffect(() => {}, [scheduleInfo])
  return (
    <div className={'flex flex-col items-center w-full border-b'}>
      <SelectWeek fixedDate={fixedDate} />
      <SelectTime />
      <div className={'w-full px-[20px]'}>
        <ListRowSelect
          title={'반복'}
          selectType={'Single'}
          options={['안 함', '매일', '매주', '격주', '한달마다', '매년']}
          onChange={(e) => {
            setScheduleInfo({
              ...scheduleInfo,
              repeatance: RepeatanceData[e.target.value as RepeatOptionType]
            })
          }}
        />
      </div>
      <Spacing size={16} />
      <Button
        buttonType={'Plain-blue'}
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
              <div>{ClientWeekData[data.dayOfWeek]}</div>
              <div className={'flex flex-row gap-1'}>
                <div>
                  {data.startTime}
                  {' ~ '}
                  {data.endTime}
                </div>
                <Icon
                  icon={'Delete'}
                  classStyle={'cursor-pointer'}
                  onClick={() => {
                    deleteTimeSchedule(data.dayOfWeek)
                  }}
                />
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
