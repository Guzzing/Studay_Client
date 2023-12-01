import { ReactNode } from 'react'

export interface ScheduleProfileBoxProps {
  mainTitle: string
  subTitle: string
  handleDetail: () => void
  children?: ReactNode
}
