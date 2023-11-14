interface Children {
  childId: number
  childname: string
  profile: string
  schedule: string
}
export interface MyPageResponse {
  nickname: string
  email: string
  children: Children[]
}

export interface MyPageRequest {
  userId: number
}
