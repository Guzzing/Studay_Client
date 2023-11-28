import { AcademyScheduleType } from '@/libs/api/academy/AcademyType'
export const getFormattingDate = (date: Date) => {
  const year = date.getFullYear()
  const month = ('0' + (1 + date.getMonth())).slice(-2)
  const day = ('0' + date.getDate()).slice(-2)

  return year + '-' + month + '-' + day
}
