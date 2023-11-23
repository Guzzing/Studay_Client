import { forwardRef } from 'react'
import cn from '@/libs/utils/cn'

type CustomTimePickerProps = {
  onClick?: () => void
  disabled?: boolean
  value: string
}

const CustomTimePicker = forwardRef<HTMLButtonElement, CustomTimePickerProps>(
  ({ onClick, value, disabled }, ref) => {
    return (
      <label className={'w-[66px]'}>
        {disabled ? (
          <button
            onClick={onClick}
            ref={ref}
            className={cn(
              'rounded-[10px] w-fit h-[28px] px-[5px] bg-gray-500',
              'example-custom-input'
            )}>
            <div
              className={
                'caption-13 text-white-0 flex justify-center items-baseline text-center'
              }>
              {'선택 불가'}
            </div>
          </button>
        ) : (
          <button
            onClick={onClick}
            ref={ref}
            className={cn(
              'rounded-[10px] w-fit h-[28px] px-[5px] bg-blue-500',
              'example-custom-input'
            )}>
            <div
              className={
                'caption-13 text-white-0 flex justify-center items-baseline text-center'
              }>
              {value}
            </div>
          </button>
        )}
      </label>
    )
  }
)

export default CustomTimePicker
