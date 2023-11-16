import type { SelectProps } from './SelectType'
import { useState } from 'react'
import Icon from '../../icon/Icon'

const Select = ({
  selectType = 'Single',
  fullWidth = true,
  width,
  height,
  errorMessage,
  options,
  ...props
}: SelectProps) => {
  const [boxSelectedValue, setBoxSelectedValue] = useState(false)
  return selectType === 'Single' ? (
    <div
      className={`relative ${
        fullWidth ? 'w-[324px] h-[52px]' : `w-[${width}px] h-[${height}px]`
      }`}>
      <select
        id={''}
        className={`w-full h-full font-nsk body-18 px-[20px] border border-blue-350 rounded-[10px] outline-none bg-white-200
      text-gray-800 appearance-none cursor-pointer`}
        {...props}>
        {options?.map((option, index) => (
          <option
            value={option}
            key={index}
            selected={index === 0 ? true : false}>
            {option}
          </option>
        ))}
      </select>
      <div
        className={
          'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'
        }>
        <Icon icon={'ArrowDown'} classStyle={'text-gray-500'} />
      </div>
      <p className={'px-[10px] text-red-600'}>{errorMessage}</p>
    </div>
  ) : (
    // selectedType : Box
    <>
      <div
        className={`px-[23px] ${
          fullWidth ? 'w-[350px] h-[44px]' : `w-[${width}px] h-[${height}px]`
        } flex justify-between items-center border border-blue-500 rounded-[10px] font-nsk
        bg-white-200 appearance-none relative
        `}>
        <p className={'body-18 text-black-900'}>{'반복'}</p>
        <select
          id={''}
          className={
            'bg-white-200 body-14 text-gray-600 outline-none cursor-pointer relative appearance-none w-[50px]'
          }
          value={boxSelectedValue ? 'yes' : 'no'}
          onChange={() => {
            setBoxSelectedValue((prev) => !prev)
          }}
          {...props}>
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
        <div
          className={
            'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 right-[10px]'
          }>
          <Icon icon={'ArrowDown'} classStyle={'text-gray-500'} />
        </div>
      </div>
      <p className={'px-[10px] text-red-600'}>{errorMessage}</p>
    </>
  )
}

export default Select
