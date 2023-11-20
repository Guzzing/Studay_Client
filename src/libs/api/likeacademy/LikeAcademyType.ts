interface AcademyInfo {
  likeId: number
  academyId: number
  academyName: string
  expectedFee: number
}
export interface GetLikeAcademyResponse {
  likeAcademyInfos: AcademyInfo[]
  totalFee: number
}
