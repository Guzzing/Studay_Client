import type { SelectProps } from './SelectType'
import { forwardRef } from 'react'
import Icon from '../../icon/Icon'

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      selectType = 'Single',
      fullWidth = true,
      name,
      value = [],
      width,
      height,
      errorMessage,
      onChange,
      ...props
    }: SelectProps,
    ref
  ) => {
    return selectType === 'Single' ? (
      <>
        <select
          ref={ref}
          name={name}
          id={''}
          className={`${
            fullWidth ? 'w-[324px] h-[52px]' : `w-[${width}px] h-[${height}px]`
          } font-nsk body-18 px-[20px] border border-blue-500 rounded-[10px] outline-none bg-white-200
      text-gray-600
      `}
          onChange={onChange}
          {...props}
        >
          {value.map((optionValue) => (
            <option value={optionValue}>{optionValue}</option>
          ))}
        </select>
        <div
          className={
            'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'
          }
        >
          <Icon icon={'ArrowDown'} />
        </div>
        <p className={'px-[10px] text-red-600'}>{errorMessage}</p>
      </>
    ) : (
      <>
        <div
          className={`px-[23px] ${
            fullWidth ? 'w-[350px] h-[44px]' : `w-[${width}px] h-[${height}px]`
          } flex justify-between items-center border border-blue-500 rounded-[10px] font-nsk
        bg-white-200
        `}
        >
          <p className={'body-18 text-black-900'}>{'반복'}</p>
          <select
            ref={ref}
            name={name}
            id={''}
            className={
              'bg-white-200 body-14 text-gray-600 outline-none cursor-pointer relative'
            }
            onChange={onChange}
            {...props}
          >
            {value.map((optionValue) => (
              <option value={optionValue}>{optionValue}</option>
            ))}
          </select>
        </div>
        <p className={'px-[10px] text-red-600'}>{errorMessage}</p>
      </>
    )
  }
)

export default Select
