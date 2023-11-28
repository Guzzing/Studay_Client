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

export interface OnboardingData {
  [key: string]: string | number | { nickname: string; grade: string }[]
}

export interface CreateChild {
  nickname: string
  grade: string
}
