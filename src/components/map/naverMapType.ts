import { Academy } from '@/libs/api/mapapi/mapApiType.ts'

export interface InitSelectAcademyType {
  isBottomSheet: boolean
  academy: Academy
}

export interface MarkerProps {
  value: string
  select: boolean
}

export interface CreateMarkerProps {
  latitude: number
  longitude: number
  title: string
}
