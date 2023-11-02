import { useEffect } from 'react'

/**
 * NAVER_CLIENT_KEY : Naver 에서 발급한 클라이언트 아이디
 *    <script type="text/javascript" src=></script>
 * **/
const NaverMap = () => {
  const center: naver.maps.LatLng = new naver.maps.LatLng(
    37.359_570_4,
    127.105_399
  )

  useEffect(() => {
    new naver.maps.Map('map', {
      center: center,
      zoom: 16
    })
  }, [])

  return (
    <div className={'h-full w-full'}>
      <div id={'map'} className={'w-[390px] h-full'} />
    </div>
  )
}
export default NaverMap
