import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAcademys } from '../../api/mapapi/mapApi.ts'
import { defaultLocation } from '../../constants/mapPage.ts'
import { MapLocation } from '../../types/mapPage.ts'
import BottomSheet from '@/components/common/bottomsheet/BottomSheet.tsx'
import Icon from '@/components/common/icon/Icon.tsx'
import Input from '@/components/common/inputbox/input/Input.tsx'
import Spacing from '@/components/common/spacing/Spacing.tsx'
import NaverMap from '@/components/map/NaverMap.tsx'

const MapPage = () => {
  const TMPLAT = 37.444_916_8
  const TMPLNG = 127.138_868
  const navigate = useNavigate()
  const [mapLocation, setMapLocation] = useState(defaultLocation)
  const [academyList, setAcademyList] = useState<Academy[]>([
    {
      academyId: 0,
      academyName: '',
      address: '',
      contact: '',
      areaOfExpertise: '',
      latitute: 0,
      longitute: 0
    }
  ])

  useEffect(() => {
    const locationString = window.localStorage.getItem('location')
    if (locationString) {
      setMapLocation(JSON.parse(locationString) as MapLocation)
    }
    const feachData = async () => {
      const data = await getAcademys({
        // latitute: mapLocation.latitude,
        // longitute: mapLocation.longitude
        latitute: TMPLAT,
        longitute: TMPLNG
      })
      setAcademyList(data.academyGetResponses)
    }
    feachData()
  }, [])

  const moveFilter = () => {
    navigate('/map/filter')
  }

  return (
    <div className={'bg-white-100 w-full h-full overflow-hidden'}>
      <Spacing size={80} />
      <div className={'fixed z-10 flex flex-row ml-[10px] mt-[12px]'}>
        <Input
          inputType={'Search'}
          fullWidth={true}
          width={'297'}
          height={'53'}
        ></Input>
        <div
          className={
            'flex flex-col cursor-pointer bg-white-0 rounded-full w-[50px] h-[50px] justify-center items-center ml-[10px]'
          }
          onClick={moveFilter}
        >
          <Icon icon={'Filter'}></Icon>
          <span className={'font-nsk body-10'}>{'필터'}</span>
        </div>
      </div>
      <div
        className={
          'absolute z-10 cursor-pointer bg-white-0 rounded-full bottom-[80px] mb-[28px] ml-[20px]'
        }
      >
        <Icon icon={'Gps'} />
      </div>
      <NaverMap
        latitude={TMPLAT}
        longitude={TMPLNG}
        academyList={academyList}
      ></NaverMap>
      <div className={'hidden'}>
        <BottomSheet title={'test'}></BottomSheet>
      </div>
    </div>
  )
}
export default MapPage
