import request from '@/libs/api'
import {
  AcademyResponse,
  CityResponse,
  DetailAcademyResponse,
  GetAcademyDetailProps,
  GetAcademysParams,
  GetLocationParam,
  GetTownParam,
  LocationResponse,
  ProvinceResponse,
  TownResponse
} from '@/libs/api/mapapi/mapApiType.ts'

export const getProvince = async (): Promise<ProvinceResponse> => {
  const res = await request.get('/regions/beopjungdong')
  return res.data
}

export const getCity = async ({
  province
}: {
  province: string
}): Promise<CityResponse> => {
  const res = await request.get(`/regions/beopjungdong/${province}`)
  return res.data
}

export const getTown = async ({
  province,
  city
}: GetTownParam): Promise<TownResponse> => {
  const res = await request.get(`/regions/beopjungdong/${province}/${city}`)
  return res.data
}

export const getLocation = async ({
  province,
  city,
  town
}: GetLocationParam): Promise<LocationResponse> => {
  const res = await request.get(
    `/regions/location?sido=${province}&sigungu=${city}&upmyeondong=${town}`
  )

  return res.data
}

export const getAcademyList = async ({
  latitude,
  longitude
}: GetAcademysParams): Promise<AcademyResponse> => {
  const res = await request.get(
    `/academies/complexes?lat=${latitude}&lng=${longitude}`
  )
  console.log(res.data)
  return res.data
}

export const getAcademyDetail = async ({
  academyId
}: GetAcademyDetailProps): Promise<DetailAcademyResponse> => {
  const res = await request.get(`/academies/${academyId}`)

  return res.data
}
