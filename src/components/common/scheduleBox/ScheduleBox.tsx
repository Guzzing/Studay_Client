import type { ScheduleBoxProps } from './ScheduleBoxType'
import Icon from '../icon/Icon'
const ScheduleBox = ({
  isRegister = false,
  scheduleType,
  mainTitle,
  subElement,
  rightBottomElement
}: ScheduleBoxProps) => {
  return (
    <div
      className={`${
        scheduleType === 'profile'
          ? 'w-[360px] h-[88px]'
          : scheduleType === 'toggle'
          ? isRegister
            ? 'w-[345px] h-[142px] bg-white-0'
            : 'w-[345px] h-[142px] bg-gray-200'
          : ''
      } border border-black-900 pt-[16px] pb-[6px] px-[24px] rounded-[20px] font-nsk`}
    >
      <div className={'relative w-full h-full flex-col'}>
        <div className={'flex justify-between grow-4'}>
          <div className={'subHead-18-black'}>{mainTitle}</div>
          <div className={'flex cursor-pointer text-black-900 items-center'}>
            <Icon icon={'Edit'} />
            <Icon icon={'Close'} />
          </div>
        </div>
        <div className={'grow-6'}>
          <div
            className={`${
              scheduleType === 'profile' ? 'flex' : 'caption-13-gray'
            } justify-start items-center body-14-black py-[5px]`}
          >
            {subElement}
          </div>
          <div className={'absolute bottom-[3px] right-0 flex justify-end'}>
            {scheduleType === 'profile' ? (
              rightBottomElement
            ) : (
              <div
                className={`relative w-[42px] h-[20px] rounded-full ${
                  isRegister ? 'bg-blue-500' : 'bg-white-200'
                } cursor-pointer`}
              >
                <div
                  className={`absolute ${
                    isRegister
                      ? 'right-0 top-0 w-[20px] h-[20px] rounded-full border border-black-900 bg-white-200'
                      : 'left-0 top-0 w-[20px] h-[20px] rounded-full border border-black-900 bg-white-200'
                  }`}
                ></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScheduleBox
