import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import Button from '@/components/common/button/Button'
import Spacing from '@/components/common/spacing/Spacing'
import { beforeEditInfoScheduleApi } from '@/libs/api/schedule/scheduleApi'
import { editScheduleApi } from '@/libs/api/schedule/scheduleApi'
import { UpdateScheduleType } from '@/libs/api/schedule/scheduleType'
import useToastify from '@/libs/hooks/useToastify'
import { initialScheduleAtom, scheduleAtom } from '@/libs/store/scheduleInfo'
import AddScheduleAcademy from '@/pages/schedule/new/AddScheduleAcademy'
import AddScheduleMemo from '@/pages/schedule/new/AddScheduleMemo'
import AddScheduleTime from '@/pages/schedule/new/AddScheduleTime'

const EditSchedule = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const scheduleId = Number.parseInt(location.pathname.split('/')[2], 10)
  const [scheduleInfo, setScheduleInfo] = useAtom(scheduleAtom)
  const { setToast } = useToastify()
  const { data } = useQuery({
    queryKey: ['beforeEditData', scheduleId],
    queryFn: () => beforeEditInfoScheduleApi({ scheduleId })
  })

  const editScheduleMutation = useMutation({
    onSuccess: (data) => {
      setToast({ comment: '일정을 수정했어요.', type: 'success' })
      navigate(`/schedule/${data.academyTimeTemplateIds[0]}`)
      setScheduleInfo(initialScheduleAtom)
    },
    mutationFn: ({
      payload
    }: {
      payload: UpdateScheduleType | { isAllUpdated: true }
    }) =>
      editScheduleApi({
        payload: payload
      })
  })
  useEffect(() => {
    if (data) {
      setScheduleInfo({
        dashboardId: data.dashboardId,
        lessonScheduleCreateRequests: [...data.lessonSchedule],
        childId: data.childId,
        attendanceDate: {
          startDateOfAttendance: data.startDateOfAttendance,
          endDateOfAttendance: data.endDateOfAttendance
        },
        isAlarmed: data.isAlarmed,
        periodicity: 'WEEKLY',
        memo: data.memo
      })
    }
  }, [data])

  return (
    <div className={'flex flex-col relative w-full h-full'}>
      <div className={'px-[20px]'}>
        <AddScheduleAcademy isEdit={true} />
        <h2 className={'body-16 mb-[13px]'}>{'일정 설정하기'}</h2>
        <AddScheduleTime isEdit={true} />
        <Spacing size={20} />
        <AddScheduleMemo />
      </div>
      <Button
        style={{ position: 'absolute', width: '100%', bottom: 0 }}
        buttonType={'Square'}
        label={'일정 등록 완료!'}
        onClick={() => {
          editScheduleMutation.mutate({
            payload: {
              ...scheduleInfo,
              lessonScheduleUpdateRequests: [
                ...scheduleInfo.lessonScheduleCreateRequests
              ],
              isAllUpdated: true
            }
          })
        }}
      />
    </div>
  )
}

export default EditSchedule