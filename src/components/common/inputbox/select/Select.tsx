import type { SelectProps } from './SelectType'
import { forwardRef, useState } from 'react'
import Icon from '../../icon/Icon'
const Select = forwardRef<HTMLSelectElement, SelectProps<string>>(
  (
    {
      selecttype = 'Single',
      fullWidth = true,
      width,
      height,
      errorMessage,
      options,
      values,
      placeholder,
      onChange,
      ...props
    }: SelectProps<string>,
    ref
  ) => {
    const [boxSelectedValue, setBoxSelectedValue] = useState<boolean>(false)
    const [, setSelectedOption] = useState<string | boolean>(options?.[0] || '')

    return selecttype === 'Single' ? (
      <div
        className={`relative ${
          fullWidth ? 'w-full h-[52px]' : `w-[${width}px] h-[${height}px]`
        }`}>
        <select
          ref={ref}
          defaultValue={''}
          className={`w-full h-full font-nsk body-18 px-[20px] border border-blue-350 rounded-[10px] outline-none bg-white-200
      text-gray-800 appearance-none cursor-pointer`}
          onChange={(e) => {
            setSelectedOption(e.target.value)
            if (onChange) {
              onChange(e)
            }
          }}
          {...props}>
          {placeholder && (
            <option value={''} key={'default'}>
              {placeholder}
            </option>
          )}
          {options?.map((option, idx) => (
            <option
              value={
                values ? values?.find((_, index) => index === idx) : option
              }
              key={idx}>
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
            ref={ref}
            className={
              'bg-white-200 body-14 text-gray-600 outline-none cursor-pointer relative appearance-none w-[50px]'
            }
            defaultValue={''}
            value={boxSelectedValue ? 'yes' : 'no'}
            onChange={() => {
              setBoxSelectedValue((prev) => !prev)
            }}
            {...props}>
            {placeholder && (
              <option value={''} key={'default'}>
                {placeholder}
              </option>
            )}
            {options &&
              options.map((option, idx) => (
                <option
                  value={
                    values ? values?.find((_, index) => index === idx) : option
                  }>
                  {option}
                </option>
              ))}
          </select>
          <div
            className={
              'pointer-events-none absolute inset-y-0 flex items-center pr-2 right-[10px]'
            }>
            <Icon icon={'ArrowDown'} classStyle={'text-gray-500'} />
          </div>
        </div>
        <p className={'px-[10px] text-red-600'}>{errorMessage}</p>
      </>
    )
  }
)

export default Select
