import { ClientWeekType } from '@/libs/api/academy/AcademyType'

export interface CalendarPropsType {
  year: number
  month: number
}
export interface CalendarDayPropsType extends CalendarPropsType {
  day: number
}

export interface Holidays {
  date: string
  names: string[]
}
export interface CalendarResponse {
  holidays: Holidays[] | []
  existenceDays: number[]
}

export interface OverlappingScheduleType {
  scheduleId: number
  childId: number
  childImageUrl: string
  isRepeatable: boolean
}

interface ScheduleType {
  lessonId: number
  academyName: string
  lessonName: string
  endTIme: string
  overlappingSchedules: OverlappingScheduleType[]
}

interface DateResponseType {
  startTime: string
  schedules: ScheduleType[]
}

export interface DayScheduleResponse {
  date: string
  dateResponses: DateResponseType[]
}
export interface PostScheduleType {
  lessonScheduleCreateRequests: LessonScheduleType[]
  attendanceDate: {
    startDateOfAttendance: string
    endDateOfAttendance: string
  }
  isAlarmed: boolean
  periodicity: PeriodicityType
  childId: number
  dashboardId: number
  memo: string
}

export interface LessonScheduleType {
  dayOfWeek: WeekStringType
  lessonTime: {
    lessonStartTime: string
    lessonEndTime: string
  }
}

export type PeriodicityType = 'WEEKLY'

export type WeekStringType =
  | 'MONDAY'
  | 'TUESDAY'
  | 'WEDNESDAY'
  | 'THURSDAY'
  | 'FRIDAY'
  | 'SATURDAY'
  | 'SUNDAY'

export type ScheduleClientWeekDataType = Record<WeekStringType, ClientWeekType>
export type ScheduleServerWeekDataType = Record<number, WeekStringType>
export const ScheduleClientWeekData: ScheduleClientWeekDataType = {
  MONDAY: '월요일',
  TUESDAY: '화요일',
  WEDNESDAY: '수요일',
  THURSDAY: '목요일',
  FRIDAY: '금요일',
  SATURDAY: '토요일',
  SUNDAY: '일요일'
}

export const ScheduleServerWeekData: ScheduleServerWeekDataType = {
  1: 'MONDAY',
  2: 'TUESDAY',
  3: 'WEDNESDAY',
  4: 'THURSDAY',
  5: 'FRIDAY',
  6: 'SATURDAY',
  7: 'SUNDAY'
}
