import { useCallback, useEffect, useState } from 'react'
import Icon, { IconType } from '@/components/common/icon/Icon.tsx'
import {
  NavigationBarProps,
  NavigationStateType
} from '@/components/common/navigationbar/NavigationBarType.ts'
import {
  DefaultIconFill,
  DefaultText,
  initNavigationList,
  SelectIconFill,
  SelectText
} from '@/components/common/navigationbar/constants.ts'

const NavigationBar = ({ selectIcon }: NavigationBarProps) => {
  const [navigationState, setNavigationState] = useState<NavigationStateType[]>(
    initNavigationList.map((item) => ({
      ...item,
      select: item.icon === selectIcon
    }))
  )

  useEffect(() => {
    setNavigationState((prevState) =>
      prevState.map((item) => ({
        ...item,
        select: item.icon === selectIcon
      }))
    )
  }, [selectIcon])

  const handleIconClick = useCallback(
    (selectedIcon: IconType) => {
      const updatedNavigationState = navigationState.map((item) => {
        // 현재 클릭된 아이콘만 select 값을 true로 설정하고, 나머지는 false로 설정
        if (item.icon === selectedIcon) {
          return { ...item, select: true }
        }
        return { ...item, select: false }
      })

      setNavigationState(updatedNavigationState)
    },
    [navigationState]
  )

  return (
    <div
      className={`flex flex-row w-[390px] h-[81px] bg-white-0 border border-solid border-gray-100`}
    >
      {navigationState &&
        navigationState.map((list, index) => (
          <div
            key={index}
            className={
              'flex flex-col w-full justify-center items-center cursor-pointer'
            }
            data-id={list['icon']}
            onClick={(e) =>
              handleIconClick(e.currentTarget.dataset.id as IconType)
            }
          >
            <Icon
              icon={list['icon']}
              classStyle={`${
                list['select'] ? SelectIconFill : DefaultIconFill
              }`}
            ></Icon>
            <span className={`${list['select'] ? SelectText : DefaultText}`}>
              {list['text']}
            </span>
          </div>
        ))}
    </div>
  )
}

export default NavigationBar
