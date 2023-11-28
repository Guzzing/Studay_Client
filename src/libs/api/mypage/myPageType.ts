interface Children {
  childId: number
  childName: string
  schedule: string
  childProfileImageUrl: string
}
export interface GetMyPageResponse {
  nickname: string
  email: string
  childInformationResponses: Children[]
}
