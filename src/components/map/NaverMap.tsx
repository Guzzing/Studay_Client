import { useCallback, useEffect, useRef } from 'react'
import { SetLocationProps } from '../../types/mapPage.ts'
import Icon from '@/components/common/icon/Icon.tsx'
import throttle from '@/libs/utils/throttle.ts'

/**
 * NAVER_CLIENT_KEY : Naver 에서 발급한 클라이언트 아이디
 *    <script type="text/javascript" src=></script>
 * **/
interface NaverMapProps {
  latitude: number
  longitude: number
  academyList: Academy[]
  selectAcademy: (academy: Academy) => void
  setLocation: ({ latitude, longitude }: SetLocationProps) => void
}

const NaverMap = ({
  latitude,
  longitude,
  academyList,
  selectAcademy,
  setLocation
}: NaverMapProps) => {
  const mapRef = useRef<naver.maps.Map | null>(null)
  const naverMarker = useCallback((value: string) => {
    return `
            <div class='flex flex-col'>
              <div class='flex flex-row justify-center items-center h-[45px] rounded-full bg-blue-700'>
                <div class='flex flex-col justify-center items-center h-[30px] w-[30px] rounded-full bg-white-0 ml-[5px]'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.398 17.804C13.881 17.0348 19 14.0163 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 14.0163 10.119 17.0348 11.602 17.804C11.8548 17.9351 12.1452 17.9351 12.398 17.804ZM12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" fill="#57A4FF"/>
                    <path d="M18.0622 16.5C18.6766 16.9561 19 17.4734 19 18C19 18.5266 18.6766 19.0439 18.0622 19.5C17.4478 19.9561 16.5641 20.3348 15.5 20.5981C14.4359 20.8614 13.2288 21 12 21C10.7712 21 9.56414 20.8614 8.5 20.5981C7.43587 20.3348 6.5522 19.9561 5.93782 19.5C5.32344 19.0439 5 18.5266 5 18C5 17.4734 5.32344 16.9561 5.93782 16.5" stroke="#40628A" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </div>
                <span class='ml-[5px] mr-[8px] font-nsk body-14 text-white-0 whitespace-nowrap'>${value}</span>
              </div>
              <div class='ml-[19px] mt-[-4px]  w-0 h-0 border-l-[5px] border-l-[transparent] border-r-[5px] border-r-[transparent] border-t-[10px] border-t-blue-700'></div>
            </div>
          `
  }, [])

  const currentLocation = useCallback(() => {
    if (!navigator.geolocation || !mapRef.current) {
      return
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      const center = new naver.maps.LatLng(latitude, longitude)
      mapRef.current?.panTo(center, {
        duration: 500,
        easing: 'easeOutCubic'
      })
    })
  }, [])

  useEffect(() => {
    const center: naver.maps.LatLng = new naver.maps.LatLng(latitude, longitude)
    const naverMapOption = {
      center: center,
      zoom: 14,
      disableKineticPan: false,
      tileTransition: false,
      minZoom: 10,
      maxZoom: 21
    }

    if (!mapRef.current) {
      mapRef.current = new naver.maps.Map('map', naverMapOption)
    }

    console.log('한번만 실행되요!')

    if (mapRef.current) {
      academyList.map((data) => {
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(data.latitute, data.longitute),
          map: mapRef.current as naver.maps.Map,
          icon: {
            content: naverMarker(data.academyName)
          }
        })

        naver.maps.Event.addListener(marker, 'click', () => selectAcademy(data))
      })

      naver.maps.Event.addListener(
        mapRef.current,
        'dragend',
        throttle(() => {
          const location = mapRef.current?.getCenter()
          setLocation({
            latitude: location?.y as number,
            longitude: location?.x as number
          })
        }, 100)
      )
    }
  }, [academyList])

  return (
    <div className={'flex h-full w-full '}>
      <div id={'map'} className={'w-[390px] h-full'} />
      <div
        className={
          'absolute z-10 cursor-pointer bg-white-0 rounded-full bottom-[80px] mb-[28px] ml-[20px]'
        }>
        <Icon icon={'Gps'} onClick={currentLocation} />
      </div>
    </div>
  )
}
export default NaverMap
