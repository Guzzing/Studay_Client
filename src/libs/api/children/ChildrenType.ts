export interface GetChildrenInfoResponse {
  childId: number
  grade: string
  nickname: string
  schedule: ChildrenScheduleInfo
  profileImageUrl: string
}

export interface ChildrenScheduleInfo {
  academyName: string
  lessonEndTime: string
  lessonStartTime: string
  lessonSubject: string
  schedule_date: string
}

export interface EditChildInfoRequest {
  childId: number
  profileImageUrl: string
  nickname: string
  grade: string
}
