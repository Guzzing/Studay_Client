import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import Button from '@/components/common/button/Button'
import Input from '@/components/common/inputbox/input/Input'
// import Modal from '@/components/common/modal/Modal'
import { getAcademiesSearchResult } from '@/libs/api/academy/AcademyApi'
import { SearchAcademiesResponse } from '@/libs/api/mapapi/mapApiType.ts'
import { useDebounce } from '@/libs/hooks/useDebounce'
import useModal from '@/libs/hooks/useModal'
import { academyInfoAtom } from '@/libs/store/academyInfo'
const AddAcademyName = () => {
  const [academyInfo, setAcademyInfo] = useAtom(academyInfoAtom)
  // const [isModalOpen, setModalOpen] = useState(false)
  const [academyName, _] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [academiesData, setAcademiesData] = useState<SearchAcademiesResponse[]>(
    []
  )
  const { Modal, open, close } = useModal()

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const fetchSearchResult = async (searchKeyword: string, page: number) => {
    const data = await getAcademiesSearchResult(searchKeyword, page)
    setAcademiesData([...data.content])
    return data.content
  }

  const handleSelectAcademy = (academyId: number) => {
    setAcademyInfo({ ...academyInfo, academyId: academyId })
  }
  const debounceValue = useDebounce<string>(searchValue, 300)
  useEffect(() => {
    fetchSearchResult(debounceValue, 0)
  }, [debounceValue])

  return (
    <div className={'flex flex-col items-center px-[20px]'}>
      <input
        type={'text'}
        className={
          'w-full h-[52px] rounded-[10px] px-[20px] border border-blue-350 font-nsk text-black-800 bg-white-200 body-18 placeholder:text-gray-600 outline-none'
        }
        value={academyName}
        disabled={true}
        placeholder={'학원 이름을 입력해주세요'}
        // ref={ref}
        onClick={() => open()}
      />
      <Modal>
        <div
          className={
            'bg-white-0 w-80 rounded-[10px] flex flex-col gap-[16px] px-[30px] py-[25px] h-auto'
          }>
          <h3 className={'body-16'}>{'학원 이름을 입력해 주세요.'}</h3>
          <Input
            fullWidth={true}
            inputType={'Search'}
            onChange={(e) => {
              setSearchValue(e.target.value)
            }}
          />
          {academiesData.map((data, index) => (
            <div
              className={'flex flex-col items-center  w-full cursor-pointer'}
              key={index}
              onClick={() => handleSelectAcademy(data.academyId)}>
              <div className={'body-15 w-full text-left'}>
                {data.academyName}
              </div>
              <div className={'caption-13 text-gray-600 w-full text-left'}>
                {data.address}
              </div>
            </div>
          ))}
          <Button
            buttonType={'Round-blue-500'}
            fullWidth={true}
            label={'취소'}
            height={'SH'}
            style={{ height: 40 }}
            onClick={() => close()}
          />
        </div>
      </Modal>
      <div
        className={
          'w-full py-[10px] text-right caption-13 text-gray-600 underline underline-offset-2 cursor-pointer'
        }
        onClick={() => open()}>
        {'찾는 학원이 없나요?'}
      </div>
    </div>
  )
}

export default AddAcademyName
