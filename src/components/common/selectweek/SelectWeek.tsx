/* eslint-disable prettier/prettier */
import { cva } from 'class-variance-authority'
import cn from '../../../libs/utils/cn'

export const SelectWeekVariant = cva(
  `flex justify-center items-center w-[39px] h-[39px]`,
  {
    variants: {
      variant: {
        default:
          'bg-white-100 rounded-full body-16 text-black-900 border-blue-500',
        selected: 'bg-blue-500 rounded-full body-16 text-white-100',
        fixed: 'disabled: bg-gray-400 rounded-full body-16 text-white-100'
      },
      defaultVariants: {
        variant: 'default'
      }
    }
  }
)

interface SelectWeekProperties {
  fixedDate?: number
  selectedDate: number[]
  setSelectedDate: React.Dispatch<React.SetStateAction<number[]>>
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
                fixedDate === index
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
