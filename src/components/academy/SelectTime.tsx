import { useEffect, useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { setHours, getTime } from 'date-fns'
import ko from 'date-fns/locale/ko'
import 'react-datepicker/dist/react-datepicker.css'
import { useAtom } from 'jotai'
import CustomTimePicker from '@/components/academy/CustomTimePicker'
import { schedulesAtom } from '@/libs/store/academyInfo'
const SelectTime = () => {
  const [startTime, setStartTime] = useState(setHours(new Date(0), 0))
  const [endTime, setEndTime] = useState<Date | null>()
  const [isSelected, setIsSelected] = useState(false)
  const [scheduleInfo, setScheduleInfo] = useAtom(schedulesAtom)

  registerLocale('ko', ko)
  const onSelect = (time: Date) => {
    setStartTime(time)
    setScheduleInfo({
      ...scheduleInfo,
      startTime: time.toTimeString(),
      // eslint-disable-next-line unicorn/no-null
      endTime: null
    })
    setIsSelected(true)
  }

  useEffect(() => {
    if (scheduleInfo.endTime === '' && scheduleInfo.startTime === '') {
      setStartTime(setHours(new Date(0), 0))
      setIsSelected(false)
      // eslint-disable-next-line unicorn/no-null
      setEndTime(null)
    }
  }, [scheduleInfo])

  return (
    <div
      className={
        'flex flex-col gap-[5px] m-[20px] w-full border rounded-[10px] border-blue-350 px-[12px] py-[8px]'
      }>
      <div className={'flex flex-row justify-between items-center '}>
        <h3 className={'body-15'}>{'시작 시간'}</h3>
        <DatePicker
          selected={startTime}
          locale={'ko'}
          onChange={onSelect}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30}
          minTime={setHours(new Date(0), 6)}
          maxTime={setHours(new Date(0), 22)}
          dateFormat={`aa h시 mm분`}
          customInput={<CustomTimePicker value={''} />}
        />
      </div>
      <div className={'w-full h-[1px] bg-blue-350'}> </div>
      <div className={'flex flex-row justify-between items-center'}>
        <h3 className={'body-15'}>{'종료 시간'}</h3>
        <div>
          <DatePicker
            selected={endTime}
            locale={'ko'}
            disabled={isSelected ? false : true}
            onChange={(time) => {
              setEndTime(time)
              time &&
                setScheduleInfo({
                  ...scheduleInfo,
                  endTime: time.toTimeString()
                })
            }}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            minTime={startTime}
            maxTime={setHours(new Date(0), 22)}
            excludeTimes={[startTime]}
            dateFormat={'aa h시 mm분'}
            placeholderText={'종료 시간'}
            customInput={<CustomTimePicker value={''} />}
          />
        </div>
      </div>
    </div>
  )
}

export default SelectTime
