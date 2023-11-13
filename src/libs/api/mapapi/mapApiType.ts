interface BeopjungdongResponse {
  subRegion: string[]
  subRegionCount: number
  targetRegion: string
}

interface SigunguResponse {
  targetRegion: string
  subRegion: string[]
  subRegionCount: number
}

interface DongneResponse {
  targetRegion: string
  subRegion: string[]
  subRegionCount: number
}

interface LocationResponse {
  sido: string
  sigungu: string
  upmyeondong: string
  latitude: number
  longitude: number
}

interface Academy {
  academyId: number
  academyName: string
  address: string
  contact: string
  areaOfExpertise: string
  latitute: number
  longitute: number
}

interface AcademiesResponse {
  academyGetResponses: Academy[]
}
