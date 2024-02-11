import { useCallback, useEffect, useRef, useState } from 'react'
import { useAtom } from 'jotai/index'
import { Spinner } from '@/assets/icon'
import Icon from '@/components/common/icon/Icon.tsx'
import { Marker } from '@/components/map/constants.ts'
import { DefaultMapOption } from '@/components/map/constants.ts'
import { Academy } from '@/libs/api/mapapi/mapApiType.ts'
import { InitSelectAcademy, mapInfoAtom } from '@/libs/store/mapInfoAtom.ts'

const NaverMap = ({ academyList }: { academyList: Academy[] }) => {
  const mapRef = useRef<naver.maps.Map | null>(null)
  const markerRef = useRef<naver.maps.Marker[]>([])
  const [mapInfo, setMapInfo] = useAtom(mapInfoAtom)
  const [selectAcademy, setSelectAcademy] = useAtom(InitSelectAcademy)
  const [isNewLocation, setNewLoacation] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [isZoomLevelPermission, setZoomLevelPermission] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(15)
  const [mapCenter, setMapCenter] = useState({
    latitude: mapInfo.latitude,
    longitude: mapInfo.longitude
  })
  const [mapBounds, setMapBounds] = useState({
    maxLatitude: 0,
    minLongitude: 0
  })

  /**
   * 지도 객체가 렌더링 될 때마다 실행된다.
   * **/
  useEffect(() => {
    const map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(mapCenter.latitude, mapCenter.longitude),
      ...DefaultMapOption
    })
    mapRef.current = map

    const zoomListener = naver.maps.Event.addListener(
      map,
      'zoom_changed',
      () => {
        const zoom = map.getZoom()
        setZoomLevel(zoom)
      }
    )

    const dragEndListener = naver.maps.Event.addListener(map, 'dragend', () => {
      const center: naver.maps.LatLng = map.getCenter() as naver.maps.LatLng
      // `lat()`와 `lng()` 메소드를 사용하여 위도와 경도 값을 가져옵니다.
      const latitude = center.lat()
      const longitude = center.lng()
      // 위도와 경도 값을 상태로 설정합니다.
      setMapCenter({ latitude, longitude })
      setNewLoacation(true) // 위치 변경이 있음을 표시
      setMapBounds({
        // 지도의 경계를 설정
        maxLatitude: latitude + 0.01,
        minLongitude: longitude - 0.01
      })
    })

    console.log('현재지도 bbox :', mapBounds)
    return () => {
      naver.maps.Event.removeListener(zoomListener)
      naver.maps.Event.removeListener(dragEndListener)
    }
  }, [mapInfo])

  /**
   * 줌레벨이 변경될 때마다 줌레벨이 15 이상일 경우 setZoomLevelPermission을 true로 설정
   * **/
  useEffect(() => {
    if (zoomLevel < 16) {
      setZoomLevelPermission(false)
    } else {
      setZoomLevelPermission(true)
    }
  }, [zoomLevel])

  /**
   * 기본 마커를 생성하는 함수
   * */
  const createMarker = useCallback(
    (academy: Academy) => {
      const { latitude, longitude, academyName } = academy
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(latitude, longitude),
        map: mapRef.current as naver.maps.Map,
        title: academyName
      })
      markerRef.current.push(marker)

      naver.maps.Event.addListener(marker, 'click', () => {
        setSelectAcademy(academy)
      })
    },
    [mapInfo]
  )

  /**
   * 마커를 모두 삭제하는 함수
   * */
  const deleteMarker = useCallback(() => {
    // 수정 2024.02.10 YJ
    if (markerRef.current.length > 0) {
      for (const marker of markerRef.current) {
        marker.setMap(null)
      }
      markerRef.current = []
    }
  }, [])

  /**
   * 원하는 좌표로 이동하는 함수
   * */
  const moveMap = useCallback((latitude: number, longitude: number) => {
    const center = new naver.maps.LatLng(latitude, longitude)
    mapRef.current?.panTo(center, {
      duration: 500,
      easing: 'easeOutCubic'
    })
  }, [])

  const updateLocation = () => {
    setNewLoacation(false)
    const location = mapRef.current?.getCenter()
    setMapInfo((prev) => ({
      ...prev,
      latitude: location?.y as number,
      longitude: location?.x as number
    }))
  }

  /**
   * 현재 위치로 이동 버튼을 눌렀을때
   * React + geolocation에서 자체 버그가 있어 처음 5초 정도는 딜레이가 있어
   * setLoading상태를 통해 스피너를 돌게하였습니다.
   * https://sypear.tistory.com/75
   * **/
  const currentLocation = useCallback(() => {
    setNewLoacation(false)
    setLoading(true)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        setMapInfo((prev) => ({
          ...prev,
          latitude: latitude,
          longitude: longitude
        }))
        setLoading(false)
      },
      () => console.log('call~'),
      {
        enableHighAccuracy: false,
        timeout: 5000
      }
    )
  }, [])

  /**
   * 마커를 선택했을때
   * 기존 마커를 모두 제거하고
   * 선택된 마커만 보여준다.
   * 마커가 선택이 취소 되거나 학원이 추가될때마다
   * 지도에 마커를 그려준다.
   * **/
  useEffect(() => {
    if (selectAcademy) {
      const { latitude, longitude, academyName } = selectAcademy
      deleteMarker()
      moveMap(latitude, longitude)
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(latitude, longitude),
        map: mapRef.current as naver.maps.Map,
        icon: {
          content: Marker({ value: academyName, select: false }),
          size: new naver.maps.Size(38, 58),
          anchor: new naver.maps.Point(19, 58)
        },
        title: academyName
      })

      markerRef.current.push(marker)
    } else {
      deleteMarker()
      moveMap(mapInfo.latitude, mapInfo.longitude)
      academyList.map((academy) => {
        createMarker(academy)
      })
    }
  }, [selectAcademy, academyList])

  return (
    <div className={'flex h-full w-full'}>
      {(isNewLocation && !selectAcademy && !isZoomLevelPermission) || (
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
      {!selectAcademy && (
        <div
          className={
            'absolute z-10 cursor-pointer rounded drop-shadow-lg bg-white-0 top-[150px] left-[80%] mb-[28px] ml-[20px]'
          }>
          {isLoading && (
            <div className={'flex justify-center items-center'}>
              <Spinner className={'animate-spin h-[40px] w-[40px]'} />
            </div>
          )}
          {!isLoading && (
            <Icon icon={'Gps'} onClick={() => currentLocation()} />
          )}
        </div>
      )}

      <div id={'map'} className={'w-[390px] h-full'} />
    </div>
  )
}

export default NaverMap
