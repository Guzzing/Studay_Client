import { ChildrenScheduleInfo } from '@/libs/api/children/ChildrenType'
export const scheduleParse = (
  schedule: ChildrenScheduleInfo,
  childName: string
) => {
  if (schedule.academyName === '수행 중인 학원이 없습니다.') {
    return `${childName}는 현재 수행 중인 일정이 없어요.`
  }
  return `${schedule.academyName}에서 열공중!`
}
