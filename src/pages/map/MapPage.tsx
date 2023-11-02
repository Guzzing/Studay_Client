import Icon from '@/components/common/icon/Icon.tsx'
import Input from '@/components/common/inputbox/input/Input.tsx'
import Spacing from '@/components/common/spacing/Spacing.tsx'
import NaverMap from '@/components/map/NaverMap.tsx'

const MapPage = () => {
  return (
    <div className={'bg-white-100 w-full h-full'}>
      <Spacing size={80} />
      <div className={'fixed z-10 flex flex-row ml-[10px] mt-[12px]'}>
        <Input inputType={'Search'} fullWidth={false}></Input>
        <div
          className={
            'flex cursor-pointer bg-white-0 rounded-full w-[40px] h-[40px] justify-center items-center ml-[8px]'
          }
        >
          <Icon icon={'Filter'}></Icon>
        </div>
      </div>
      <NaverMap></NaverMap>
    </div>
  )
}
export default MapPage
