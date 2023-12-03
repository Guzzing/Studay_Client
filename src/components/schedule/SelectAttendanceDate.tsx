import { useState, useEffect } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import ko from 'date-fns/locale/ko'
import { useAtom } from 'jotai'
import CustomTimePicker from '@/components/academy/CustomTimePicker'
import { scheduleAtom } from '@/libs/store/scheduleInfo'
import { getFormattingDate } from '@/libs/utils/dateParse'

const SelectAttendanceDate = ({
  isEdit = false,
  isAllUpdated = true
}: {
  isEdit?: boolean
  isAllUpdated?: boolean
}) => {
  const [endTime, setEndTime] = useState<Date | null>()
  const [isSelected, setIsSelected] = useState(false)
  const [scheduleInfo, setScheduleInfo] = useAtom(scheduleAtom)
  const [startTime, setStartTime] = useState(new Date())

  const autoCalculateDate = (date: Date) => {
    const newDate = new Date(date)
    newDate.setMonth(newDate.getMonth() + 1)
    setEndTime(newDate)
    setScheduleInfo({
      ...scheduleInfo,
      attendanceDate: {
        endDateOfAttendance: getFormattingDate(newDate),
        startDateOfAttendance: scheduleInfo.attendanceDate.startDateOfAttendance
      }
    })
  }

  useEffect(() => {
    if (
      scheduleInfo.attendanceDate.startDateOfAttendance &&
      scheduleInfo.attendanceDate.endDateOfAttendance
    ) {
      setStartTime(new Date(scheduleInfo.attendanceDate.startDateOfAttendance))
      setEndTime(new Date(scheduleInfo.attendanceDate.endDateOfAttendance))
    }
  }, [
    scheduleInfo.attendanceDate.startDateOfAttendance,
    scheduleInfo.attendanceDate.endDateOfAttendance
  ])

  registerLocale('ko', ko)
  useEffect(() => {
    if (!endTime) autoCalculateDate(startTime)
  }, [startTime])

  const onSelect = (time: Date) => {
    setStartTime(time)
    setScheduleInfo({
      ...scheduleInfo,
      attendanceDate: {
        endDateOfAttendance: scheduleInfo.attendanceDate.endDateOfAttendance,
        startDateOfAttendance: getFormattingDate(time)
      }
    })
    setIsSelected(true)
  }

  useEffect(() => {
    if (isEdit) {
      setIsSelected(true)
    }
  }, [])

  return (
    <div className={'w-full  my-[14px] '}>
      <div
        className={
          'flex flex-col gap-[5px] w-full border rounded-[10px] border-blue-350 px-[12px] py-[8px]'
        }>
        <div className={'flex flex-row shrink justify-between items-center '}>
          <h3 className={'body-15'}>{'첫 등원일'}</h3>
          <DatePicker
            selected={startTime}
            disabled={isAllUpdated ? false : true}
            locale={'ko'}
            onChange={onSelect}
            dateFormat={`yy년 MM월 dd일`}
            customInput={
              <CustomTimePicker value={'선택해주세요'} disabled={false} />
            }
          />
        </div>
        <div className={'w-full h-[1px] bg-blue-350'}></div>
        <div className={'w-full flex flex-row justify-between items-center'}>
          <h3 className={'body-15'}>{'마지막 등원일'}</h3>
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
                    attendanceDate: {
                      endDateOfAttendance: getFormattingDate(time),
                      startDateOfAttendance:
                        scheduleInfo.attendanceDate.startDateOfAttendance
                    }
                  })
              }}
              minDate={startTime}
              dateFormat={'yy년 MM월 dd일'}
              placeholderText={'선택해주세요'}
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

export default SelectAttendanceDate
