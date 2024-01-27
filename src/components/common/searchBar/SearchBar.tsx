import React, { useRef, useState } from 'react'
import Icon from '@/components/common/icon/Icon.tsx'
import { SearchBarType } from '@/components/common/searchBar/SearchBarType.ts'

const SearchBar = ({
  fullWidth = false,
  field = '',
  width,
  height,
  name,
  placeholder = '',
  errorMessage,
  onChange,
  onSearch, // 새로 추가된 prop
  ...props
}: SearchBarType) => {
  const [searchInputValue, setSearchInputValue] = useState('')
  const [isFocus, setIsFocus] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e)
    }
    setSearchInputValue(e.target.value)
  }

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchInputValue)
    }
  }

  const handleClickClose = (e: any) => {
    e.stopPropagation()
    setSearchInputValue('')
    inputRef.current?.focus()
  }

  const handleFocus = () => setIsFocus(true)
  const handleBlur = () => setIsFocus(false)

  return (
    <>
      <div
        style={{ width, height }}
        className={`${
          fullWidth ? 'w-full h-[50px]' : 'w-[298px] h-[50px]'
        } rounded-[30px] border border-blue-350 px-[15px] flex items-center bg-white-200 body-18`}>
        {isFocus ? (
          <Icon icon={'BackPush'} classStyle={'text-black-800 mr-[5px]'} />
        ) : (
          <Icon
            icon={'Search'}
            classStyle={'text-black-800 mr-[5px]'}
            onClick={handleSearch}
          />
        )}

        <input
          ref={inputRef}
          type={'text'}
          className={`grow h-full w-full px-[5px] rounded-[30px] font-nsk body-15 text-black-800 bg-white-200 placeholder:text-gray-600 outline-none`}
          value={searchInputValue}
          name={name}
          placeholder={placeholder}
          onChange={onChangeHandler}
          onBlur={handleBlur}
          onFocus={handleFocus}
          {...props}
        />

        {isFocus ? (
          <Icon
            icon={'Close'}
            classStyle={'text-black-800 ml-[5px] cursor-pointer'}
            onClick={handleClickClose}
          />
        ) : (
          <Icon
            icon={'Filter'}
            classStyle={'text-black-800 ml-[5px]'}
            onClick={() => {
              //필터 버튼 이벤트 만들어야 함 ㅠㅠ
            }}
          />
        )}
      </div>
      {errorMessage && (
        <p className={'font-nsk caption-13 text-red-600 px-3 mt-1'}>
          {errorMessage}
        </p>
      )}
    </>
  )
}

export default SearchBar
