import { atom } from 'jotai'
import { MapInfoAtomType } from '../../types/selectcity.ts'

export const mapInfoAtom = atom<MapInfoAtomType>({
  selectSido: '',
  selectSigungu: '',
  selectDongne: '',
  latitude: 37.444_916_8,
  longitude: 127.138_868
})
