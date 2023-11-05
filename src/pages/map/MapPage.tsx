import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getBeopjungdong } from '../../api/mapapi/mapApi.ts'
import Icon from '@/components/common/icon/Icon.tsx'
import Input from '@/components/common/inputbox/input/Input.tsx'
import Spacing from '@/components/common/spacing/Spacing.tsx'
import NaverMap from '@/components/map/NaverMap.tsx'

const MapPage = () => {
  const navigate = useNavigate()

  const apiTest = async () => {
    return getBeopjungdong()
  }

  useEffect(() => {
    console.log(apiTest())
  })

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
      <NaverMap></NaverMap>
    </div>
  )
}
export default MapPage
