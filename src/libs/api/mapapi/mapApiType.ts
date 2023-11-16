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
  latitute: number
  longitute: number
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

interface SearchAcademiesResponse {
  academyId: number
  academyName: string
  address: string
  latitude: number
  longitude: number
}

interface InfiniteScrollPage {
  pageNumber: number
  pageSize: number
  sort: {
    empty: boolean
    sorted: boolean
    unsorted: boolean
  }
  offset: number
  paged: boolean
  unpaged: boolean
}
