import { Academy } from '@/libs/api/mapapi/mapApiType.ts'

export interface InitSelectAcademyType {
  isBottomSheet: boolean
  academy: Academy
}

export interface MarkerProps {
  value: string
  select: boolean
}
