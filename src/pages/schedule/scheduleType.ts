import { OverlappingScheduleType } from '@/libs/api/schedule/scheduleType.ts'

export interface HandlerScheduleProps {
  childSchedule: OverlappingScheduleType[]
  mainTitle: string
  date: string
  lessonId: number | null
}
