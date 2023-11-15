export interface PostOnboardingRequest {
  nickname: string
  email: string
  children: {
    nickname: string
    grade: string
  }[]
}

export interface GetOnboardingResponse {
  userId: number
}
