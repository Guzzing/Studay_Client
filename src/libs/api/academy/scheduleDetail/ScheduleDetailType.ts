interface AcademyInfo {
  academyName: string
  address: string
}

interface LessonTimes {
  startTime: string
  endTime: string
}
interface LessonInfo {
  lessonName: string
  capacity: number
  totalFee: number
  lessonTimes: LessonTimes[]
  periodicity: string
}

interface ChildrenInfo {
  childId: number
  childName: string
  imageUrl: string
  memo: string
  dashBoardId: number
}

export interface ScheduleDetailResponse {
  date: string
  academyInfo: AcademyInfo
  lessonInfo: LessonInfo
  childrenInfos: ChildrenInfo[]
}

export interface ScheduleDetailRequest {
  requestedDate: string
  lessonId: number
  childId: number
  scheduleId: number
}

export interface DeleteScheduleRequest {
  academyScheduleId: number
  isAllDeleted: boolean
  requestDate: string
}
