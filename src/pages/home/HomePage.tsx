import Icon from '@/components/common/icon/Icon'
import InformationBox from '@/components/common/informationBox/InformationBox'
import Spacing from '@/components/common/spacing/Spacing'
const HomePage = () => {
  return (
    <div className={'bg-white-100 w-full h-full'}>
      <Spacing size={100} />
      <div className={'flex flex-col items-center gap-[20px]'}>
        <InformationBox
          mainTitle={'김잼민'}
          subTitle={'중학교 3학년'}
          description={'잼민이는 지금 수학학원에 있어요!'}
        />
        <InformationBox
          mainTitle={'빵빵이'}
          subTitle={'중학교 3학년'}
          description={'빵빵이는 지금 영어학원에 있어요!'}
        />
      </div>
      <div className={'absolute right-[10px] bottom-[90px] cursor-pointer'}>
        <Icon icon={'Add'} classStyle={'h-[60px] w-[60px]'} />
      </div>
    </div>
  )
}

export default HomePage
