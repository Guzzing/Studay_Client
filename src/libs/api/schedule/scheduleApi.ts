import request from '@/libs/api'
import { PostScheduleType } from '@/libs/api/schedule/scheduleType'

export const postScheduleApi = async (
  schedule: PostScheduleType
): Promise<{ academyTimeTemplateIds: number[] }> => {
  const res = await request.post('/academy-schedules', schedule)
  return res.data
}
