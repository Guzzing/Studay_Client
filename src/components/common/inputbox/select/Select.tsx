import type { SelectProps } from './SelectType'
import React, { forwardRef } from 'react'

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      selectType = 'Single',
      fullWidth = true,
      name,
      value = '',
      width,
      height,
      ...props
    }: SelectProps,
    ref
  ) => {
    return selectType === 'Single' ? (
      <select
        ref={ref}
        name={name}
        id={''}
        className={`${
          fullWidth ? 'w-[324px] h-[52px]' : `w-[${width}px] h-[${height}px]`
        } font-nsk body-18 px-[20px] border border-blue-500 rounded-[10px] outline-none bg-white-200
      text-gray-600
      `}
        {...props}
      >
        <option value={value} className={'bg-blue-500'}>
          {'서울시'}
        </option>
      </select>
    ) : (
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
          {...props}
        >
          <option value={'true'}>{'설정'}</option>
          <option value={'false'}>{'미설정'}</option>
        </select>
      </div>
    )
  }
)

export default Select
