import {
  ScheduleDetailResponse,
  ScheduleDetailRequest,
  DeleteScheduleRequest
} from './ScheduleDetailType'
import request from '@/libs/api'

// /academy-schedules/detail?requestedDate=2023-11-06&lessonId=109347&childId=208&scheduleId=117
export const getAcademiesScheduleDetail = async ({
  requestedDate,
  lessonId,
  childId,
  scheduleId
}: ScheduleDetailRequest): Promise<ScheduleDetailResponse> => {
  const scheduleDetail = await request.get(`/academy-schedules/detail`, {
    params: { requestedDate, lessonId, childId, scheduleId }
  })
  return scheduleDetail.data
}

export const deleteAcademySchedule = async ({
  academyScheduleId,
  isAllDeleted,
  requestDate
}: DeleteScheduleRequest) => {
  await request.delete('/academy-schedules', {
    data: {
      academyScheduleId,
      isAllDeleted,
      requestDate
    }
  })
}
