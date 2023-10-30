import type { InputProps } from './InputType'
import Icon from '../../icon/Icon'

const Input = ({
  inputType = 'Default',
  value = '',
  fullWidth = true,
  width,
  height,
  name,
  placeholder,
  ...props
}: InputProps) => {
  return inputType === 'Default' ? (
    <input
      type={'text'}
      className={`${
        fullWidth ? 'w-[324px] h-[52px]' : `w-[${width}px] h-[${height}px]`
      } rounded-[10px] border border-blue-500 px-[20px] font-nsk text-gray-600 bg-white-200
      placeholder:text-gray-600 outline-none
      `}
      value={value}
      name={name}
      placeholder={placeholder}
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
        {...props}
      />
    </div>
  ) : (
    ''
  )
}

export default Input
