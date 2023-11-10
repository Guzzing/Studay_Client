import { atom } from 'jotai'
import { MapInfoAtomType } from '../../types/selectcity.ts'

export const mapInfoAtom = atom<MapInfoAtomType>({
  selectSido: '',
  selectSigungu: '',
  selectDongne: '',
  latitude: 0,
  longitude: 0
})
