import { useNavigate } from 'react-router-dom'
import Profile from '@/components/common/profile/Profile.tsx'
import { OverlappingScheduleType } from '@/libs/api/schedule/scheduleType.ts'
import { HandlerScheduleProps } from '@/pages/schedule/scheduleType.ts'

const ScheduleModal = ({
  childSchedule,
  mainTitle,
  date,
  lessonId
}: HandlerScheduleProps) => {
  const navigate = useNavigate()

  const selectChild = (childInfo: OverlappingScheduleType) => {
    navigate(
      `/schedule/detail?date=${date}&scheduleId=${childInfo.scheduleId}&lessonId=${lessonId}&child=${childInfo.childId}`
    )
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
