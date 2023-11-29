import {
  ScheduleDetailResponse,
  ScheduleDetailRequest,
  DeleteScheduleRequest
} from './ScheduleDetailType'
import request from '@/libs/api'

// /academy-schedules/detail?requestedDate=2023-11-06&lessonId=109347&childId=208&scheduleId=117
export const getAcademiesScheduleDetail = async ({
  lessonId,
  childId,
  scheduleId
}: ScheduleDetailRequest): Promise<ScheduleDetailResponse> => {
  const scheduleDetail = await request.get(
    `/academy-schedules/detail/${scheduleId}`,
    {
      params: { lessonId, childId }
    }
  )
  return scheduleDetail.data
}

export const deleteAcademySchedule = async ({
  academyScheduleId,
  isAllDeleted
}: DeleteScheduleRequest) => {
  await request.delete(
    `/academy-schedules/${academyScheduleId}?isAllDeleted=${isAllDeleted}`
  )
}
