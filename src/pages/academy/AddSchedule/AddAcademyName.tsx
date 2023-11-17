import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAtom } from 'jotai'
import Button from '@/components/common/button/Button'
import Input from '@/components/common/inputbox/input/Input'
import Modal from '@/components/common/modal/Modal'
import { getAcademiesSearchResult } from '@/libs/api/academy/AcademyApi'
import { SearchAcademiesResponse } from '@/libs/api/mapapi/mapApiType.ts'
import { useDebounce } from '@/libs/hooks/useDebounce'
import { academyInfoAtom } from '@/libs/store/academyInfo'

const AddAcademyName = () => {
  const { ref, inView } = useInView({
    threshold: 1
  })
  const [academyInfo, setAcademyInfo] = useAtom(academyInfoAtom)
  const [academyName, setAcademyName] = useState('학원 등록하기')
  const [searchValue, setSearchValue] = useState('')
  const [isModalOpen, setModalOpen] = useState(false)
  const [page, setPage] = useState(0)
  const [isinitial, setInitial] = useState(true)
  const [lastPage, setLastPage] = useState(false)
  const [academiesData, setAcademiesData] = useState<SearchAcademiesResponse[]>(
    []
  )
  const debounceValue = useDebounce<string>(searchValue, 300)

  useEffect(() => {
    if (lastPage) {
      return
    } else if (inView) {
      fetchSearchInfiniteScroll(debounceValue, page)
    }
  }, [inView])

  const observer = (
    <div
      className={'observer'}
      ref={ref}
      style={{ width: '100%', height: '2px' }}
    />
  )

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

  const handleSelectAcademy = (academyId: number) => {
    setAcademyInfo({ ...academyInfo, academyId: academyId })
  }

  useEffect(() => {
    if (isinitial) {
      fetchSearchResult(debounceValue, 0)
    }
  }, [debounceValue])

  return (
    <div className={'flex flex-col items-center px-[20px]'}>
      <button
        className={
          'w-full h-[52px] rounded-[10px] text-left px-[20px] border border-blue-350 font-nsk text-gray-600 bg-white-200 body-18 placeholder:text-gray-600 outline-none'
        }
        onClick={() => setModalOpen(!isModalOpen)}>
        {academyName}
      </button>
      <div
        className={
          'w-full py-[10px] text-right caption-13 text-gray-600 underline underline-offset-2 cursor-pointer'
        }>
        {'찾는 학원이 없나요?'}
      </div>
      {isModalOpen && (
        <Modal>
          <div
            className={
              ' bg-white-0 w-80 rounded-[10px] flex flex-col px-[30px] py-[25px] h-auto'
            }>
            <h3 className={'body-16 mb-2'}>{'학원 이름을 입력해 주세요.'}</h3>
            <Input
              fullWidth={true}
              inputType={'Search'}
              onChange={(e) => {
                setSearchValue(e.target.value)
              }}
            />
            <div
              className={`w-full  ${
                academiesData.length > 0
                  ? 'rounded-lg border-blue-350 border mb-4 mt-2'
                  : ''
              }`}>
              {academiesData.length === 0 ? (
                <div className={'p-[20px] body-15 text-gray-600'}>
                  {'학원명으로 검색해주세요.'}
                </div>
              ) : (
                <div className={'max-h-[300px] overflow-scroll scrollbar-hide'}>
                  {academiesData.map((data, index) => (
                    <div
                      className={`flex flex-col items-center w-full cursor-pointer ${
                        academiesData.length - 1 === index
                          ? ''
                          : 'border-b-2 border-gray-100'
                      } p-[10px]`}
                      key={index}
                      onClick={() => {
                        handleSelectAcademy(data.academyId)
                        setModalOpen(!isModalOpen)
                        setAcademyName(data.academyName)
                        setAcademiesData([])
                      }}>
                      <div className={'body-15 w-full text-left'}>
                        {data.academyName}
                      </div>
                      <div
                        className={'caption-13 text-gray-600 w-full text-left'}>
                        {data.address}
                      </div>
                    </div>
                  ))}
                  {observer}
                </div>
              )}
            </div>
            <Button
              buttonType={'Round-blue-500'}
              fullWidth={true}
              label={'취소'}
              height={'SH'}
              style={{ height: 40 }}
              onClick={() => {
                setModalOpen(!isModalOpen)
                setAcademiesData([])
              }}
            />
          </div>
        </Modal>
      )}
    </div>
  )
}

export default AddAcademyName
