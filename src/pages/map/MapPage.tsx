import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useAtom } from 'jotai/index'
import Icon from '@/components/common/icon/Icon.tsx'
import Spacing from '@/components/common/spacing/Spacing.tsx'
import MapBottomSheet from '@/components/map/MapBottomSheet.tsx'
import MapSearchBar from '@/components/map/MapSearchBar.tsx'
import NaverMap from '@/components/map/NaverMap.tsx'
import { getAcademyList } from '@/libs/api/mapapi/mapApi.ts'
import { Academy } from '@/libs/api/mapapi/mapApiType.ts'
import { InitSelectAcademy, mapInfoAtom } from '@/libs/store/mapInfoAtom.ts'

const MapPage = () => {
  const [mapInfo, _] = useAtom(mapInfoAtom)
  const [page, setPage] = useState(0)
  const [academyList, setAcademyList] = useState<Academy[]>([])
  const [selectAcademy, setSelectAcademy] = useAtom(InitSelectAcademy)
  const { data: academyData, isLoading } = useQuery({
    queryKey: ['academyData', mapInfo.latitude, mapInfo.longitude, page],
    queryFn: () =>
      getAcademyList({
        latitude: mapInfo.latitude,
        longitude: mapInfo.longitude,
        pageNumber: page
      }),
    enabled: mapInfo.latitude > 0 && mapInfo.longitude > 0
  })

  useEffect(() => {
    if (academyData) {
      const { academiesByLocationResponse } = academyData
      console.log(academyData)
      if (page === 0) {
        setAcademyList(academiesByLocationResponse)
      } else {
        setAcademyList((prev) => [...prev, ...academiesByLocationResponse])
      }
    }
  }, [academyData])

  // useEffect(() => {
  // setMapInfo({
  //   selectProvince: '서울특별시',
  //   selectCity: '강남구',
  //   selectTown: '대치동',
  //   latitude: 37.493_182,
  //   longitude: 127.056_705
  // })
  // navigator.geolocation.getCurrentPosition(
  //   (position) => {
  //     const { latitude, longitude } = position.coords
  //     setMapInfo((prev) => ({
  //       ...prev,
  //       latitude: latitude,
  //       longitude: longitude
  //     }))
  //     setMapLoding(false)
  //   },
  //   () => {
  //     setMapInfo({
  //       selectProvince: '서울특별시',
  //       selectCity: '강남구',
  //       selectTown: '대치동',
  //       latitude: 37.493_182,
  //       longitude: 127.056_705
  //     })
  //     setMapLoding(false)
  //   },
  //   {
  //     enableHighAccuracy: false,
  //     timeout: 5000
  //   }
  // )
  // }, [])

  return (
    <div className={'bg-white-100 w-full h-full relative overflow-hidden'}>
      <Spacing size={80} />
      {!selectAcademy && <MapSearchBar />}
      {selectAcademy && (
        <div className={'fixed z-10 flex flex-row ml-[10px] mt-[12px]'}>
          <div
            className={
              'flex flex-col cursor-pointer bg-white-0 rounded-full w-[40px] h-[40px] justify-center items-center drop-shadow shadow-black-900'
            }
            onClick={() => setSelectAcademy(null)}>
            <Icon icon={'BackPush'}></Icon>
          </div>
        </div>
      )}
      <NaverMap academyList={academyList} />
      <MapBottomSheet
        setPage={() => setPage(page + 1)}
        academyList={academyList}
        isLast={academyData?.hasNext || false}
        isLoading={isLoading}
      />
    </div>
  )
}

export default MapPage
