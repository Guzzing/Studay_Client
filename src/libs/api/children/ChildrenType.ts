export interface GetChildrenInfoResponse {
  childId: number
  grade: string
  nickname: string
  schedule: string
}

export interface EditChildInfoRequest {
  childId: number
  nickname: string
  grade: string
}
