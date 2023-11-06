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

interface GetAcademysParams {
  latitute: number
  longitute: number
}
export const getAcademys = async ({
  latitute,
  longitute
}: GetAcademysParams): Promise<AcademiesResponse> => {
  const res = await request.get(
    `/academies/complexes?lat=${latitute}&lng=${longitute}`
  )
  console.log(res.data)
  return {
    academyGetResponses: [
      {
        academyId: 1,
        academyName: '유원우 코딩학원',
        address: '000-0000-0000',
        contact: '경기도 성남시 중원구 망포동',
        areaOfExpertise: '예능(대)',
        latitute: 37.450_318_893_961_23,
        longitute: 127.147_924_756_238_62
      },
      {
        academyId: 2,
        academyName: '박세영 코딩학원',
        address: '000-0000-0000',
        contact: '경기도 성남시 중원구 망포동',
        areaOfExpertise: '예능(대)',
        latitute: 37.449_300_552_076_97,
        longitute: 127.128_977_651_105_33
      },
      {
        academyId: 3,
        academyName: '김별 코딩학원',
        address: '000-0000-0000',
        contact: '경기도 성남시 중원구 망포동',
        areaOfExpertise: '예능(대)',
        latitute: 37.453_687_266_640_04,
        longitute: 127.141_373_929_984_35
      },
      {
        academyId: 4,
        academyName: '김희석보스 코딩학원',
        address: '000-0000-0000',
        contact: '경기도 성남시 중원구 망포동',
        areaOfExpertise: '예능(대)',
        latitute: 37.447_142_768_643_374,
        longitute: 127.149_843_429_549_63
      },
      {
        academyId: 5,
        academyName: '김유진 코딩학원',
        address: '000-0000-0000',
        contact: '경기도 성남시 중원구 망포동',
        areaOfExpertise: '예능(대)',
        latitute: 37.447_604_171_646_98,
        longitute: 127.149_678_365_593_8
      }
    ]
  } as AcademiesResponse
}
