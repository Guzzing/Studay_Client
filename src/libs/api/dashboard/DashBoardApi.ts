import request from '@/libs/api'
import { GetAllDashBoardResponse } from '@/libs/api/dashboard/DashBoardType'

export const getAllDashboards = async (
  childId: number
): Promise<GetAllDashBoardResponse[]> => {
  const res = await request.get(
    `/dashboards?childId=${childId}&active-only=${false}`
  )
  return res.data.responses
}
