import request from '@/libs/api'
import {
  CalendarPropsType,
  CalendarResponse
} from '@/libs/api/schedule/scheduleType.ts'

export const getMonthScheduleAll = async ({
  year,
  month
}: CalendarPropsType): Promise<CalendarResponse> => {
  const res = await request.get(`/calendar/mark?year=${year}&month=${month}`)
  return res.data
}
