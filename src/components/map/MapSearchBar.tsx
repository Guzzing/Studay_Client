import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import Icon from '@/components/common/icon/Icon.tsx'
import Input from '@/components/common/inputbox/input/Input.tsx'
import { getAcademiesSearchResult } from '@/libs/api/academy/AcademyApi.ts'
import { SearchAcademiesResponse } from '@/libs/api/mapapi/mapApiType.ts'
import { useDebounce } from '@/libs/hooks/useDebounce.ts'
import { selectSearchAcademyAtom } from '@/libs/store/mapInfoAtom.ts'

const MapSearchBar = () => {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')
  const [page, setPage] = useState(0)
  const debounceValue = useDebounce<string>(searchValue, 300)
  const [searchList, setSearchList] = useState<SearchAcademiesResponse[]>([])
  const [_, setSelectValue] = useAtom(selectSearchAcademyAtom)
  const [isHidden, setHidden] = useState(false)

  const { ref, inView } = useInView({
    threshold: 1
  })

  const { data: searchData } = useQuery({
    queryKey: ['searchData', debounceValue, page],
    queryFn: () => getAcademiesSearchResult(debounceValue, page),
    enabled: debounceValue !== ''
  })

  useEffect(() => {
    if (searchData && page === 0) {
      // 검색어만 바뀌었을때
      setSearchList([...searchData.content])
    } else if (searchData && page > 0) {
      // 페이지가 바뀌었을때
      setSearchList((prevList) => [...prevList, ...searchData.content])
    } else {
      // debounceValue가 ''일때
      setSearchList([])
    }
  }, [searchData, page, debounceValue])

  const isLast = searchData?.last || false
  const updatePage = () => {
    setPage(page + 1)
  }

  //검색어가 바뀔때마다 페이지도 0으로 맞춰 api를 호출
  const updateSearchValue = (value: string) => {
    setSearchValue(value)
    setHidden(true)
    setPage(0)
  }

  const observer = (
    <div
      className={'observer'}
      ref={ref}
      style={{ width: '100%', height: '2px' }}
    />
  )

  useEffect(() => {
    if (isLast) {
      return
    } else if (inView) {
      updatePage()
    }
  }, [inView])

  return (
    <div className={'fixed z-10 flex flex-row ml-[10px] mt-[12px]'}>
      <div className={'w-[297px]'}>
        <Input
          inputType={'Search'}
          fullWidth={true}
          height={'53'}
          onChange={(e) => {
            updateSearchValue(e.target.value)
          }}
        />
        <div
          className={`w-full bg-white-100 ${
            searchList.length > 0 && isHidden
              ? 'rounded-lg border-blue-350 border mb-4 mt-2'
              : ''
          }`}>
          {isHidden && searchList.length > 0 && (
            <div className={'max-h-[300px] overflow-scroll scrollbar-hide'}>
              {searchList.map((data, index) => (
                <div
                  className={
                    'flex flex-row items-center cursor-pointer border-b-2 border-gray-100'
                  }
                  key={index}
                  onClick={() => {
                    setSelectValue(data)
                    setHidden(false)
                  }}>
                  <Icon icon={'Marker'} classStyle={'ml-[20px] mr-[8px]'} />
                  <div
                    className={`flex flex-col items-center w-full cursor-pointer p-[10px]`}>
                    <div className={'body-15 w-full text-left'}>
                      {data.academyName}
                    </div>
                    <div
                      className={'caption-13 text-gray-600 w-full text-left'}>
                      {data.address}
                    </div>
                  </div>
                </div>
              ))}
              {observer}
            </div>
          )}
        </div>
      </div>
      <div
        className={
          'flex flex-col cursor-pointer bg-white-0 rounded-full w-[50px] h-[50px] justify-center items-center ml-[10px]'
        }
        onClick={() => navigate('/map/filter')}>
        <Icon icon={'Filter'} />
        <span className={'font-nsk body-10'}>{'필터'}</span>
      </div>
    </div>
  )
}

export default MapSearchBar
