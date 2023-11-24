import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import Button from '@/components/common/button/Button'
import ListRowSelect from '@/components/common/listRowSelect/ListRowSelect'
import Spacing from '@/components/common/spacing/Spacing'
import { postScheduleApi } from '@/libs/api/schedule/scheduleApi'
import { PostScheduleType } from '@/libs/api/schedule/scheduleType'
import { scheduleAtom } from '@/libs/store/scheduleInfo'
import AddScheduleAcademy from '@/pages/schedule/new/AddScheduleAcademy'
import AddScheduleMemo from '@/pages/schedule/new/AddScheduleMemo'
import AddScheduleTime from '@/pages/schedule/new/AddScheduleTime'

const NewSchedule = () => {
  const navigate = useNavigate()
  const [scheduleInfo, setScheduleInfo] = useAtom(scheduleAtom)
  const postNewScheduleMutation = useMutation({
    onSuccess: () => {
      alert('일정 생성 완료!')
      navigate('/schedule')
    },
    mutationFn: (scheduleInfo: PostScheduleType) =>
      postScheduleApi(scheduleInfo)
  })
  return (
    <div className={'flex flex-col px-[20px] relative w-full h-full'}>
      <AddScheduleAcademy />
      <h2 className={'body-16 mb-[13px]'}>{'일정 설정하기'}</h2>
      <AddScheduleTime />
      <ListRowSelect
        title={'알림'}
        options={['없음', '하루 전']}
        values={[0, 1]}
        selecttype={'Single'}
        onChange={(e) => {
          if (Number.parseInt(e.target.value, 10) === 0) {
            setScheduleInfo({ ...scheduleInfo, isAlarmed: false })
          } else {
            setScheduleInfo({ ...scheduleInfo, isAlarmed: true })
          }
        }}
      />
      <Spacing size={20} />
      <AddScheduleMemo />
      <Button
        style={{ position: 'absolute', bottom: 0 }}
        buttonType={'Square'}
        label={'일정 등록 완료!'}
        onClick={() => {
          postNewScheduleMutation.mutate(scheduleInfo)
        }}
      />
    </div>
  )
}

export default NewSchedule
