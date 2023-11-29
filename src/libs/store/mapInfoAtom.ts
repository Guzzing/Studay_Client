import { atom } from 'jotai'
import { MapInfoAtomType } from '../../types/selectcity.ts'
import { InitSelectAcademyType } from '@/components/map/naverMapType.ts'
import { SearchAcademiesResponse } from '@/libs/api/mapapi/mapApiType.ts'

export const mapInfoAtom = atom<MapInfoAtomType>({
  selectProvince: '',
  selectCity: '',
  selectTown: '',
  latitude: 37.444_916_8,
  longitude: 127.138_868
})

export const selectAcademyAtom = atom<InitSelectAcademyType>({
  isBottomSheet: false,
  academy: {
    academyId: -1,
    academyName: '',
    address: '',
    contact: '',
    areaOfExpertise: '',
    latitude: -1,
    longitude: -1
  }
})

export const selectSearchAcademyAtom = atom<SearchAcademiesResponse>({
  academyId: -1,
  academyName: '',
  address: '',
  latitude: -1,
  longitude: -1
})
