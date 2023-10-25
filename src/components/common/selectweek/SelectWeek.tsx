/* eslint-disable prettier/prettier */
import { cva } from 'class-variance-authority'
import cn from '../../../libs/utils/cn'

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
  selectedDate: number[]
  setSelectedDate: React.Dispatch<React.SetStateAction<number[]>>
  fixedDate?: number[]
}

const SelectWeek = ({
  fixedDate,
  setSelectedDate,
  selectedDate
}: SelectWeekProperties) => {
  const week = ['일', '월', '화', '수', '목', '금', '토']
  return (
    <div className={'flex flex-row gap-2.5'}>
      {week.map((day, index) => (
        <button
          key={index}
          className={cn(
            SelectWeekVariant({
              variant:
                fixedDate?.includes(index)
                  ? 'fixed'
                  : selectedDate.includes(index)
                    ? 'selected'
                    : 'default'
            })
          )}
          onClick={() => {
            if (selectedDate.includes(index)) {
              const filteredDate = selectedDate.filter((data) => data !== index)
              setSelectedDate([...filteredDate])
            } else {
              setSelectedDate([...selectedDate, index])
            }
          }}
        >
          {day}
        </button>
      ))}
    </div>
  )
}

export default SelectWeek
