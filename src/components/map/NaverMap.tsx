import { useCallback, useEffect, useRef, useState } from 'react'
import { useAtom } from 'jotai/index'
import { Spinner } from '@/assets/icon'
import Icon from '@/components/common/icon/Icon.tsx'
import { Marker } from '@/components/map/constants.ts'
import { DefaultMapOption } from '@/components/map/constants.ts'
import { Academy } from '@/libs/api/mapapi/mapApiType.ts'
import { InitSelectAcademy, mapInfoAtom } from '@/libs/store/mapInfoAtom.ts'
import throttle from '@/libs/utils/throttle.ts'

const NaverMap = ({ academyList }: { academyList: Academy[] }) => {
  const mapRef = useRef<naver.maps.Map | null>(null)
  const markerRef = useRef<naver.maps.Marker[]>([])
  const [mapInfo, setMapInfo] = useAtom(mapInfoAtom)
  const [selectAcademy, setSelectAcademy] = useAtom(InitSelectAcademy)
  const [isNewLocation, setNewLoacation] = useState(false)
  const [isLoading, setLoading] = useState(false)

  /**
   * 처음 페이지가 랜더링 되었을때 맵을 그린다.
   * **/
  useEffect(() => {
    const { latitude, longitude } = mapInfo
    const center: naver.maps.LatLng = new naver.maps.LatLng(latitude, longitude)
    const naverMapOption = {
      center: center,
      ...DefaultMapOption
    }
    mapRef.current = new naver.maps.Map('map', naverMapOption)
    naver.maps.Event.addListener(
      mapRef.current,
      'dragend',
      throttle(() => {
        setNewLoacation(true)
      }, 100)
    )
  }, [mapInfo])

  /**
   * 기본 마커를 생성하는 함수
   * */
  const createMarker = useCallback((academy: Academy) => {
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
  }, [])

  /**
   * 마커를 모두 삭제하는 함수
   * */
  const deleteMarker = useCallback(() => {
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
      {isNewLocation && !selectAcademy && (
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
