import request from '@/libs/api'
import {
  GetAcademyFilter,
  GetAcademyFilterResponse
} from '@/libs/api/filter/filterApiType.ts'

export const getAcademyFilter = async ({
  latitude,
  longitude,
  pageNumber,
  categories,
  desiredMinAmount = 0,
  desiredMaxAmount = 0
}: GetAcademyFilter): Promise<GetAcademyFilterResponse> => {
  let url = `/academies/filter-scroll?lat=${latitude}&lng=${longitude}&categories=${categories}`
  if (desiredMaxAmount > 0 && desiredMinAmount > 0) {
    url += `&desiredMinAmount=${desiredMinAmount}&desiredMaxAmount=${desiredMaxAmount}`
  }
  url += `&pageNumber=${pageNumber}`
  const res = await request.get(url)
  return res.data
}
