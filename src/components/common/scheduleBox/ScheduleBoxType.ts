import { ReactNode } from 'react'

type ScheduleType = 'toggle' | 'profile'
export interface ScheduleBoxProps {
  scheduleType: ScheduleType
  mainTitle: string
  subElement: ReactNode // HTML태그를 넣을 수 있음!
  rightBottomElement?: ReactNode // HTML태그를 넣을 수 있음!
  isRegister?: boolean
  cntOfChild?: number
}
