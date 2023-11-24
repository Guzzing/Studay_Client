import { ServerAcademyType } from '@/libs/api/academy/AcademyType'

export interface GetAllDashBoardResponse {
  dashboardId: number
  childInfo: {
    childId: number
    childName: string
  }
  academyInfo: AcademyInfoType
  lessonInfo: AcademyLessonType
  schedules: AcademyScheduleType[]
  paymentInfo: {
    educationFee: number
    bookFee: number
    shuttleFee: number
    etcFee: number
    paymentDay: string
  }
  simpleMemo: {
    kindness: boolean
    goodFacility: boolean
    cheapFee: boolean
    goodManagement: boolean
    lovelyTeaching: boolean
    shuttleAvailability: boolean
  }
  isActive: boolean
}

interface AcademyInfoType {
  academyId: number
  academyName: string
  contact: string
  fullAddress: string
  shuttleAvailability: 'AVAILABLE' | 'DISAVAILABLE'
  expectedFee: number
  updatedDate: string
  areaOfExpertise: ServerAcademyType
}

export interface AcademyScheduleType {
  dayOfWeek: number
  startTime: string
  endTime: string
}

interface AcademyLessonType {
  lessonId: number
  subject: ServerAcademyType
  capacity: number
  duration: string
  totalFee: number
}

export interface ToggleAcademyResponseType {
  dashboardId: number
  active: boolean
}
