import request from '@/libs/api'
import {
  AcademyResponse,
  BeopjungdongResponse,
  DongneResponse,
  GetAcademyDetailProps,
  GetAcademysParams,
  GetDongneParam,
  GetLocationParam,
  LocationResponse,
  SigunguResponse
} from '@/libs/api/mapapi/mapApiType.ts'

export const getBeopjungdong = async (): Promise<BeopjungdongResponse> => {
  const res = await request.get('/regions/beopjungdong')
  return res.data
}

export const getSigungu = async (sido: string): Promise<SigunguResponse> => {
  const res = await request.get(`/regions/beopjungdong/${sido}`)
  return res.data
}

export const getDongne = async ({
  sido,
  sigungu
}: GetDongneParam): Promise<DongneResponse> => {
  const res = await request.get(`/regions/beopjungdong/${sido}/${sigungu}`)
  return res.data
}

export const getLocation = async ({
  sido,
  sigungu,
  dongne
}: GetLocationParam): Promise<LocationResponse> => {
  const res = await request.get(
    `/regions/location?sido=${sido}&sigungu=${sigungu}&upmyeondong=${dongne}`
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
}: GetAcademyDetailProps): Promise<AcademyResponse> => {
  const res = await request.get(`/academies/${academyId}`)

  return res.data
}
