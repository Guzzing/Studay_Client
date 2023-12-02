import { ComponentProps, ReactNode } from 'react'

type ScheduleType = 'toggle' | 'profile'
export interface ScheduleBoxProps extends ComponentProps<'div'> {
  scheduleType: ScheduleType
  mainTitle: string
  subElement: ReactNode // HTML태그를 넣을 수 있음!
  rightBottomElement?: ReactNode // HTML태그를 넣을 수 있음!
  isRegister?: boolean
  cntOfChild?: number
  handleToggle?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
  handleEdit?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
  handleDelete?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}
