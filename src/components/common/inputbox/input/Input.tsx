import type { InputProps } from './InputType'
import { forwardRef, useState } from 'react'
import Icon from '../../icon/Icon'

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      inputType = 'Default',
      fullWidth = true,
      width,
      height,
      name,
      placeholder = inputType === 'Default'
        ? '정보를 입력해주세요'
        : '학원명을 입력해주세요',
      errorMessage,
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
            fullWidth ? 'w-[324px] h-[52px]' : `w-[${width}px] h-[${height}px]`
          } rounded-[10px] border border-blue-350 px-[20px] font-nsk text-gray-600 bg-white-200 placeholder:text-gray-600 outline-none`}
          value={inputValue}
          name={name}
          placeholder={placeholder}
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
          ref={ref}
          {...props}
        />
        <p className={'text-red-600'}>{errorMessage}</p>
      </>
    ) : inputType === 'Search' ? (
      <>
        <div
          className={`${
            fullWidth ? 'w-[298px] h-[50px]' : `w-[${width}px] h-[${height}px]`
          } rounded-[30px] border border-blue-350 px-[20px] flex items-center bg-white-200`}>
          <Icon icon={'Search'} classStyle={'text-black-800'} />
          <input
            type={'search'}
            className={`grow h-full w-full px-[5px] font-nsk body-15 bg-white-200 placeholder:body-15 text-gray-600 outline-none`}
            value={searchInputValue}
            name={name}
            placeholder={placeholder}
            onChange={(e) => {
              setSearchInputValue(e.target.value)
            }}
            ref={ref}
            {...props}
          />
        </div>
        <p className={'text-red-600'}>{errorMessage}</p>
      </>
    ) : (
      ''
    )
  }
)

export default Input
