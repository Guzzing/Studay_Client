import request from '@/libs/api'
export const postReview = async (
  childId: number
): Promise<GetAllDashBoardResponse[]> => {
  const res = await request.get(
    `/dashboards?childId=${childId}&active-only=${false}`
  )
  return res.data.responses
}
