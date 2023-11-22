import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAcademiesSearchResult } from '@/libs/api/academy/AcademyApi.ts'
import { SearchAcademiesResponse } from '@/libs/api/mapapi/mapApiType.ts'
import { useDebounce } from '@/libs/hooks/useDebounce.ts'

/**
 * 검색어를 입력하면 검색결과를 리턴해 관리하는 커스텀 훅입니다.
 * updateSearchValue : onChange 이벤트에서 value를 주세요
 * isLast : 무한 스크롤시 마지막 데이터인지 확인하는 flag값 입니다.
 * updatePage : 페이지의 상태를 증가시킬때 사용하는 메서드입니다.
 * searchList : 검색 결과입니다.
 * */

const useSearch = () => {
  const [searchValue, setSearchValue] = useState('')
  const [page, setPage] = useState(0)
  const debounceValue = useDebounce<string>(searchValue, 300)
  const [searchList, setSearchList] = useState<SearchAcademiesResponse[]>([])

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
    setPage(0)
  }

  return [updateSearchValue, isLast, updatePage, searchList] as const
}

export default useSearch
