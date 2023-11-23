interface Children {
  childId: number
  childName: string
  schedule: string
  // profileImageUrl : string
}
export interface GetMyPageResponse {
  nickname: string
  email: string
  childInformationResponses: Children[]
}
