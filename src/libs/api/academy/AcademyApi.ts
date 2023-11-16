import request from '@/libs/api'
import { SearchAcademiesInfiniteScroll } from '@/libs/api/academy/AcademyType'

export const getAcademiesSearchResult = async ({
  academyName,
  pageNumber
}: {
  academyName: string
  pageNumber: number
}): Promise<SearchAcademiesInfiniteScroll> => {
  const res = await request.get(`/academies/search`, {
    params: {
      academyName: academyName,
      pageNumber: pageNumber
    }
  })
  return res.data
}
