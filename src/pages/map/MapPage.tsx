import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useAtom } from 'jotai/index'
import { SetLocationProps } from '../../types/mapPage.ts'
import Icon from '@/components/common/icon/Icon.tsx'
import Input from '@/components/common/inputbox/input/Input.tsx'
import Spacing from '@/components/common/spacing/Spacing.tsx'
import NaverMap from '@/components/map/NaverMap.tsx'
import { getAcademys } from '@/libs/api/mapapi/mapApi.ts'
import { mapInfoAtom } from '@/libs/store/mapInfoAtom.ts'

const MapPage = () => {
  const navigate = useNavigate()
  const [mapInfo, setMapInfo] = useAtom(mapInfoAtom)
  const { data: academy } = useQuery({
    queryKey: ['academy', mapInfo.latitude, mapInfo.longitude],
    queryFn: () =>
      getAcademys({
        latitude: mapInfo.latitude,
        longitude: mapInfo.longitude
      })
  })

  const moveFilter = () => {
    navigate('/map/filter')
  }

  const setLocation = ({ latitude, longitude }: SetLocationProps) => {
    setMapInfo((prev) => ({
      ...prev,
      latitude,
      longitude
    }))
  }

  return (
    <div className={'bg-white-100 w-full h-full overflow-hidden'}>
      <Spacing size={80} />
      <div className={'fixed z-10 flex flex-row ml-[10px] mt-[12px]'}>
        <Input
          inputType={'Search'}
          fullWidth={true}
          width={'297'}
          height={'53'}></Input>
        <div
          className={
            'flex flex-col cursor-pointer bg-white-0 rounded-full w-[50px] h-[50px] justify-center items-center ml-[10px]'
          }
          onClick={moveFilter}>
          <Icon icon={'Filter'}></Icon>
          <span className={'font-nsk body-10'}>{'필터'}</span>
        </div>
      </div>
      <NaverMap
        latitude={mapInfo.latitude}
        longitude={mapInfo.longitude}
        academyList={academy?.academyGetResponses || []}
        selectAcademy={() => console.log('')}
        setLocation={setLocation}
      />
    </div>
  )
}
export default MapPage
