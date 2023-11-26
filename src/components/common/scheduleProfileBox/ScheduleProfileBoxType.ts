import { ReactNode } from 'react'

export interface ScheduleProfileBoxProps {
  mainTitle: string
  subTitle: string
  handleEdit: () => void
  handleDelete: () => void
  handleDetail: () => void
  children?: ReactNode
}
