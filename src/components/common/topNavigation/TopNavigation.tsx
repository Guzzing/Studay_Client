import Icon, { IconType } from '../icon/Icon'

interface TopNavigationProps {
  title: string
  type: 'left' | 'center'
  //   icon1: 'SideBar' | 'Alarm' | undefined
  //   icon2: 'SideBar' | 'Alarm' | undefined
  //   icon3: 'SideBar' | 'Alarm' | undefined
  icon1: IconType | undefined
  icon2: IconType | undefined
  icon3: IconType | undefined
}
const TopNavigation = ({
  title,
  type,
  icon1,
  icon2,
  icon3
}: TopNavigationProps) => {
  return (
    <div
      className={`fixed flex flex-row items-center font-semibold left-[50%] z-10 top-0 translate-x-[-50%] w-full h-[60px] bg-white-0 text-black-800 px-[22px] border-b-[1px] border-gray-5`}>
      <Icon icon={'BackPush'} classStyle={'cursor-pointer ml-3'} />
      {type === 'left' ? (
        <>
          <div className={'ml-7'}>{title}</div>
          <div
            className={`flex flex-row justify-center items-center absolute right-8 float-right`}>
            <Icon icon={icon1} classStyle={'cursor-pointer mr-2'} />
            <Icon icon={icon2} classStyle={'cursor-pointer mr-2'} />
            <Icon icon={icon3} classStyle={'cursor-pointer'} />
          </div>
        </>
      ) : (
        <div className={`absolute left-1/2 transform -translate-x-1/2`}>
          {title}
        </div>
      )}
      {/* <div className={`flex flex-row`}>{title}</div> */}
    </div>
  )
}

export default TopNavigation
