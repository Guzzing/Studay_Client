import { forwardRef, useState } from 'react'
import Icon from '@/components/common/icon/Icon.tsx'
import { SearchBarType } from '@/components/common/searchBar/SearchBarType.ts'

const SearchBar = forwardRef<HTMLInputElement, SearchBarType>(
  (
    {
      fullWidth = false,
      field = '',
      width,
      height,
      name,
      placeholder = '',
      errorMessage,
      onChange,
      ...props
    }: SearchBarType,
    ref
  ) => {
    const [searchInputValue, setSearchInputValue] = useState('')

    return (
      <>
        <div
          style={{ width: width, height: height }}
          className={`${
            fullWidth ? 'w-full h-[50px]' : `w-[298px] h-[50px]`
          } rounded-[30px] border  border-blue-350 
          px-[15px] flex items-center bg-white-200 body-18`}>
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
            // ref 를 사용하는 부분이 없어서 타입 오류가 나는 걸까요? -예준
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
    )
  }
)

export default SearchBar
