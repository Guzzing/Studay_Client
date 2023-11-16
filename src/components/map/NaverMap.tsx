import { useCallback, useEffect, useRef, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useAtom } from 'jotai/index'
import { SetLocationProps } from '../../types/mapPage.ts'
import BottomSheet from '@/components/common/bottomsheet/BottomSheet.tsx'
import Icon from '@/components/common/icon/Icon.tsx'
import {
  DefaultMapOption,
  initSelectAcademy,
  Marker
} from '@/components/map/constants.ts'
import { getAcademyDetail } from '@/libs/api/mapapi/mapApi.ts'
import { Academy } from '@/libs/api/mapapi/mapApiType.ts'
import { selectAcademyAtom } from '@/libs/store/mapInfoAtom.ts'
import throttle from '@/libs/utils/throttle.ts'

/**
 * NAVER_CLIENT_KEY : Naver 에서 발급한 클라이언트 아이디
 *    <script type="text/javascript" src=></script>
 * **/
interface NaverMapProps {
  latitude: number
  longitude: number
  academyList: Academy[]
  setLocation: ({ latitude, longitude }: SetLocationProps) => void
}

const NaverMap = ({
  latitude,
  longitude,
  academyList,
  setLocation
}: NaverMapProps) => {
  const mapRef = useRef<naver.maps.Map | null>(null)
  const [selectAcademy, setSelectAcademy] = useAtom(selectAcademyAtom)
  const [isNewLocation, setIsNewLocation] = useState(false)

  const { data: detailAcademy } = useQuery({
    queryKey: ['academy', selectAcademy],
    queryFn: () =>
      getAcademyDetail({ academyId: selectAcademy.academy.academyId }),
    enabled: selectAcademy.academy.academyId > -1
  })

  const currentLocation = useCallback(() => {
    if (!navigator.geolocation || !mapRef.current) {
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        const center = new naver.maps.LatLng(latitude, longitude)
        console.log(center)
        mapRef.current?.panTo(center, {
          duration: 500,
          easing: 'easeOutCubic'
        })
      },
      () => console.log('test'),
      {
        enableHighAccuracy: false,
        timeout: 1000
      }
    )
  }, [])

  const updateLocation = useCallback(() => {
    const location = mapRef.current?.getCenter()
    setLocation({
      latitude: location?.y as number,
      longitude: location?.x as number
    })
    setIsNewLocation(false)
  }, [])

  useEffect(() => {
    if (mapRef.current) {
      academyList.map((data) => {
        // console.log(Marker({ value: data.academyName, select: false }))
        const isSelected = data.academyId === selectAcademy.academy.academyId
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(data.latitude, data.longitude),
          map: mapRef.current as naver.maps.Map,
          icon: {
            content: Marker({ value: data.academyName, select: isSelected })
          }
        })

        naver.maps.Event.addListener(marker, 'click', () => {
          setSelectAcademy((prev) => ({
            isBottomSheet: !isSelected,
            academy:
              prev.academy.academyId === data.academyId
                ? initSelectAcademy.academy
                : data
          }))
        })
      })
    }
  }, [academyList, selectAcademy])

  useEffect(() => {
    const center: naver.maps.LatLng = new naver.maps.LatLng(latitude, longitude)
    const naverMapOption = {
      center: center,
      ...DefaultMapOption
    }

    if (!mapRef.current) {
      mapRef.current = new naver.maps.Map('map', naverMapOption)
    }

    naver.maps.Event.addListener(mapRef.current, 'click', () =>
      setSelectAcademy({
        isBottomSheet: false,
        academy: initSelectAcademy.academy
      })
    )

    naver.maps.Event.addListener(
      mapRef.current,
      'dragend',
      throttle(() => {
        setIsNewLocation(true)
      }, 100)
    )
  }, [])

  return (
    <div className={'flex h-full w-full '}>
      <div id={'map'} className={'w-[390px] h-full'} />
      <div
        className={
          'absolute z-10 cursor-pointer bg-white-0 rounded-full bottom-[80px] mb-[28px] ml-[20px]'
        }>
        <Icon icon={'Gps'} onClick={currentLocation} />
      </div>
      {isNewLocation && (
        <button
          className={
            'absolute bottom-[100px] left-1/3 z-10 cursor-pointer w-[160px] h-[45px] bg-blue-500 rounded-3xl text-center'
          }
          onClick={updateLocation}>
          <span className={'font-nsk body-15 text-white-0'}>
            {'현재 지도에서 검색'}
          </span>
        </button>
      )}
      {selectAcademy.isBottomSheet && detailAcademy && (
        <BottomSheet
          title={selectAcademy.academy.academyName}
          address={selectAcademy.academy.address}
          number={selectAcademy.academy.contact}
          detailInfo={detailAcademy}
        />
      )}
    </div>
  )
}
export default NaverMap
