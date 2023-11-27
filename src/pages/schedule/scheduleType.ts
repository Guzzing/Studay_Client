import { OverlappingScheduleType } from '@/libs/api/schedule/scheduleType.ts'

export interface ScheduleModalType {
  modalType: 'delete' | 'edit' | 'detail' | ''
}
export interface HandlerScheduleProps extends ScheduleModalType {
  childSchedule: OverlappingScheduleType[]
  mainTitle: string
  date: string
  lessonId: number | null
}

export interface ScheduleModalProps extends HandlerScheduleProps {
  close: () => void
}
