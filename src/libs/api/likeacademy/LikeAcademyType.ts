interface AcademyInfo {
  academyId: number
  academyName: string
  expectedFee: number
}
export interface GetLikeAcademyResponse {
  likeAcademyInfos: AcademyInfo[]
  totalFee: number
}
