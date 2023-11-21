import { useEffect } from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import Button from '@/components/common/button/Button'
import Spacing from '@/components/common/spacing/Spacing'
import { postDashboardInfo } from '@/libs/api/academy/AcademyApi'

import { academyInfoAtom } from '@/libs/store/academyInfo'
import AddAcademyInfo from '@/pages/academy/addSchedule/AddAcademyInfo'
import AddAcademyName from '@/pages/academy/addSchedule/AddAcademyName'
import AddMemo from '@/pages/academy/addSchedule/AddMemo'
import AddPayment from '@/pages/academy/addSchedule/AddPayment'
import AddSchedule from '@/pages/academy/addSchedule/AddSchedule'
const AddAcademy = () => {
  const [academyInfo, setAcademyInfo] = useAtom(academyInfoAtom)
  const childrenSelectRef = useRef<HTMLSelectElement>(null)
  const classSelectRef = useRef<HTMLSelectElement>(null)
  const navigate = useNavigate()
  const dashboardMutation = useMutation({
    mutationFn: postDashboardInfo,
    onSuccess: () => {
      if (childrenSelectRef.current) childrenSelectRef.current.selectedIndex = 0
      if (classSelectRef.current) classSelectRef.current.selectedIndex = 0
      navigate('/academies')
      alert('성공적으로 업로드!')
    }
  })
  useEffect(() => {
    console.log(academyInfo)
  }, [academyInfo])

  return (
    <div className={'w-full overflow-scroll relative scrollbar-hide'}>
      <Spacing size={100} />
      <AddAcademyName />
      <h2 className={'body-16 text-black-800 px-[24px] mb-[14px]'}>
        {'요일 선택하기'}
      </h2>
      <AddSchedule />
      <h2 className={'body-16 text-black-800 px-[24px] my-[14px]'}>
        {'학원 정보 입력'}
      </h2>
      <AddAcademyInfo
        childrenSelectRef={childrenSelectRef}
        classSelectRef={classSelectRef}
      />
      <h2 className={'body-16 text-black-800 px-[24px] my-[14px]'}>
        {'학원비 입력하기'}
      </h2>
      <AddPayment />
      <h2 className={'body-16 text-black-800 px-[24px] my-[14px]'}>
        {'간편 메모하기'}
      </h2>
      <AddMemo />
      <Spacing size={40} />
      <Button
        buttonType={'Square'}
        label={'저장 완료'}
        fullWidth={true}
        onClick={() => dashboardMutation.mutate(academyInfo)}
      />
    </div>
  )
}

export default AddAcademy
