interface AcademyInfo {
  academyName: string
  expectedFee: number
}
export interface LikeAcademyResponse {
  likeAcademyInfo: AcademyInfo[]
  totalFee: number
}
