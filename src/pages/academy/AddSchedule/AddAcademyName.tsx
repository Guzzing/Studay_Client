import { useEffect, useRef } from 'react'
import { useQuery } from '@tanstack/react-query'
import Input from '@/components/common/inputbox/input/Input'
import Modal from '@/components/common/modal/Modal'
import { getAcademiesSearchResult } from '@/libs/api/academy/AcademyApi'
const AddAcademyName = () => {
  const inputRef = useRef(null)

  return (
    <div className={'flex flex-col items-center'}>
      <Input placeholder={'학원 등록하기'} inputType={'Default'} />
      <Modal>
        <div
          className={
            'bg-white-0 w-80 rounded-[10px] flex flex-col gap-[16px] px-[30px] py-[25px] h-auto'
          }>
          <h3 className={'body-16'}>{'학원 이름을 입력해 주세요.'}</h3>
          <Input
            fullWidth={true}
            inputType={'Search'}
            ref={inputRef}
            onChange={(e) => {
              console.log(e.target.value)
            }}
          />
        </div>
      </Modal>
      <div
        className={
          'w-full py-[10px] px-[28px] text-right caption-13 text-gray-600 underline underline-offset-2 cursor-pointer'
        }>
        {'찾는 학원이 없나요?'}
      </div>
    </div>
  )
}

export default AddAcademyName
