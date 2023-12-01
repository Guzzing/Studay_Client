import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import Button from '@/components/common/button/Button'
import Spacing from '@/components/common/spacing/Spacing'
import { editAcademyInfo } from '@/libs/api/academy/AcademyApi'
import { AcademyInfoRequest } from '@/libs/api/academy/AcademyType'
import { getDetailDashboard } from '@/libs/api/dashboard/DashBoardApi'
import { GetAllDashBoardResponse } from '@/libs/api/dashboard/DashBoardType'
import useToastify from '@/libs/hooks/useToastify'
import { initialAcademyInfoAtom } from '@/libs/store/academyInfo'
import { academyInfoAtom } from '@/libs/store/academyInfo'
import { childAtom } from '@/libs/store/childInfoAtom'
import AddAcademyInfo from '@/pages/academy/addSchedule/AddAcademyInfo'
import AddAcademyName from '@/pages/academy/addSchedule/AddAcademyName'
import AddMemo from '@/pages/academy/addSchedule/AddMemo'
import AddPayment from '@/pages/academy/addSchedule/AddPayment'
import AddSchedule from '@/pages/academy/addSchedule/AddSchedule'

const EditAcademy = () => {
  const [academyInfo, setAcademyInfo] = useAtom(academyInfoAtom)
  const [childInfo, setChildrenInfo] = useAtom(childAtom)
  const [academyName, setAcademyName] = useState<string>('')
  const [data, setData] = useState<GetAllDashBoardResponse | null>(null)
  const childrenSelectRef = useRef<HTMLSelectElement>(null)
  const classSelectRef = useRef<HTMLSelectElement>(null)
  const navigate = useNavigate()
  const { setToast } = useToastify()
  const dashboardId = useLocation().state as number

  const fetchDashboardData = async (dashboardId: number) => {
    if (dashboardId) {
      const res = await getDetailDashboard(dashboardId)
      setData(res)
    } else return
  }
  const dashBoardEditMutation = useMutation({
    mutationFn: ({
      dashboardId,
      academyInfo
    }: {
      dashboardId: number
      academyInfo: AcademyInfoRequest
    }) => editAcademyInfo(dashboardId, academyInfo),
    onSuccess: () => {
      if (childrenSelectRef.current) childrenSelectRef.current.selectedIndex = 0
      if (classSelectRef.current) classSelectRef.current.selectedIndex = 0
      navigate('/academies')
      setToast({ comment: '학원 정보를 수정했어요.', type: 'success' })
    }
  })

  useEffect(() => {
    if (data) {
      setAcademyInfo({
        academyId: data.academyInfo.academyId,
        childId: data?.childInfo.childId,
        lessonId: data.lessonInfo.lessonId,
        schedules: data?.schedules,
        paymentInfo: data?.paymentInfo,
        simpleMemo: data?.simpleMemo
      })
      setAcademyName(data.academyInfo.academyName)
    } else {
      return
    }
  }, [data])

  useEffect(() => {
    console.log(academyInfo)
  }, [academyInfo])

  useEffect(() => {
    fetchDashboardData(dashboardId)
  }, [dashboardId])

  return (
    <div className={'w-full overflow-scroll relative scrollbar-hide'}>
      <Spacing size={100} />
      <AddAcademyName fixedAcademyName={academyName} />
      <h2 className={'body-16 text-black-800 px-[24px] mb-[14px]'}>
        {'요일 선택하기'}
      </h2>
      <AddSchedule isEdit={true} />
      <h2 className={'body-16 text-black-800 px-[24px] my-[14px]'}>
        {'학원 정보 입력'}
      </h2>
      <AddAcademyInfo
        childrenSelectRef={childrenSelectRef}
        classSelectRef={classSelectRef}
        isEdit={true}
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
        onClick={() => {
          dashBoardEditMutation.mutate({ dashboardId, academyInfo })
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

export default EditAcademy
