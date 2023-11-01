import { useCallback, useEffect, useState } from 'react'
import { defaultDate, getDays } from '../../../libs/utils/date.ts'
import {
  CalenderType,
  DaysInfo,
  DayType,
  MonthType
} from '../../../types/date.ts'
import CalenderProps from './CalenderType.ts'
import { DECEMBER, JANUARY, WEEK, WeekStyle } from './constants.ts'

const Calender = ({ onClick }: CalenderProps) => {
  const [defaultYear, defaultMonth, defaultDays, days] = defaultDate()
  const [calenderState, setCalenderState] = useState<CalenderType>({
    nowYear: defaultYear,
    nowMonth: defaultMonth,
    nowDays: defaultDays,
    toDay: days
  })
  const { nowYear, nowMonth, nowDays, toDay } = calenderState

  const handleDayClick = useCallback(
    (dayInfo: DaysInfo) => {
      console.log(dayInfo.month, nowMonth)
      console.log(dayInfo)

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

      onClick(dayInfo)
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

  useEffect(() => {
    console.log('여기서 api콜을 해주세요~')
  }, [calenderState])

  return (
    <div className={'flex flex-col justify-center items-center w-[388px]'}>
      <div className={'flex flex-row'}>
        <div className={'cursor-pointer'} onClick={previousMonth}>
          {'<'}
        </div>
        <div>{`${nowYear}년 ${nowMonth}월`}</div>
        <div className={'cursor-pointer'} onClick={nextMonth}>
          {'>'}
        </div>
      </div>

      <div
        className={
          'flex flex-row w-full justify-center items-center mr-[8px] ml-[11px] mt-[17px] mb-[12px]'
        }
      >
        {WEEK.map((daysOfWeek, index) => (
          <div
            key={index}
            className={`w-full text-center font-nsk caption-13 font-bold mr-[15px]  ${
              daysOfWeek === 'SUN' || daysOfWeek === 'SAT'
                ? WeekStyle[daysOfWeek]
                : ''
            }`}
          >
            {daysOfWeek}
          </div>
        ))}
      </div>
      <div
        className={
          'flex-col flex w-full justify-center items-center mr-[8px] ml-[11px] mb-[18px]'
        }
      >
        {nowDays.map((week, index) => (
          <div
            key={index}
            className={
              'flex flex-row w-full justify-center items-center mt-[17px] mb[18px]'
            }
          >
            {week.map((daysInfo, index) => (
              <div
                key={index}
                className={`${daysInfo.style} ${
                  daysInfo.day === toDay && daysInfo.month === nowMonth
                    ? 'bg-[rgba(87,164,255,0.2)] rounded-full '
                    : ''
                }`}
                data-id={`${daysInfo.year}-${daysInfo.month}}`}
                onClick={() => handleDayClick(daysInfo)}
              >
                {daysInfo.day}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calender