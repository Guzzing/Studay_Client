import type { InputProps } from './InputType'
import { forwardRef, useState } from 'react'
import Icon from '../../icon/Icon'
import { validate } from '@/pages/onboarding/validate'

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      inputType = 'Default',
      fullWidth = false,
      field = '',
      width,
      height,
      name,
      placeholder = '',
      errorMessage,
      ...props
    }: InputProps,
    ref
  ) => {
    const [inputValue, setInputValue] = useState('')
    const [searchInputValue, setSearchInputValue] = useState('')
    return inputType === 'Default' ? (
      <div className={'my-[10px]'}>
        <input
          type={'text'}
          className={`${
            fullWidth ? 'w-full h-[52px]' : 'w-[323px] h-[52px]'
          } rounded-[10px] ${
            field === 'email' && !validate('email', inputValue)
              ? 'border border-red-600'
              : field === 'nickname' && !validate('nickname', inputValue)
              ? 'border border-red-600'
              : 'border border-blue-500'
          }  px-[20px] font-nsk text-black-800 bg-white-200 body-18 placeholder:text-gray-600 outline-none`}
          value={inputValue}
          style={{ width: width, height: height }}
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
          name={name}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
        <p className={'font-nsk caption-13 text-red-600 px-3 mt-1'}>
          {field === 'email' && !validate('email', inputValue)
            ? (errorMessage = '잘못된 이메일입니다')
            : field === 'nickname' && !validate('nickname', inputValue)
            ? (errorMessage = '한글과 영어만 사용가능합니다')
            : field === 'childname' && !validate('childname', inputValue)
            ? (errorMessage = '아이의 이름은 1글자에서 10글자여야 합니다!')
            : ''}
        </p>
      </div>
    ) : inputType === 'Search' ? (
      <>
        <div
          style={{ width: width, height: height }}
          className={`${
            fullWidth ? 'w-full h-[50px]' : `w-[298px] h-[50px]`
          } rounded-[30px] border  border-blue-350 
          px-[20px] flex items-center bg-white-200 body-18 `}>
          <Icon icon={'Search'} classStyle={'text-black-800'} />
          <input
            type={'search'}
            className={`grow h-full w-full px-[5px] 
            font-nsk body-15 text-black-800  bg-white-200 placeholder:text-gray-600 outline-none`}
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
        <p className={'font-nsk caption-13 text-red-600 px-3 mt-1'}>
          {errorMessage}
        </p>
      </>
    ) : (
      ''
    )
  }
)

export default Input
