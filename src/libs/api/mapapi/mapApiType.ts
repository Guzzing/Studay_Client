export interface GetLocationParam {
  sido: string
  sigungu: string
  dongne: string
}
export interface BeopjungdongResponse {
  subRegion: string[]
  subRegionCount: number
  targetRegion: string
}

export interface SigunguResponse {
  targetRegion: string
  subRegion: string[]
  subRegionCount: number
}

export interface GetDongneParam {
  sido: string
  sigungu: string
}

export interface DongneResponse {
  targetRegion: string
  subRegion: string[]
  subRegionCount: number
}

export interface LocationResponse {
  sido: string
  sigungu: string
  upmyeondong: string
  latitude: number
  longitude: number
}

export interface GetAcademysParams {
  latitude: number
  longitude: number
}

export interface Academy {
  academyId: number
  academyName: string
  address: string
  contact: string
  areaOfExpertise: string
  latitude: number
  longitude: number
}

export interface AcademyResponse {
  academiesByLocationResponse: Academy[]
}

export interface GetAcademyDetailProps {
  academyId: number
}

interface Lesson {
  lessonId: number
  subject: string
  capacity: number
  duration: string
  totalFee: number
}

interface ReviewPercent {
  kindnessPercent: number
  goodFacilityPercent: number
  cheapFeePercent: number
  goodManagementPercent: number
  lovelyTeachingPercent: number
}

export interface DetailAcademyResponse {
  academyName: string
  contact: string
  fullAddress: string
  shuttleAvailability: string
  expectedFee: number
  updatedDate: string
  areaOfExpertise: string
  lessonGetResponses: {
    lessons: Lesson[]
  }
  reviewPercentGetResponse: ReviewPercent
  isLiked: boolean
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
