interface Children {
  childId: number
  childName: string
  schedule: string
}
export interface GetMyPageResponse {
  nickname: string
  email: string
  childInformationResponses: Children[]
}
