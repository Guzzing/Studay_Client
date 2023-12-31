import type { ScheduleBoxProps } from './ScheduleBoxType'
import Icon from '../icon/Icon'
import Profile from '../profile/Profile'
const ScheduleBox = ({
  isRegister = false,
  scheduleType,
  mainTitle,
  subElement,
  rightBottomElement,
  handleToggle,
  handleEdit,
  handleDelete,
  ...props
}: ScheduleBoxProps) => {
  return (
    <div
      style={{ cursor: 'pointer' }}
      className={` ${
        scheduleType === 'profile'
          ? 'w-[360px] h-[88px]'
          : scheduleType === 'toggle'
          ? isRegister
            ? 'w-[345px] h-[142px] min-h-[142px] bg-white-0'
            : 'w-[345px] h-[142px] min-h-[142px] bg-gray-200'
          : ''
      } shadow-md pt-[22px] pb-[20px] px-[24px] rounded-[20px]`}>
      <div className={'relative w-full h-full flex-col'} {...props}>
        <div className={'flex justify-between grow-4'}>
          {mainTitle.length > 15 ? (
            <div
              className={
                'body-16 text-ellipsis truncate overflow-hidden w-[230px]'
              }>
              {mainTitle}
            </div>
          ) : (
            <div className={'subHead-18'}>{mainTitle}</div>
          )}
          <div className={'flex cursor-pointer text-black-800 items-center'}>
            <div onClick={handleEdit}>
              <Icon icon={'Edit'} />
            </div>
            <div onClick={handleDelete}>
              <Icon icon={'Close'} />
            </div>
          </div>
        </div>
        <div className={'grow-6'}>
          <div
            className={`${
              scheduleType === 'profile' ? 'flex' : 'caption-13-gray'
            } justify-start items-center body-14 py-[10px]`}>
            {subElement}
          </div>
          <div className={'absolute bottom-[3px] left-0 flex justify-end'}>
            {rightBottomElement && rightBottomElement}
          </div>
          <div className={'absolute bottom-[3px] right-0 flex justify-end'}>
            {scheduleType === 'profile' ? (
              <>
                {/* 
                ❗️TODO: 자식의 수 만큼 Profile컴포넌트 반복문 해주시면 됩니당
                */}
                <Profile imageSize={'S'} />
                <Profile imageSize={'S'} />
                <Profile imageSize={'S'} />
              </>
            ) : (
              <div
                className={`relative w-[42px] h-[20px] rounded-full ${
                  isRegister ? 'bg-blue-500' : 'bg-white-200'
                } cursor-pointer `}
                onClick={handleToggle}>
                <div
                  className={`absolute ${
                    isRegister
                      ? 'right-0 top-0 w-[20px] h-[20px] rounded-full border border-black-800 bg-white-200'
                      : 'left-0 top-0 w-[20px] h-[20px] rounded-full border border-black-800 bg-white-200'
                  }`}></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScheduleBox
