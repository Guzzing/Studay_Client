import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CalenderType } from '../../types/date.ts'
import Calender from '@/components/common/calender/Calender.tsx'
import Icon from '@/components/common/icon/Icon.tsx'
import ScheduleBox from '@/components/common/scheduleBox/ScheduleBox.tsx'
import Spacing from '@/components/common/spacing/Spacing.tsx'
import { defaultDate } from '@/libs/utils/date.ts'

const Schedule = () => {
  const navigate = useNavigate()
  const [defaultYear, defaultMonth, defaultDays, days] = defaultDate()
  const [calenderState, setCalenderState] = useState<CalenderType>({
    nowYear: defaultYear,
    nowMonth: defaultMonth,
    nowDays: defaultDays,
    toDay: days
  })

  return (
    <div className={'flex flex-col w-full h-full'}>
      <Spacing size={80} />
      <div className={'h-auto'}>
        <Calender
          onClick={() => console.log('asd')}
          calenderState={calenderState}
          setCalenderState={setCalenderState}
          existenceDays={[1, 3, 5, 15, 21, 28]}
          holidays={[
            {
              date: '2023-05-01',
              names: ['Labor Day']
            },
            {
              date: '2023-05-15',
              names: ['National Holiday']
            }
          ]}
        />
      </div>
      <div className={'flex flex-col overflow-y-auto h-1/3'}>
        <div className={'flex flex-row justify-center items-center'}>
          <span className={'w-[70px] body-14'}>{'오후 2시'}</span>
          <div
            className={'w-full h-[1px] border border-dashed border-t-black-800'}
          />
        </div>
        <div className={'flex mb-[16px] justify-center items-center'}>
          <ScheduleBox
            scheduleType={'profile'}
            mainTitle={'닥스 어학원 - 청포도두개'}
            subElement={'오후 4시에 종료'}
          />
        </div>
        <div className={'flex mb-[16px] justify-center items-center'}>
          <ScheduleBox
            scheduleType={'profile'}
            mainTitle={'닥스 어학원 - 청포도두개'}
            subElement={'오후 4시에 종료'}
          />
        </div>
      </div>
      <Icon
        icon={'Add'}
        classStyle={
          'cursor-pointer absolute left-[85%] top-[80%] w-[60px] h-[60px]'
        }
        onClick={() => navigate('/schedule/new')}
      />
    </div>
  )
}
export default Schedule
