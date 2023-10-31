import type { InputProps } from './InputType'
import { forwardRef } from 'react'
import Icon from '../../icon/Icon'

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      inputType = 'Default',
      value = '',
      fullWidth = true,
      width,
      height,
      name,
      placeholder,
      onChange,
      ...props
    }: InputProps,
    ref
  ) => {
    return inputType === 'Default' ? (
      <input
        type={'text'}
        className={`${
          fullWidth ? 'w-[324px] h-[52px]' : `w-[${width}px] h-[${height}px]`
        } rounded-[10px] border border-blue-500 px-[20px] font-nsk text-gray-600 bg-white-200 placeholder:text-gray-600 outline-none`}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        ref={ref}
        {...props}
      />
    ) : inputType === 'Search' ? (
      <div
        className={`${
          fullWidth ? 'w-[298px] h-[50px]' : `w-[${width}px] h-[${height}px]`
        } rounded-[30px] border border-blue-500 px-[20px] flex items-center bg-white-200`}
      >
        <Icon icon={'Search'} classStyle={'text-black-900'} />
        <input
          type={'search'}
          className={`grow h-full w-full px-[5px] font-nsk text-gray-600 bg-white-200 outline-none`}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          ref={ref}
          {...props}
        />
      </div>
    ) : (
      ''
    )
  }
)

export default Input
