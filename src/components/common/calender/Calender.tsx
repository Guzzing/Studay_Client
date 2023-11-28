import { useCallback } from 'react'
import { getDays } from '../../../libs/utils/date.ts'
import { DaysInfo, DayType, MonthType } from '../../../types/date.ts'
import CalenderProps from './CalenderType.ts'
import { DECEMBER, JANUARY, WEEK, WeekStyle } from './constants.ts'
import Icon from '@/components/common/icon/Icon.tsx'

const Calender = ({
  calenderState,
  setCalenderState,
  existenceDays,
  holidays
}: CalenderProps) => {
  const { nowYear, nowMonth, nowDays, toDay } = calenderState
  const holidaysArr = new Set(
    holidays.map((holiday) => new Date(holiday.date).getDate())
  )

  const handleDayClick = useCallback(
    (dayInfo: DaysInfo) => {
      if (dayInfo.month === nowMonth) {
        setCalenderState({
          ...calenderState,
          toDay: dayInfo.day
        })
      } else {
        const { year, month, day } = dayInfo
        const days = getDays(year, month)
        setCalenderState({
          nowYear: year,
          nowMonth: month,
          nowDays: days,
          toDay: day
        })
      }
    },
    [calenderState]
  )

  const nextMonth = () => {
    let nextMonth = nowMonth + 1
    let nextYear = nowYear

    if (nextMonth > DECEMBER) {
      nextYear += 1
      nextMonth = JANUARY
    }

    const nextDays = getDays(nextYear, nextMonth as MonthType)

    setCalenderState({
      nowYear: nextYear,
      nowMonth: nextMonth as MonthType,
      nowDays: nextDays,
      toDay: 1 as DayType
    })
  }

  const previousMonth = () => {
    let previousYear = nowYear
    let previousMonth = nowMonth - 1

    if (previousMonth < JANUARY) {
      previousMonth = DECEMBER
      previousYear -= 1
    }

    const previousDays = getDays(previousYear, previousMonth as MonthType)

    setCalenderState({
      nowYear: previousYear,
      nowMonth: previousMonth as MonthType,
      nowDays: previousDays,
      toDay: 1 as DayType
    })
  }

  return (
    <div
      className={
        'flex flex-col justify-center items-center w-[388px] mt-[17px]'
      }>
      <div className={'flex flex-row justify-center items-center'}>
        <Icon
          classStyle={'cursor-pointer rotate-90'}
          icon={'ArrowDown'}
          onClick={previousMonth}
        />
        <div className={'headline-20'}>{`${nowYear}년 ${nowMonth}월`}</div>
        <Icon
          icon={'ArrowDown'}
          onClick={nextMonth}
          classStyle={'cursor-pointer rotate-[-90deg]'}
        />
      </div>

      <div
        className={
          'flex flex-row w-full justify-center items-center mr-[8px] ml-[11px] mt-[17px] mb-[12px]'
        }>
        {WEEK.map((daysOfWeek, index) => (
          <div
            key={index}
            className={`w-full text-center font-nsk caption-13 font-bold mr-[15px]  ${
              daysOfWeek === 'SUN' || daysOfWeek === 'SAT'
                ? WeekStyle[daysOfWeek]
                : ''
            }`}>
            {daysOfWeek}
          </div>
        ))}
      </div>
      <div
        className={
          'flex-col flex w-full justify-center items-center mr-[8px] ml-[11px] mb-[18px]'
        }>
        {nowDays.map((week, index) => (
          <div
            key={index}
            className={
              'flex flex-row w-full justify-center items-center mt-[17px] mb[18px]'
            }>
            {week.map((daysInfo, index) => (
              <div
                className={`${daysInfo.style} ${
                  holidaysArr.has(daysInfo.day) && daysInfo.month === nowMonth
                    ? 'text-red-500'
                    : ''
                }`}
                key={index}
                onClick={() => handleDayClick(daysInfo)}>
                <div
                  className={`${
                    daysInfo.day === toDay && daysInfo.month === nowMonth
                      ? 'bg-[rgba(87,164,255,0.2)] rounded-full '
                      : ''
                  }`}
                  data-id={`${daysInfo.year}-${daysInfo.month}}`}>
                  {daysInfo.day}
                </div>
                {existenceDays.includes(daysInfo.day) && (
                  <div
                    className={
                      'relative bg-gray-100 w-[5px] h-[5px] rounded-full left-[17px] bottom-[10px] '
                    }
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calender
