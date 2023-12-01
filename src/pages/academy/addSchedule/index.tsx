import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import AddAcademyInfo from './AddAcademyInfo'
import AddAcademyName from './AddAcademyName'
import AddMemo from './AddMemo'
import AddPayment from './AddPayment'
import AddSchedule from './AddSchedule'
import Button from '@/components/common/button/Button'
import Spacing from '@/components/common/spacing/Spacing'
import { postDashboardInfo } from '@/libs/api/academy/AcademyApi'
import useToastify from '@/libs/hooks/useToastify'
import { initialAcademyInfoAtom } from '@/libs/store/academyInfo'
import { academyInfoAtom } from '@/libs/store/academyInfo'
import { childAtom } from '@/libs/store/childInfoAtom'

const AddAcademy = () => {
  const { setToast } = useToastify()
  const [childInfo, setChildrenInfo] = useAtom(childAtom)
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
      setToast({ comment: '학원 정보를 등록했어요.', type: 'success' })
    }
  })

  useEffect(() => {
    setAcademyInfo({ ...initialAcademyInfoAtom })
  }, [])

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
      <h2 className={'body-16 text-black-800 px-[24px] mt-[14px]'}>
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
        onClick={() => {
          if (academyInfo.schedules.length === 0) {
            setToast({
              comment: '학원 스케쥴 정보를 채워주세요',
              type: 'warning'
            })
            return
          }
          dashboardMutation.mutate(academyInfo)
          setChildrenInfo({
            ...childInfo,
            childId: academyInfo.childId
          })
          setAcademyInfo({ ...initialAcademyInfoAtom })
        }}
      />
    </div>
  )
}

export default AddAcademy
