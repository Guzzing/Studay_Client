import { Academy } from '@/libs/api/mapapi/mapApiType.ts'

export interface GetAcademyFilter {
  latitude: number
  longitude: number
  pageNumber: number
  categories: string
  desiredMinAmount?: number
  desiredMaxAmount?: number
}

export interface GetAcademyFilterResponse {
  AcademiesFilterWithScrollResponses: Academy[]
  hasNext: boolean
}
