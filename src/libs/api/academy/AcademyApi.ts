import request from '@/libs/api'
import { SearchAcademiesInfiniteScroll } from '@/libs/api/academy/AcademyType'

export const getAcademiesSearchResult = async (
  academyName: string,
  pageNumber: number
): Promise<SearchAcademiesInfiniteScroll> => {
  console.log(academyName)
  const res = await request.get(
    `/academies/search?academyName=${academyName}&pageNumber=${pageNumber}`
  )
  return res.data.academiesByNameResponses
}
