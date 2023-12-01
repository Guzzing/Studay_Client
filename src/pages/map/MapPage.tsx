import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useAtom } from 'jotai/index'
import SettingPage from '../setting/SettingPage'
import BottomSheet from '@/components/common/bottomsheet/BottomSheet.tsx'
import Spacing from '@/components/common/spacing/Spacing.tsx'
import MapSearchBar from '@/components/map/MapSearchBar.tsx'
import NaverMap from '@/components/map/NaverMap.tsx'
import { getAcademyFilter } from '@/libs/api/filter/filterApi.ts'
import { getAcademyList } from '@/libs/api/mapapi/mapApi.ts'
import useSidebar from '@/libs/hooks/useSidebar'
import {
  mapInfoAtom,
  selectAcademyAtom,
  selectSearchAcademyAtom
} from '@/libs/store/mapInfoAtom.ts'

const MapPage = () => {
  const [mapInfo] = useAtom(mapInfoAtom)
  const [selectAcademy] = useAtom(selectAcademyAtom)
  const [selectValue] = useAtom(selectSearchAcademyAtom)
  const location = useLocation()
  const queryString = location.search
  const { toggleOpen } = useSidebar()
  const { data: academyList } = useQuery({
    queryKey: ['academyList', mapInfo.latitude, mapInfo.longitude],
    queryFn: () =>
      getAcademyList({
        latitude: mapInfo.latitude,
        longitude: mapInfo.longitude
      }),
    enabled: !queryString && selectValue.academyId === -1
  })

  const { data: academyFilterList } = useQuery({
    queryKey: ['academyFilterList', queryString],
    queryFn: () => getAcademyFilter({ queryString: queryString }),
    enabled: queryString.length > 0
  })

  return (
    <div className={'bg-white-100 w-full h-full relative overflow-hidden'}>
      <SettingPage isOpen={toggleOpen} />
      <Spacing size={80} />
      <MapSearchBar />
      <NaverMap
        academyList={
          academyList?.academiesByLocationResponse ||
          academyFilterList?.academyFilterResponses ||
          []
        }
      />
      {selectAcademy.isBottomSheet && (
        <BottomSheet
          title={selectAcademy.academy.academyName}
          address={selectAcademy.academy.address}
          number={selectAcademy.academy.contact}
          academyId={selectAcademy.academy.academyId}
        />
      )}
    </div>
  )
}
export default MapPage
