import { atom } from 'jotai'
import { MapInfoAtomType } from '../../types/selectcity.ts'
import { Academy } from '@/libs/api/mapapi/mapApiType.ts'

export const mapInfoAtom = atom<MapInfoAtomType>({
  selectProvince: '서울특별시',
  selectCity: '강남구',
  selectTown: '대치동',
  latitude: 37.493_182,
  longitude: 127.056_705
})

export const InitSelectAcademy = atom<Academy | null>(null)
