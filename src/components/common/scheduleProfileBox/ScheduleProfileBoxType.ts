import { ReactNode } from 'react'

export interface ScheduleProfileBoxProps {
  mainTitle: string
  handleEdit: () => void
  handleDelete: () => void
  profileNode?: ReactNode
}
