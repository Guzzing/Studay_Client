import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import Profile from '@/components/common/profile/Profile.tsx'
import { queryClient } from '@/libs/api/queryClient.ts'
import { deleteSchedule } from '@/libs/api/schedule/scheduleApi.ts'
import { OverlappingScheduleType } from '@/libs/api/schedule/scheduleType.ts'
import { ScheduleModalProps } from '@/pages/schedule/scheduleType.ts'

const ScheduleModal = ({
  childSchedule,
  mainTitle,
  modalType,
  date,
  lessonId,
  close
}: ScheduleModalProps) => {
  const navigate = useNavigate()
  const { mutate } = useMutation({
    mutationFn: (scheduleId: number) =>
      deleteSchedule({ scheduleId: scheduleId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['scheduleId'] })
      close()
    }
  })

  const selectChild = (childInfo: OverlappingScheduleType) => {
    if (modalType === 'edit') {
      console.log(childInfo)

      // navigate(`/schedule/${childInfo.scheduleId}/edit`)
    } else if (modalType === 'delete') {
      mutate(childInfo.scheduleId)
    } else {
      navigate(
        `/schedule?date=${date}&scheduleId=${childInfo.scheduleId}&lessonId=${lessonId}&child=${childInfo.childId}`
      )
    }
  }

  return (
    <div
      className={
        'w-[339px] h-[207px] flex flex-col justify-center items-center bg-white-0 rounded-[15px]'
      }>
      <span
        className={
          'subHead-18 w-full h-[20%] mt-[26px] ml-[36px] text-left mb-[10px]'
        }>
        {mainTitle}
      </span>
      <div
        className={
          'w-full h-full grid grid-cols-4 justify-center justify-items-center'
        }>
        {childSchedule &&
          childSchedule.map((child, index) => (
            <Profile
              key={index}
              imageSize={'M'}
              imageUrl={child.childImageUrl}
              profileSize={50}
              canEdit={true}
              onClick={() => selectChild(child)}
            />
          ))}
      </div>
    </div>
  )
}

export default ScheduleModal
