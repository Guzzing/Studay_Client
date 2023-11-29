import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai/index'
import Icon from '@/components/common/icon/Icon.tsx'
import {
  DefaultMapOption,
  initSelectAcademy,
  Marker
} from '@/components/map/constants.ts'
import { Academy } from '@/libs/api/mapapi/mapApiType.ts'
import {
  mapInfoAtom,
  selectAcademyAtom,
  selectSearchAcademyAtom
} from '@/libs/store/mapInfoAtom.ts'
import throttle from '@/libs/utils/throttle.ts'

/**
 * NAVER_CLIENT_KEY : Naver 에서 발급한 클라이언트 아이디
 *    <script type="text/javascript" src=></script>
 * **/
interface NaverMapProps {
  academyList: Academy[]
}

const NaverMap = ({ academyList }: NaverMapProps) => {
  const mapRef = useRef<naver.maps.Map | null>(null)
  const markerRef = useRef<naver.maps.Marker[]>([])
  const [mapInfo, setMapInfo] = useAtom(mapInfoAtom)
  const [selectAcademy, setSelectAcademy] = useAtom(selectAcademyAtom)
  const [selectValue, _] = useAtom(selectSearchAcademyAtom)
  const [isNewLocation, setIsNewLocation] = useState(false)
  const navigate = useNavigate()

  const currentLocation = useCallback(() => {
    if (!navigator.geolocation || !mapRef.current) {
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        const center = new naver.maps.LatLng(latitude, longitude)
        mapRef.current?.panTo(center, {
          duration: 500,
          easing: 'easeOutCubic'
        })
      },
      () => navigate('/'),
      {
        enableHighAccuracy: false,
        timeout: 1000
      }
    )
  }, [])

  const updateLocation = useCallback(() => {
    const location = mapRef.current?.getCenter()
    createMap({
      latitude: location?.y as number,
      longitude: location?.x as number
    })

    setMapInfo((prev) => ({
      ...prev,
      latitude: location?.y as number,
      longitude: location?.x as number
    }))

    setIsNewLocation(false)
  }, [])

  const createMap = ({
    latitude,
    longitude
  }: {
    latitude: number
    longitude: number
  }) => {
    const center: naver.maps.LatLng = new naver.maps.LatLng(latitude, longitude)
    const naverMapOption = {
      center: center,
      ...DefaultMapOption
    }

    mapRef.current = new naver.maps.Map('map', naverMapOption)

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
  }

  useEffect(() => {
    if (mapRef.current) {
      academyList.map((data) => {
        const isSelected = data.academyId === selectAcademy.academy.academyId
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(data.latitude, data.longitude),
          map: mapRef.current as naver.maps.Map,
          icon: {
            content: Marker({ value: data.academyName, select: isSelected })
          }
        })
        markerRef.current.push(marker)
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
    const { latitude, longitude } = mapInfo
    createMap({ latitude: latitude, longitude: longitude })
    if (selectValue.academyId > -1) {
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(
          selectValue.latitude,
          selectValue.longitude
        ),
        map: mapRef.current as naver.maps.Map,
        icon: {
          content: Marker({ value: selectValue.academyName, select: true })
        }
      })
      markerRef.current = [marker]
      naver.maps.Event.addListener(marker, 'click', () => {
        setSelectAcademy(() => ({
          isBottomSheet: true,
          academy: {
            academyId: selectValue.academyId,
            academyName: selectValue.academyName,
            address: selectValue.address,
            contact: '',
            areaOfExpertise: '',
            latitude: selectValue.latitude,
            longitude: selectValue.longitude
          }
        }))
      })

      setSelectAcademy(() => ({
        isBottomSheet: true,
        academy: {
          academyId: selectValue.academyId,
          academyName: selectValue.academyName,
          address: selectValue.address,
          contact: '',
          areaOfExpertise: '',
          latitude: selectValue.latitude,
          longitude: selectValue.longitude
        }
      }))
    }
  }, [mapInfo])

  useEffect(() => {
    if (selectValue.academyId > -1) {
      setMapInfo((prev) => ({
        ...prev,
        longitude: selectValue.longitude,
        latitude: selectValue.latitude
      }))
    }
  }, [selectValue])

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
    </div>
  )
}
export default NaverMap
