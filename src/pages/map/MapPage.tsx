import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useAtom } from 'jotai/index'
import { SetLocationProps } from '../../types/mapPage.ts'
import SettingPage from '../setting/SettingPage.tsx'
import Spacing from '@/components/common/spacing/Spacing.tsx'
import MapSearchBar from '@/components/map/MapSearchBar.tsx'
import NaverMap from '@/components/map/NaverMap.tsx'
import { getAcademyFilter } from '@/libs/api/filter/filterApi.ts'
import { getAcademyList } from '@/libs/api/mapapi/mapApi.ts'
import useSidebar from '@/libs/hooks/useSidebar.tsx'
import { mapInfoAtom } from '@/libs/store/mapInfoAtom.ts'

const MapPage = () => {
  const location = useLocation()
  const queryString = location.search

  const { toggleOpen } = useSidebar()

  const [mapInfo, setMapInfo] = useAtom(mapInfoAtom)
  const { data: academyList } = useQuery({
    queryKey: ['academyList', mapInfo.latitude, mapInfo.longitude],
    queryFn: () =>
      getAcademyList({
        latitude: mapInfo.latitude,
        longitude: mapInfo.longitude
      }),
    enabled: !queryString
  })
  const { data: academyFilterList } = useQuery({
    queryKey: ['academyFilterList', queryString],
    queryFn: () => getAcademyFilter({ queryString: queryString }),
    enabled: queryString.length > 0
  })

  const setLocation = ({ latitude, longitude }: SetLocationProps) => {
    setMapInfo((prev) => ({
      ...prev,
      latitude,
      longitude
    }))
  }

  return (
    <div className={'relative bg-white-100 w-full h-full overflow-hidden'}>
      <SettingPage isOpen={toggleOpen} />
      <Spacing size={80} />
      <MapSearchBar />
      <NaverMap
        latitude={mapInfo.latitude}
        longitude={mapInfo.longitude}
        academyList={
          academyList?.academiesByLocationResponse ||
          academyFilterList?.academyFilterResponses ||
          []
        }
        setLocation={setLocation}
        //현재 상태관리가 엉망으로되있어서 나중에 제외해야할 코드입니다.
      />
    </div>
  )
}
export default MapPage
