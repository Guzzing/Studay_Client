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
