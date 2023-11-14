interface AcademyInfo {
  academyName: string
  expectedFee: number
}
export interface GetLikeAcademyResponse {
  likeAcademyInfo: AcademyInfo[]
  totalFee: number
}
