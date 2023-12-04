import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import Button from '@/components/common/button/Button'
import Spacing from '@/components/common/spacing/Spacing'
import { postScheduleApi } from '@/libs/api/schedule/scheduleApi'
import { PostScheduleType } from '@/libs/api/schedule/scheduleType'
import useToastify from '@/libs/hooks/useToastify'
import { initialScheduleAtom } from '@/libs/store/scheduleInfo'
import { scheduleAtom } from '@/libs/store/scheduleInfo'
import AddScheduleAcademy from '@/pages/schedule/new/AddScheduleAcademy'
import AddScheduleMemo from '@/pages/schedule/new/AddScheduleMemo'
import AddScheduleTime from '@/pages/schedule/new/AddScheduleTime'

const NewSchedule = () => {
  const navigate = useNavigate()
  const [scheduleInfo, setScheduleInfo] = useAtom(scheduleAtom)
  const { setToast } = useToastify()

  const postNewScheduleMutation = useMutation({
    onSuccess: () => {
      setToast({ comment: '일정이 생성되었어요.', type: 'success' })
      navigate(`/schedule`)
    },
    onError: () => {
      setToast({
        comment: '해당 스케쥴과 겹치는 일정이 있어요.',
        type: 'error'
      })
    },
    mutationFn: (scheduleInfo: PostScheduleType) =>
      postScheduleApi(scheduleInfo)
  })

  useEffect(() => {
    setScheduleInfo(initialScheduleAtom)
  }, [setScheduleInfo])

  return (
    <div className={'flex flex-col px-[20px] relative w-full h-full'}>
      <div className={'w-full h-full overflow-scroll scrollbar-hide'}>
        <AddScheduleAcademy />
        <h2 className={'body-16 mb-[13px]'}>{'일정 설정하기'}</h2>
        <AddScheduleTime />
        <Spacing size={20} />
        <AddScheduleMemo />
        <Spacing size={100} />
      </div>
      <Button
        style={{ position: 'absolute', left: 0, bottom: 0 }}
        buttonType={'Square'}
        fullWidth={true}
        label={'일정 등록 완료!'}
        onClick={() => {
          if (scheduleInfo.attendanceDate.endDateOfAttendance.length === 0) {
            setToast({
              comment: '첫 등월일과 마지막 등원일을 설정해주세요',
              type: 'warning'
            })
            return
          } else {
            postNewScheduleMutation.mutate(scheduleInfo)
          }
        }}
      />
    </div>
  )
}

export default NewSchedule
