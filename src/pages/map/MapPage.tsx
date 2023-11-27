import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useLocation, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useAtom } from 'jotai/index'
import { SetLocationProps } from '../../types/mapPage.ts'
import SettingPage from '../setting/SettingPage.tsx'
import Icon from '@/components/common/icon/Icon.tsx'
import Input from '@/components/common/inputbox/input/Input.tsx'
import Spacing from '@/components/common/spacing/Spacing.tsx'
import NaverMap from '@/components/map/NaverMap.tsx'
import { getAcademiesSearchResult } from '@/libs/api/academy/AcademyApi.ts'
import { getAcademyFilter } from '@/libs/api/filter/filterApi.ts'
import { getAcademyList } from '@/libs/api/mapapi/mapApi.ts'
import { SearchAcademiesResponse } from '@/libs/api/mapapi/mapApiType.ts'
import { useDebounce } from '@/libs/hooks'
import useSidebar from '@/libs/hooks/useSidebar.tsx'
import { mapInfoAtom } from '@/libs/store/mapInfoAtom.ts'

const MapPage = () => {
  const { ref, inView } = useInView({
    threshold: 1
  })
  const navigate = useNavigate()
  const location = useLocation()
  const [searchValue, setSearchValue] = useState('')
  const queryString = location.search
  const debounceValue = useDebounce<string>(searchValue, 300)
  const [lastPage, setLastPage] = useState(false)
  const [academiesData, setAcademiesData] = useState<SearchAcademiesResponse[]>(
    []
  )
  const [page, setPage] = useState(0)
  const [isinitial, setInitial] = useState(true)
  const [searchAcademy, setSearchAcademy] = useState(-1)
  const { toggleOpen } = useSidebar()
  useEffect(() => {
    if (lastPage) {
      return
    } else if (inView) {
      fetchSearchInfiniteScroll(debounceValue, page)
    }
  }, [inView])

  const fetchSearchInfiniteScroll = async (
    searchKeyword: string,
    page: number
  ) => {
    const data = await getAcademiesSearchResult(searchKeyword, page)
    setAcademiesData([...academiesData, ...data.content])
    setPage(data.number + 1)
    setInitial(data.first)
    setLastPage(data.last)
  }

  const fetchSearchResult = async (searchKeyword: string, page: number) => {
    const data = await getAcademiesSearchResult(searchKeyword, page)
    setAcademiesData([...data.content])
    setPage(data.number + 1)
    setInitial(data.first)
    setLastPage(data.last)
  }

  useEffect(() => {
    if (isinitial) {
      fetchSearchResult(debounceValue, 0)
    }
  }, [debounceValue])

  const observer = (
    <div
      className={'observer'}
      ref={ref}
      style={{ width: '100%', height: '2px' }}
    />
  )
  useEffect(() => {
    console.log(searchAcademy)
  })

  const [mapInfo, setMapInfo] = useAtom(mapInfoAtom)
  const { data: academyList } = useQuery({
    queryKey: ['academyList', mapInfo.latitude, mapInfo.longitude],
    queryFn: () =>
      getAcademyList({
        latitude: mapInfo.latitude,
        longitude: mapInfo.longitude
      }),
    enabled: !queryString
  })
  const { data: academyFilterList } = useQuery({
    queryKey: ['academyFilterList', queryString],
    queryFn: () => getAcademyFilter({ queryString: queryString }),
    enabled: queryString.length > 0
  })

  const moveFilter = () => {
    navigate('/map/filter')
  }

  const setLocation = ({ latitude, longitude }: SetLocationProps) => {
    setMapInfo((prev) => ({
      ...prev,
      latitude,
      longitude
    }))
  }

  return (
    <div className={'relative bg-white-100 w-full h-full overflow-hidden z-20'}>
      <SettingPage isOpen={toggleOpen} />
      <div>
        <Spacing size={80} />
        <div className={'fixed z-10 flex flex-row ml-[10px] mt-[12px]'}>
          <div className={'w-[297px]'}>
            <Input
              inputType={'Search'}
              fullWidth={true}
              height={'53'}
              onChange={(e) => {
                setSearchValue(e.target.value)
              }}
            />
            <div
              className={`w-full bg-white-100 ${
                academiesData.length > 0
                  ? 'rounded-lg border-blue-350 border mb-4 mt-2'
                  : ''
              }`}>
              {academiesData.length > 0 && (
                <div className={'max-h-[300px] overflow-scroll scrollbar-hide'}>
                  {academiesData.map((data, index) => (
                    <div
                      className={
                        'flex flex-row items-center cursor-pointer border-b-2 border-gray-100'
                      }
                      key={index}
                      onClick={() => {
                        setSearchAcademy(data.academyId)
                        console.log(data)
                      }}>
                      <Icon icon={'Marker'} classStyle={'ml-[20px] mr-[8px]'} />
                      <div
                        className={`flex flex-col items-center w-full cursor-pointer p-[10px]`}
                        onClick={() => {
                          setAcademiesData([])
                        }}>
                        <div className={'body-15 w-full text-left'}>
                          {data.academyName}
                        </div>
                        <div
                          className={
                            'caption-13 text-gray-600 w-full text-left'
                          }>
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
            onClick={moveFilter}>
            <Icon icon={'Filter'}></Icon>
            <span className={'font-nsk body-10'}>{'필터'}</span>
          </div>
        </div>
        <NaverMap
          latitude={mapInfo.latitude}
          longitude={mapInfo.longitude}
          academyList={
            academyList?.academiesByLocationResponse ||
            academyFilterList?.academyFilterResponses ||
            []
          }
          setLocation={setLocation}
          //현재 상태관리가 엉망으로되있어서 나중에 제외해야할 코드입니다.
          searchAcademy={searchAcademy}
        />
      </div>
    </div>
  )
}
export default MapPage
