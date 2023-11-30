import { useEffect } from 'react'
import { cva } from 'class-variance-authority'
import { useAtom } from 'jotai'
import cn from '../../../libs/utils/cn'
import { schedulesAtom } from '@/libs/store/academyInfo'
export const SelectWeekVariant = cva(
  `flex justify-center items-center w-[39px] h-[39px]`,
  {
    variants: {
      variant: {
        default:
          'bg-white-100 rounded-full body-16 text-black-900 border border-blue-500',
        selected: 'bg-blue-500 rounded-full body-16 text-white-100',
        fixed: 'cursor-default bg-gray-400 rounded-full body-16 text-white-100'
      },
      defaultVariants: {
        variant: 'default'
      }
    }
  }
)

/**
 * @param selectedDate selectedDate값을 가지고 있는 state
 * @param setSelectedDate selectedDate 값을 변경할 수 있는 setState 함수
 * @param fixedDate 고정된 주 선택 (이미 선택하여 수정하지 않아도 되는 것 / 다수 선택에 사용)
 */

interface SelectWeekProperties {
  fixedDate?: number[]
}

const SelectWeek = ({ fixedDate }: SelectWeekProperties) => {
  const [scheduleInfo, setScheduleInfo] = useAtom(schedulesAtom)
  const week = ['일', '월', '화', '수', '목', '금', '토']
  useEffect(() => {
    console.log(scheduleInfo)
  }, [scheduleInfo])
  return (
    <div className={'flex flex-row gap-2.5 w-full justify-center items-center'}>
      {week.map((day, index) => (
        <button
          key={index}
          className={cn(
            SelectWeekVariant({
              variant: fixedDate?.includes(index)
                ? 'fixed'
                : scheduleInfo.weekArray.includes(index)
                ? 'selected'
                : 'default'
            })
          )}
          onClick={() => {
            if (fixedDate?.includes(index)) return
            if (scheduleInfo.weekArray.includes(index)) {
              const filteredDate = scheduleInfo.weekArray.filter(
                (data) => data !== index
              )
              setScheduleInfo({ ...scheduleInfo, weekArray: [...filteredDate] })
            } else {
              setScheduleInfo({
                ...scheduleInfo,
                weekArray: [...scheduleInfo.weekArray, index]
              })
            }
          }}>
          {day}
        </button>
      ))}
    </div>
  )
}

export default SelectWeek
