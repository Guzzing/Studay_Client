import { OverlappingScheduleType } from '@/libs/api/schedule/scheduleType.ts'

export interface HandlerScheduleProps {
  childSchedule: OverlappingScheduleType[]
  date: string
  lessonId: number | null
}
