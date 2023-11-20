import request from '@/libs/api'
import {
  AcademyInfoRequest,
  SearchAcademiesInfiniteScroll,
  PostDashboardResponse
} from '@/libs/api/academy/AcademyType'

export const getAcademiesSearchResult = async (
  academyName: string,
  pageNumber: number
): Promise<SearchAcademiesInfiniteScroll> => {
  const res = await request.get(
    `/academies/search?academyName=${academyName}&pageNumber=${pageNumber}`
  )
  return res.data.academiesByNameResponses
}

export const postDashboardInfo = async (
  dashboardInfo: AcademyInfoRequest
): Promise<PostDashboardResponse> => {
  const res = await request.post('/dashboards', dashboardInfo)
  return res.data
}
