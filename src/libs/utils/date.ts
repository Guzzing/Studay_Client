import {
  DECEMBER,
  JANUARY,
  WeekStyle
} from '../../components/common/calender/constants.ts'
import { MonthType, DaysInfo, DayType } from '../../types/date.ts'

export const defaultDate = (): [number, MonthType, DaysInfo[][], DayType] => {
  const nowDate = new Date()
  const year = nowDate.getFullYear()
  const month = (nowDate.getMonth() + 1) as MonthType
  const days = getDays(year, month)
  const today = nowDate.getDate() as DayType

  return [year, month, days, today]
}

export const getPrevDays = (
  year: number,
  month: MonthType
): [number, MonthType] => {
  return [year, month]
}

export const getDays = (year: number, month: MonthType) => {
  //실제 Month 데이터는 0 ~ 11이기 때문에 -1 해줘야 한다.
  const nowMonth = month - 1
  const lastDay = getLastDayOfMonth(year, month)
  const lastWeek = getLastWeeksOfMonth(year, month)

  const weeks: DaysInfo[][] = Array.from<DaysInfo[]>({ length: lastWeek })
    .fill([])
    .map(() =>
      Array.from<DaysInfo>({ length: 7 }).fill({
        year: year,
        month: month,
        day: 0,
        style: ''
      })
    )

  const firstDay = new Date(year, nowMonth, 1).getDay()
  //이번달
  for (let day = 1; day <= lastDay; day++) {
    const currentDate = new Date(year, nowMonth, day)
    const dayOfWeek = currentDate.getDay() // 0 (일요일) ~ 6 (토요일)
    const weekNumber = Math.floor((day - 1 + firstDay) / 7)
    weeks[weekNumber][dayOfWeek] = {
      ...weeks[weekNumber][dayOfWeek],
      day: day as DayType,
      style: `${WeekStyle.WEEKDAY} ${dayOfWeek === 0 ? WeekStyle.SUN : ''} ${
        dayOfWeek === 6 ? WeekStyle.SAT : ''
      }`
    }
  }

  //이전달
  const prevMonth =
    month - 1 === 0 ? (DECEMBER as MonthType) : ((month - 1) as MonthType)
  const prevYear = month - 1 === 0 ? year - 1 : year

  const prevMonthLastDay = getLastDayOfMonth(prevYear, prevMonth)
  for (let i = 0; i < firstDay; i++) {
    weeks[0][i] = {
      year: prevYear,
      month: prevMonth,
      day: (prevMonthLastDay - firstDay + i + 1) as DayType,
      style: `${WeekStyle.WEEKDAY} ${WeekStyle.OPACITY}`
    }
  }

  // 다음달
  // 마지막 주에서 0의 값을 다음 달의 데이터로 채우기
  const nextMonth = (month + 1 === 13 ? JANUARY : month + 1) as MonthType
  const nextYear = month + 1 === 13 ? year + 1 : year
  let nextMonthDay = 1
  for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
    if (weeks[lastWeek - 1][dayOfWeek]['day'] === 0) {
      weeks[lastWeek - 1][dayOfWeek] = {
        year: nextYear,
        month: nextMonth,
        day: nextMonthDay as DayType,
        style: `${WeekStyle.WEEKDAY} ${WeekStyle.OPACITY} ${
          dayOfWeek === 0 ? WeekStyle.SUN : ''
        } ${dayOfWeek === 6 ? WeekStyle.SAT : ''}`
      }
      nextMonthDay++
    }
  }

  return weeks
}

function getLastDayOfMonth(year: number, month: MonthType) {
  // month는 0부터 시작 (0: 1월, 1: 2월, ... 11: 12월)
  return new Date(year, month, 0).getDate()
}

function getLastWeeksOfMonth(year: number, month: MonthType) {
  const firstDate = new Date(year, month - 1, 1)
  const lastDate = new Date(year, month, 0)

  const firstDay = firstDate.getDay()

  // 첫 주와 마지막 주를 포함하여 계산
  const weeks = Math.ceil((lastDate.getDate() + firstDay) / 7)

  return weeks
}
