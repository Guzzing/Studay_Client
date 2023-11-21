import request from '@/libs/api'
import {
  AcademyInfoRequest,
  SearchAcademiesInfiniteScroll,
  PostDashboardResponse,
  AcademyClassResponse
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

export const getAcademyClass = async (
  academyId: number
): Promise<AcademyClassResponse[]> => {
  const res = await request.get(`/academies/${academyId}/lessons`)
  return res.data.lessonInfos
}
