interface Children {
  childId: number
  childname: string
  profile: string
  schedule: string
}
export interface GetMyPageResponse {
  nickname: string
  email: string
  children: Children[]
}
