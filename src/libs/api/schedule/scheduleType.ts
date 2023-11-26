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
  endTime: string
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
