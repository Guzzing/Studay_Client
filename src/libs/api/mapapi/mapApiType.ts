export interface GetLocationParam {
  province: string
  city: string
  town: string
}
export interface ProvinceResponse {
  subRegion: string[]
  subRegionCount: number
  targetRegion: string
}

export interface CityResponse {
  targetRegion: string
  subRegion: string[]
  subRegionCount: number
}

export interface GetTownParam {
  province: string
  city: string
}

export interface TownResponse {
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

export interface GetAcademyParams {
  latitude: number
  longitude: number
  pageNumber: number
}

export interface Academy {
  academyId: number
  academyName: string
  address: string
  contact: string
  categories: string[]
  latitude: number
  longitude: number
  shuttleAvailable: string
  isLiked: boolean
}

export interface SearchAcademy {
  academyId: number
  academyName: string
  address: string
  areaOfExpertise: string
  latitude: number
  longitude: number
}

export interface AcademyResponse {
  academiesByLocationResponse: Academy[]
  hasNext: boolean
  sido: string
  sigungu: string
  upmyeondong: string
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
  shuttleAvailabilityCount: number
}

export interface DetailAcademyResponse {
  academyName: string
  contact: string
  address: string
  shuttleAvailability: string
  expectedFee: number
  updatedDate: string
  categories: string[]
  lessonGetResponses: {
    lessons: Lesson[]
  }
  reviewPercentGetResponse: ReviewPercent
  isLiked: boolean
}

export interface SearchAcademiesResponse {
  academyId: number
  academyName: string
  address: string
  latitude: number
  longitude: number
}

export interface InfiniteScrollPage {
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

export interface LikeResponse {
  likeId: number
  memberId: number
  academyId: number
}
