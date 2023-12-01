export interface GetChildrenInfoResponse {
  childId: number
  grade: string
  nickname: string
  schedule: string
  profileImageUrl: string
}

export interface EditChildInfoRequest {
  childId: number
  profileImageUrl: string
  nickname: string
  grade: string
}
