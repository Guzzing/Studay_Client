import { NavigationStateType } from '@/components/common/navigationbar/NavigationBarType.ts'

export const SelectText = 'text-black-700'
export const SelectIconFill = 'fill-black-700'
export const DefaultText = 'text-gray-300'
export const DefaultIconFill = 'fill-gray-300'

export const initNavigationList: NavigationStateType[] = [
  {
    icon: 'SearchMap',
    text: '학원 지도',
    select: false
  },
  {
    icon: 'Home',
    text: '홈',
    select: true
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
  }
]
