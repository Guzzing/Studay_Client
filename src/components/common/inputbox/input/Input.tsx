import type { InputProps } from './InputType'
import { forwardRef, useState } from 'react'
import Icon from '../../icon/Icon'

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      inputType = 'Default',
      fullWidth = false,
      width,
      height,
      name,
      placeholder = '',
      errorMessage,
      onChange,
      ...props
    }: InputProps,
    ref
  ) => {
    const [inputValue, setInputValue] = useState('')
    const [searchInputValue, setSearchInputValue] = useState('')
    return inputType === 'Default' ? (
      <>
        <input
          type={'text'}
          className={`${
            fullWidth ? 'w-full h-[52px]' : 'w-[323px] h-[52px]'
          } rounded-[10px] ${
            errorMessage ? 'border border-red-600' : 'border border-blue-350'
          }  px-[20px] font-nsk text-black-800 bg-white-200 body-18 placeholder:text-gray-600 outline-none`}
          value={inputValue}
          style={{ width: width, height: height }}
          onChange={(e) => {
            if (onChange) {
              onChange(e)
            }
            setInputValue(e.target.value)
          }}
          name={name}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
        {errorMessage && (
          <p className={'font-nsk caption-13 text-red-600 px-3 mt-1'}>
            {errorMessage}
          </p>
        )}
      </>
    ) : inputType === 'Search' ? (
      <>
        <div
          style={{ width: width, height: height }}
          className={`${
            fullWidth ? 'w-full h-[50px]' : `w-[298px] h-[50px]`
          } rounded-[30px] border  border-blue-350 
          px-[15px] flex items-center bg-white-200 body-18 `}>
          <Icon icon={'Search'} classStyle={'text-black-800 mr-[5px]'} />
          <input
            type={'search'}
            className={`grow h-full w-full px-[5px] rounded-[30px]
            font-nsk body-15 text-black-800  bg-white-200 placeholder:text-gray-600 outline-none`}
            value={searchInputValue}
            name={name}
            placeholder={placeholder}
            onChange={(e) => {
              if (onChange) {
                onChange(e)
              }
              setSearchInputValue(e.target.value)
            }}
            ref={ref}
            {...props}
          />
        </div>
        {errorMessage && (
          <p className={'font-nsk caption-13 text-red-600 px-3 mt-1'}>
            {errorMessage}
          </p>
        )}
      </>
    ) : (
      ''
    )
  }
)

export default Input
