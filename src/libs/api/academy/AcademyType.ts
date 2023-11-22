import {
  InfiniteScrollPage,
  SearchAcademiesResponse
} from '@/libs/api/mapapi/mapApiType.ts'

export type AcademyInfoRequest = {
  academyId: number
  childId: number
  lessonId: number
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
}

export interface PostDashboardResponse {
  dashboardId: number
  childId: number
  lessonId: number
}

export const AcademyMemo = [
  { serverData: 'kindness', clientData: '선생님이 친절해요 👨‍🏫' },
  { serverData: 'goodFacility', clientData: '시설이 좋아요 🏫' },
  {
    serverData: 'cheapFee',
    clientData: '교육비가 저렴해요 💰'
  },
  { serverData: 'goodManagement', clientData: '교육 관리가 철저해요 📝' },
  { serverData: 'lovelyTeaching', clientData: '학생에 대한 애정 가득 💓' },
  { serverData: 'shuttleAvailability', clientData: '등하원이 편리해요 🚌' }
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

export type AcademyScheduleType = {
  dayOfWeek: number
  startTime: string | undefined
  endTime: string | undefined
}

export type TempAcademyScheduleType = {
  weekArray: number[]
  startTime: string
  endTime: string | null
}

export type SelectWeekType = Record<number, number>

export type ClientSelectWeekType = Record<number, ClientWeekType>

export const WeekData: SelectWeekType = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  0: 7
}

export const ClientWeekData: ClientSelectWeekType = {
  1: '월요일',
  2: '화요일',
  3: '수요일',
  4: '목요일',
  5: '금요일',
  6: '토요일',
  7: '일요일'
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

export interface AcademyClassResponse {
  lessonId: 746
  subject: string
}

export type ServerAcademyType =
  | '예능(대)'
  | '국제화'
  | '입시, 검정 및 보습'
  | '직업기술'
  | '종합(대)'
  | '독서실'
  | '기예(대)'
  | '기타(대)'
  | '인문사회(대)'
  | '정보'

export type ClientAcademyType =
  | '예능'
  | '국제화'
  | '입시'
  | '직업기술'
  | '종합'
  | '독서실'
  | '기예'
  | '기타'
  | '인문사회'
  | '정보'

export type AcademyType = Record<ServerAcademyType, ClientAcademyType>

export const AcademyTypeData: AcademyType = {
  '예능(대)': '예능',
  국제화: '국제화',
  '입시, 검정 및 보습': '입시',
  직업기술: '직업기술',
  '종합(대)': '종합',
  독서실: '독서실',
  '기예(대)': '기예',
  '기타(대)': '기타',
  '인문사회(대)': '인문사회',
  정보: '정보'
}
