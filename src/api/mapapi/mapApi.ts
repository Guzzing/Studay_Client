import request from '../index.ts'

export const getBeopjungdong = async (): Promise<BeopjungdongResponse> => {
  const res = await request.get('/regions/beopjungdong')
  return res.data
}

export const getSigungu = async (sido: string): Promise<SigunguResponse> => {
  const res = await request.get(`/regions/beopjungdong/${sido}`)
  return res.data
}

interface GetDongneParam {
  sido: string
  sigungu: string
}

export const getDongne = async ({
  sido,
  sigungu
}: GetDongneParam): Promise<DongneResponse> => {
  const res = await request.get(`/regions/beopjungdong/${sido}/${sigungu}`)
  return res.data
}

interface GetLocationParam {
  sido: string
  sigungu: string
  dongne: string
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
