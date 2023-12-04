import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useAtom } from 'jotai/index'
import Icon from '@/components/common/icon/Icon.tsx'
import { getAcademiesSearchResult } from '@/libs/api/academy/AcademyApi.ts'
import { getAcademyDetail } from '@/libs/api/mapapi/mapApi.ts'
import { SearchAcademiesResponse } from '@/libs/api/mapapi/mapApiType.ts'
import { useDebounce } from '@/libs/hooks/useDebounce.ts'
import { InitSelectAcademy } from '@/libs/store/mapInfoAtom.ts'

const MapSearchBar = () => {
  const [_, setSelectAcademy] = useAtom(InitSelectAcademy)
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')
  const [page, setPage] = useState(0)
  const debounceValue = useDebounce<string>(searchValue, 300)
  const [searchList, setSearchList] = useState<SearchAcademiesResponse[]>([])
  const [selectValue, setSelectValue] =
    useState<SearchAcademiesResponse | null>(null)

  const { ref, inView } = useInView({
    threshold: 1
  })

  const { data: searchData } = useQuery({
    queryKey: ['searchData', debounceValue, page],
    queryFn: () => getAcademiesSearchResult(debounceValue, page),
    enabled: debounceValue.length > 0
  })

  const { data: selectAcademy } = useQuery({
    queryKey: ['academyDetail', selectValue?.academyId],
    queryFn: () =>
      getAcademyDetail({
        academyId: selectValue?.academyId as number
      }),
    enabled: !!selectValue
  })

  useEffect(() => {
    if (debounceValue.length === 0) setSearchList([])

    setPage(0)
  }, [debounceValue])

  useEffect(() => {
    if (selectValue && selectAcademy) {
      setSearchList([])
      setPage(0)
      const { latitude, longitude, academyId } = selectValue
      const {
        academyName,
        contact,
        categories,
        address,
        shuttleAvailability,
        isLiked
      } = selectAcademy
      setSelectAcademy({
        academyId,
        academyName,
        address,
        contact,
        categories,
        latitude,
        longitude,
        shuttleAvailable: shuttleAvailability,
        isLiked
      })
    }
  }, [selectAcademy])

  useEffect(() => {
    if (searchData && searchData.content.length > 0) {
      if (page === 0) {
        setSearchList(searchData.content)
      } else {
        setSearchList((prev) => [...prev, ...searchData.content])
      }
    }
  }, [searchData])

  const observer = (
    <div
      className={'observer'}
      ref={ref}
      style={{ width: '100%', height: '2px' }}
    />
  )

  useEffect(() => {
    console.log(inView, !searchData?.last)
    if (inView && !searchData?.last) {
      setPage(page + 1)
    }
  }, [inView])

  return (
    <div className={'flex flex-col'}>
      <div className={'flex z-10 flex flex-row w-[390px] h-[55px] bg-white-0'}>
        <div className={'w-[297px] flex items-center body-18'}>
          <Icon
            icon={'Search'}
            classStyle={'ml-[10px] text-black-800 mr-[5px]'}
          />
          <input
            type={'search'}
            className={`grow h-full w-full px-[5px] 
            font-nsk body-15 text-black-800 placeholder:text-gray-600 outline-none`}
            placeholder={'학원 이름으로 검색해주세요'}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div
          className={
            'flex flex-col cursor-pointer w-[50px] h-[50px] justify-center items-center ml-[30px]'
          }
          onClick={() => navigate('/map/filter')}>
          <Icon icon={'Filter'} />
          <span className={'font-nsk body-10'}>{'필터'}</span>
        </div>
      </div>
      <div className={`w-full bg-white-0 z-[99999]`}>
        <div
          className={
            'flex flex-col max-h-[250px] border-t-2 border-gray-100 overflow-scroll scrollbar-hide'
          }>
          {searchList.length > 0 &&
            searchList.map((data, index) => (
              <div
                className={
                  'flex flex-row items-center cursor-pointer border-b-2 border-gray-100'
                }
                key={index}
                onClick={() => {
                  setSelectValue(data)
                }}>
                <Icon icon={'Marker'} classStyle={'ml-[20px] mr-[8px]'} />
                <div
                  className={`flex flex-col items-center w-full cursor-pointer p-[10px]`}>
                  <div className={'body-15 w-full text-left'}>
                    {data.academyName}
                  </div>
                  <div className={'caption-13 text-gray-600 w-full text-left'}>
                    {data.address}
                  </div>
                </div>
              </div>
            ))}
          {searchList.length > 0 && observer}
        </div>
      </div>
    </div>
  )
}

export default MapSearchBar
