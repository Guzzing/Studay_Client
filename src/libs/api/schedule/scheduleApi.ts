import request from '@/libs/api'
import {
  CalendarDayPropsType,
  CalendarPropsType,
  CalendarResponse,
  DayScheduleResponse,
  PostScheduleType,
  BeforeEditInfoResponseType,
  UpdateScheduleType
} from '@/libs/api/schedule/scheduleType.ts'

export const getMonthScheduleAll = async ({
  year,
  month
}: CalendarPropsType): Promise<CalendarResponse> => {
  const monthData = month > 9 ? month : `0${month}`
  const res = await request.get(
    `/calendar/mark?year=${year}&month=${monthData}`
  )
  return res.data
}

export const getDaySchedule = async ({
  year,
  month,
  day
}: CalendarDayPropsType): Promise<DayScheduleResponse> => {
  const dayData = day > 9 ? day : `0${day}`
  const monthData = month > 9 ? month : `0${month}`
  const res = await request.get(
    `/calendar/date?date=${year}-${monthData}-${dayData}`
  )
  return res.data
}

export const deleteSchedule = async ({
  scheduleId
}: {
  scheduleId: number
}) => {
  const res = await request.delete(`/academy-schedules/${scheduleId}`)
  return res.data
}
export const postScheduleApi = async (
  schedule: PostScheduleType
): Promise<{ academyTimeTemplateIds: number[] }> => {
  const res = await request.post('/academy-schedules', schedule)
  return res.data
}

export const beforeEditInfoScheduleApi = async ({
  scheduleId
}: {
  scheduleId: number
}): Promise<BeforeEditInfoResponseType> => {
  const res = await request.get(`/academy-schedules/${scheduleId}`)
  return res.data
}

export const editScheduleApi = async ({
  payload
}: {
  payload: UpdateScheduleType | { isAllUpdated: true }
}) => {
  const res = await request.put(`/academy-schedules`, payload)
  return res.data
}
