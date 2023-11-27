import {
  ScheduleDetailResponse,
  ScheduleDetailRequest,
  DeleteScheduleRequest
} from './ScheduleDetailType'
import request from '@/libs/api'

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
  dashboardId,
  academyScheduleId,
  isAllDeleted,
  requestDate
}: DeleteScheduleRequest) => {
  await request.delete(`/academy-schedules/${academyScheduleId}`, {
    data: {
      dashboardId,
      academyScheduleId,
      isAllDeleted,
      requestDate
    }
  })
}
