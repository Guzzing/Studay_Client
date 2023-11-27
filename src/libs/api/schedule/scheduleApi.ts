import request from '@/libs/api'
import {
  CalendarDayPropsType,
  CalendarPropsType,
  CalendarResponse,
  DayScheduleResponse,
  PostScheduleType
} from '@/libs/api/schedule/scheduleType.ts'

export const getMonthScheduleAll = async ({
  year,
  month
}: CalendarPropsType): Promise<CalendarResponse> => {
  const res = await request.get(`/calendar/mark?year=${year}&month=${month}`)
  return res.data
}

export const getDaySchedule = async ({
  year,
  month,
  day
}: CalendarDayPropsType): Promise<DayScheduleResponse> => {
  const dayData = day > 9 ? day : `0${day}`
  const res = await request.get(
    `/calendar/date?date=${year}-${month}-${dayData}`
  )
  return res.data
}

export const deleteSchedule = async ({
  scheduleId
}: {
  scheduleId: number
}) => {
  const res = await request.delete(`/academy-schedules/${scheduleId}`)

export const postScheduleApi = async (
  schedule: PostScheduleType
): Promise<{ academyTimeTemplateIds: number[] }> => {
  const res = await request.post('/academy-schedules', schedule)
  return res.data
}
