import { OverlappingScheduleType } from '@/libs/api/schedule/scheduleType.ts'

export interface ScheduleModalProps {
  childSchedule?: OverlappingScheduleType[]
  onCancel?: () => void
  onClick?: () => void
  mainTitle?: string
  type: string
}
