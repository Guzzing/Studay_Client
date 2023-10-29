import { MonthType } from '../../../types/date.ts'

export const WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
export const defaultWeek = [0, 0, 0, 0, 0, 0, 0]
export const WeekStyle = {
  WEEKDAY:
    'w-full text-center cursor-pointer font-nsk caption-13 font-bold mr-[15px]',
  SUN: 'text-red-500',
  SAT: 'text-blue-500',
  OPACITY: 'opacity-20'
}

export const DECEMBER = 12 as MonthType
export const JANUARY = 1 as MonthType
