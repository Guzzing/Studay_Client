export type AcademyInfoRequest = {
  academyId: number
  childId: number
  lessonId: number
  schedules: AcademyScheduleType[]
  paymentInfo: {
    educationFee: number | null
    bookFee: number | null
    shuttleFee: number | null
    etcFee: number | null
    paymentDay: number | null
  }
  simpleMemo: {
    kindness: boolean
    goodFacility: boolean
    cheapFee: boolean
    goodManagement: boolean
    lovelyTeaching: boolean
    shuttleAvailability: boolean
  }
}

export const AcademyMemo = [
  '선생님이 친절해요 👨‍🏫',
  '시설이 좋아요 🏫',
  '교육 관리가 철저해요 📝',
  '학생에 대한 애정 가득 💓',
  '등하원이 편리해요 🚌',
  '교육비가 저렴해요 💰'
] as const

export type AcademyMemoType = (typeof AcademyMemo)[number]

export type ServerWeekType =
  | 'MONDAY'
  | 'TUESDAY'
  | 'WEDNESDAY'
  | 'THURSDAY'
  | 'FRIDAY'
  | 'SATURDAY'
  | 'SUNDAY'

export type ClientWeekType =
  | '월요일'
  | '화요일'
  | '수요일'
  | '목요일'
  | '금요일'
  | '토요일'
  | '일요일'

export type RepeatanceType =
  | 'NONE'
  | 'DAILY'
  | 'WEEKLY'
  | 'BIWEEKLY'
  | 'MONTHLY'
  | 'YEARLY'

export type RepeatOptionType =
  | '안 함'
  | '매주'
  | '격주'
  | '한달마다'
  | '매일'
  | '매년'

export type AcademyScheduleType = {
  dayOfWeek: ServerWeekType
  startTime: string
  endTime: string
  repeatance: RepeatanceType
}

export type TempAcademyScheduleType = {
  weekArray: number[]
  startTime: string
  endTime: string | null
  repeatance: RepeatanceType
}

export type SelectRepeatanceType = Record<RepeatOptionType, RepeatanceType>
export type SelectWeekType = Record<number, ServerWeekType>

export type ClientSelectWeekType = Record<ServerWeekType, ClientWeekType>
export const RepeatanceData: SelectRepeatanceType = {
  '안 함': 'NONE',
  매일: 'DAILY',
  매주: 'WEEKLY',
  격주: 'BIWEEKLY',
  한달마다: 'MONTHLY',
  매년: 'YEARLY'
}

export const WeekData: SelectWeekType = {
  1: 'MONDAY',
  2: 'TUESDAY',
  3: 'WEDNESDAY',
  4: 'THURSDAY',
  5: 'FRIDAY',
  6: 'SATURDAY',
  0: 'SUNDAY'
}

export const ClientWeekData: ClientSelectWeekType = {
  MONDAY: '월요일',
  TUESDAY: '화요일',
  WEDNESDAY: '수요일',
  THURSDAY: '목요일',
  FRIDAY: '금요일',
  SATURDAY: '토요일',
  SUNDAY: '일요일'
}

export interface SearchAcademiesInfiniteScroll {
  content: SearchAcademiesResponse[]
  pageable: InfiniteScrollPage
  size: number
  number: number
  sort: {
    empty: boolean
    sorted: boolean
    unsorted: boolean
  }
  first: boolean
  last: boolean
  numberOfElements: number
  empty: boolean
}
