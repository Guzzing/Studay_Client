interface AcademyInfo {
  academyName: string
  address: string
}

interface LessonTime {
  startTime: string
  endTime: string
}
interface LessonInfo {
  lessonName: string
  capacity: number
  totalFee: number
  lessonTimes: LessonTime
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
  childrenInfo: ChildrenInfo
  categories: string[]
}

export interface ScheduleDetailRequest {
  lessonId: number
  childId: number
  scheduleId: number
}

export interface DeleteScheduleRequest {
  academyScheduleId: number
  isAllDeleted: boolean
}
