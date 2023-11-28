import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { CalenderType } from '../../types/date.ts'
import Calender from '@/components/common/calender/Calender.tsx'
import Icon from '@/components/common/icon/Icon.tsx'
import Profile from '@/components/common/profile/Profile.tsx'
import ScheduleProfileBox from '@/components/common/scheduleProfileBox/ScheduleProfileBox.tsx'
import Spacing from '@/components/common/spacing/Spacing.tsx'
import ScheduleModal from '@/components/schedule/scheduleModal/ScheduleModal.tsx'
import {
  getDaySchedule,
  getMonthScheduleAll
} from '@/libs/api/schedule/scheduleApi.ts'
import useModal from '@/libs/hooks/useModal.tsx'
import { convertTo12HourFormat, defaultDate } from '@/libs/utils/date.ts'
import { HandlerScheduleProps } from '@/pages/schedule/scheduleType.ts'

const Schedule = () => {
  const navigate = useNavigate()
  const [defaultYear, defaultMonth, defaultDays, days] = useMemo(
    () => [...defaultDate()],
    []
  )
  const [calenderState, setCalenderState] = useState<CalenderType>({
    nowYear: defaultYear,
    nowMonth: defaultMonth,
    nowDays: defaultDays,
    toDay: days
  })
  const [modalState, setModalState] = useState<HandlerScheduleProps>({
    childSchedule: [],
    modalType: '',
    mainTitle: '',
    date: '',
    lessonId: null
  })
  const { Modal, open } = useModal()
  const { data: monthSchedule } = useQuery({
    queryKey: ['monthSchedule', calenderState.nowYear, calenderState.nowMonth],
    queryFn: () =>
      getMonthScheduleAll({
        year: calenderState.nowYear,
        month: calenderState.nowMonth
      })
  })
  const { data: scheduleData } = useQuery({
    queryKey: ['scheduleData', calenderState.toDay],
    queryFn: () =>
      getDaySchedule({
        year: calenderState.nowYear,
        month: calenderState.nowMonth,
        day: calenderState.toDay
      }),
    enabled: !!monthSchedule?.existenceDays.includes(calenderState.toDay)
  })

  const handlerScheduleProfileClick = ({
    childSchedule,
    modalType,
    mainTitle,
    date,
    lessonId
  }: HandlerScheduleProps) => {
    setModalState(() => ({
      childSchedule: childSchedule,
      modalType: modalType,
      mainTitle: mainTitle,
      date: date,
      lessonId: lessonId
    }))
    open()
  }

  return (
    <div className={'flex flex-col w-full h-full'}>
      <Spacing size={80} />
      <div className={'h-auto'}>
        <Calender
          calenderState={calenderState}
          setCalenderState={setCalenderState}
          existenceDays={monthSchedule?.existenceDays || []}
          holidays={monthSchedule?.holidays || []}
        />
      </div>
      <div className={'flex flex-col overflow-y-auto h-1/3'}>
        {scheduleData &&
          scheduleData.dateResponses.map((data, index) => (
            <>
              <div
                className={'flex flex-row justify-center items-center'}
                key={`${index}-schedule`}>
                <span className={'w-[70px] body-14 ml-[5px]'}>
                  {convertTo12HourFormat(data.startTime)}
                </span>
                <div
                  className={
                    'w-full h-[1px] border border-dashed border-t-black-800'
                  }
                />
              </div>
              {data.schedules.map((schedule, index) => (
                <div
                  key={`${index}-Box`}
                  className={'flex mb-[16px] justify-center items-center'}>
                  <ScheduleProfileBox
                    mainTitle={`${schedule.academyName} - ${schedule.lessonName}`}
                    handleEdit={() =>
                      handlerScheduleProfileClick({
                        childSchedule: schedule.overlappingSchedules,
                        modalType: 'edit',
                        mainTitle: '어떤 아이의 스케줄을 수정하시겠습니까?',
                        date: scheduleData.date,
                        lessonId: schedule.lessonId
                      })
                    }
                    handleDelete={() =>
                      handlerScheduleProfileClick({
                        childSchedule: schedule.overlappingSchedules,
                        modalType: 'delete',
                        mainTitle: '어떤 아이의 스케줄을 삭제하시겠습니까?',
                        date: scheduleData.date,
                        lessonId: schedule.lessonId
                      })
                    }
                    handleDetail={() =>
                      handlerScheduleProfileClick({
                        childSchedule: schedule.overlappingSchedules,
                        modalType: 'detail',
                        mainTitle: '어떤 아이의 스케줄 정보를 확인할까요?',
                        date: scheduleData.date,
                        lessonId: schedule.lessonId
                      })
                    }
                    subTitle={`${convertTo12HourFormat(
                      schedule.endTIme
                    )} 에 종료`}>
                    {schedule.overlappingSchedules.map((child, index) => (
                      <div className={'mx-[3px]'} key={`${index}-profile`}>
                        <Profile
                          imageSize={'S'}
                          imageUrl={child.childImageUrl}
                        />
                      </div>
                    ))}
                  </ScheduleProfileBox>
                </div>
              ))}
            </>
          ))}
      </div>
      <Icon
        icon={'Add'}
        classStyle={
          'cursor-pointer absolute left-[85%] top-[80%] w-[60px] h-[60px]'
        }
        onClick={() => navigate('/schedule/new')}
      />
      <Modal>
        <ScheduleModal
          mainTitle={modalState.mainTitle}
          childSchedule={modalState.childSchedule}
          modalType={modalState.modalType}
          date={modalState.date}
          lessonId={modalState.lessonId}
          close={close}
        />
      </Modal>
    </div>
  )
}
export default Schedule
