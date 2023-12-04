import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useAtom } from 'jotai/index'
import Icon from '@/components/common/icon/Icon.tsx'
import Spacing from '@/components/common/spacing/Spacing.tsx'
import MapBottomSheet from '@/components/map/MapBottomSheet.tsx'
import MapSearchBar from '@/components/map/MapSearchBar.tsx'
import NaverMap from '@/components/map/NaverMap.tsx'
import { getAcademyFilter } from '@/libs/api/filter/filterApi.ts'
import { getAcademyList } from '@/libs/api/mapapi/mapApi.ts'
import { Academy } from '@/libs/api/mapapi/mapApiType.ts'
import { InitSelectAcademy, mapInfoAtom } from '@/libs/store/mapInfoAtom.ts'

const MapPage = () => {
  const location = useLocation()
  const [mapInfo, setMapInfo] = useAtom(mapInfoAtom)
  const [page, setPage] = useState(0)
  const [academyList, setAcademyList] = useState<Academy[]>([])
  const [selectAcademy, setSelectAcademy] = useAtom(InitSelectAcademy)
  const [filterData, setFilterData] = useState<FilterData | null>(null)
  const [isLastPage, setIsLastPage] = useState(false)
  /**
   * 맵 페이지 처음의 academyData api
   * */
  const { data: academyData, isLoading } = useQuery({
    queryKey: ['academyData', mapInfo.latitude, mapInfo.longitude, page],
    queryFn: () =>
      getAcademyList({
        latitude: mapInfo.latitude,
        longitude: mapInfo.longitude,
        pageNumber: page
      }),
    enabled: mapInfo.latitude > 0 && mapInfo.longitude > 0 && !location.search
  })

  /**
   * 필터를 설정했을때 호출할 API
   * */
  const { data: academyFilterData } = useQuery({
    queryKey: ['academyFilterData', filterData, page],
    queryFn: () =>
      getAcademyFilter({
        latitude: filterData?.latitude as number,
        longitude: filterData?.longitude as number,
        categories: filterData?.categories as string,
        pageNumber: page,
        desiredMinAmount: filterData?.minMoney as number,
        desiredMaxAmount: filterData?.maxMoney as number
      }),
    enabled: !!location.search && !!filterData
  })

  /**
   * 필터를 설정했을때 URLSearchParams을 통해 FilterData의 상태를 변경한다.
   * */
  useEffect(() => {
    if (location.search) {
      const searchParams = new URLSearchParams(location.search)
      const categories = searchParams.get('categories') as string
      const minMoney = searchParams.get('desiredMinAmount') as string
      const maxMoney = searchParams.get('desiredMaxAmount') as string

      setFilterData({
        latitude: mapInfo.latitude,
        longitude: mapInfo.longitude,
        categories: categories,
        maxMoney: Number.parseInt(maxMoney),
        minMoney: Number.parseInt(minMoney)
      })
    }
  }, [location.search])

  useEffect(() => {
    if (academyFilterData) {
      const { AcademiesFilterWithScrollResponses, hasNext } = academyFilterData
      setIsLastPage(hasNext)
      if (page === 0) {
        setAcademyList(AcademiesFilterWithScrollResponses)
      } else {
        setAcademyList((prev) => [
          ...prev,
          ...AcademiesFilterWithScrollResponses
        ])
      }
    }
  }, [academyFilterData])

  useEffect(() => {
    console.log('call~~')
    if (academyData) {
      setMapInfo((prev) => ({
        ...prev,
        selectProvince: academyData.sido,
        selectCity: academyData.sigungu,
        selectTown: academyData.upmyeondong
      }))
      const { academiesByLocationResponse, hasNext } = academyData
      setIsLastPage(hasNext)
      if (page === 0) {
        setAcademyList(academiesByLocationResponse)
      } else {
        setAcademyList((prev) => [...prev, ...academiesByLocationResponse])
      }
    }
  }, [academyData, location.search])

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
        isLast={isLastPage}
        isLoading={isLoading}
      />
    </div>
  )
}

export default MapPage
