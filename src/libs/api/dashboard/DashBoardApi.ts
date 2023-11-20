import request from '@/libs/api'
import { GetAllDashBoardResponse } from '@/libs/api/dashboard/DashBoardType'
import { ToggleAcademyResponseType } from '@/libs/api/dashboard/DashBoardType'

export const getAllDashboards = async (
  childId: number
): Promise<GetAllDashBoardResponse[]> => {
  const res = await request.get(
    `/dashboards?childId=${childId}&active-only=${false}`
  )
  return res.data.responses
}

export const patchToggleDashboardState = async (
  dashboardId: number
): Promise<ToggleAcademyResponseType> => {
  const res = await request.patch(`/dashboards/${dashboardId}/toggle`)
  return res.data
}

export const deleteDashboard = async (dashboardId: number) => {
  const res = await request.patch(`/dashboards/${dashboardId}`)
  return res.data
}

export const getDetailDashboard = async (
  dashboardId: number
): Promise<GetAllDashBoardResponse> => {
  const res = await request.get(`/dashboards/${dashboardId}`)
  return res.data
}
