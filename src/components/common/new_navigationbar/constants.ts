import { NavigationStateType } from '@/components/common/new_navigationbar/NewNavigationBarType.ts'

export const SelectText = 'text-green-50'
export const SelectIconFillStroke = 'fill-green-50 stroke-green-50'
export const SelectIconFill = 'fill-green-50'
export const DefaultText = 'text-gray-300'
export const DefaultIconFill = 'fill-gray-300 stroke-gray-300'

export const initNavigationList: NavigationStateType[] = [
  {
    icon: 'Home',
    text: '홈',
    select: true
  },
  {
    icon: 'SearchMap',
    text: '지도',
    select: false
  },
  {
    icon: 'Timetable',
    text: '시간표',
    select: false
  },
  {
    icon: 'Info',
    text: '학원 정보',
    select: false
  },
  {
    icon: 'MyPageIcon',
    text: '마이페이지',
    select: false
  }
]
