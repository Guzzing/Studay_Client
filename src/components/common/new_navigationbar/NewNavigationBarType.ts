import { IconType } from '@/components/common/icon/Icon.tsx'

export interface NavigationStateType {
  icon: IconType
  text: string
  select: boolean
}

export interface NavigationBarProps {
  selectIcon: 'SearchMap' | 'Home' | 'Timetable' | 'Info' | 'MyPageIcon'
}
