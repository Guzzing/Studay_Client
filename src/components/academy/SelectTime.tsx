import { useEffect, useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { setHours } from 'date-fns'
import ko from 'date-fns/locale/ko'
import 'react-datepicker/dist/react-datepicker.css'
import { useAtom } from 'jotai'
import CustomTimePicker from '@/components/academy/CustomTimePicker'
import { schedulesAtom } from '@/libs/store/academyInfo'
const SelectTime = ({ isEdit }: { isEdit?: boolean }) => {
  const [startTime, setStartTime] = useState(setHours(new Date(0), 8))
  const [endTime, setEndTime] = useState<Date | null>()

  const autoCalculateTime = (date: Date) => {
    const newDate = new Date(date)
    if (newDate.getHours() === 21) {
      newDate.setHours(newDate.getHours() + 1)
    } else {
      newDate.setHours(newDate.getHours() + 2)
    }
    setEndTime(newDate)
    setScheduleInfo({
      ...scheduleInfo,
      endTime: newDate.toTimeString()
    })
  }
  useEffect(() => {
    autoCalculateTime(startTime)
  }, [startTime])

  const [isSelected, setIsSelected] = useState(false)
  const [scheduleInfo, setScheduleInfo] = useAtom(schedulesAtom)

  registerLocale('ko', ko)
  const onSelect = (time: Date) => {
    setStartTime(time)
    setScheduleInfo({
      ...scheduleInfo,
      startTime: time.toTimeString(),
      endTime: null
    })
    setIsSelected(true)
  }

  useEffect(() => {
    if (scheduleInfo.endTime === '' && scheduleInfo.startTime === '') {
      setStartTime(setHours(new Date(0), 8))
      setIsSelected(false)
      setEndTime(null)
    }
  }, [scheduleInfo])

  return (
    <div className={'w-full px-[20px] my-[14px] '}>
      <div
        className={
          'flex flex-col gap-[5px] w-full border rounded-[10px] border-blue-350 px-[12px] py-[8px]'
        }>
        <div className={'flex flex-row shrink justify-between items-center '}>
          <h3 className={'body-15'}>{'시작 시간'}</h3>
          <DatePicker
            selected={startTime}
            locale={'ko'}
            onChange={onSelect}
            disabled={isEdit ? true : false}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            minTime={setHours(new Date(0), 8)}
            maxTime={setHours(new Date(0), 21)}
            dateFormat={`aa h시 mm분`}
            customInput={
              <CustomTimePicker value={'선택해주세요'} disabled={isEdit} />
            }
          />
        </div>
        <div className={'w-full h-[1px] bg-blue-350'}></div>
        <div className={'w-full flex flex-row justify-between items-center'}>
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
              customInput={
                <CustomTimePicker
                  disabled={isSelected}
                  value={'종료 시간 선택'}
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectTime
