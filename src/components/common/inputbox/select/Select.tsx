import type { SelectProps } from './SelectType'
import { forwardRef, useState } from 'react'
import Icon from '../../icon/Icon'

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      selectType = 'Single',
      fullWidth = false,
      optionData,
      width,
      height,
      value,
      ...props
    }: SelectProps,
    ref
  ) => {
    const [singleSelectedValue, setSingleSelectedValue] = useState(value)
    const [boxSelectedValue, setBoxSelectedValue] = useState(false)
    const OPTION_DUMMY_DATA = optionData // 서버에서 받아온 값

    return selectType === 'Single' ? (
      <div
        className={`relative ${
          fullWidth ? 'w-full h-[52px]' : `'w-[324px] h-[52px]`
        }`}
        style={{ width: width, height: height }}>
        <select
          ref={ref}
          id={'singleSelect'}
          value={singleSelectedValue}
          className={`w-full h-full font-nsk body-18 px-[20px] border border-blue-350 rounded-[10px] outline-none bg-white-200
      text-black-800 appearance-none cursor-pointer`}
          onChange={(e) => {
            setSingleSelectedValue(e.target.value)
          }}
          {...props}>
          {OPTION_DUMMY_DATA.map((option, index) => (
            <option key={index} value={option}>
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
      </div>
    ) : (
      // selectedType : Box
      <>
        <div
          className={`px-[23px] ${
            fullWidth ? 'w-full h-[44px]' : `'w-[350px] h-[44px]`
          } flex justify-between items-center border border-blue-350 rounded-[10px] font-nsk
        bg-white-200 appearance-none relative
        `}>
          <p className={'body-18 text-black-800'}>{'반복'}</p>
          <select
            ref={ref}
            key={'multiSelect'}
            className={
              'bg-white-200 body-14 text-gray-600 outline-none cursor-pointer relative appearance-none w-[50px]'
            }
            value={boxSelectedValue ? 'yes' : 'no'}
            onChange={(e) => {
              setBoxSelectedValue((prev) => !prev)
            }}
            {...props}>
            {OPTION_DUMMY_DATA.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div
            className={
              'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 right-[10px]'
            }>
            <Icon icon={'ArrowDown'} classStyle={'text-gray-500'} />
          </div>
        </div>
      </>
    )
  }
)

export default Select
