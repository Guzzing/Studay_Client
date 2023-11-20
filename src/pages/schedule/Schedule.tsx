import { useState } from 'react'
import { CalenderType } from '../../types/date.ts'
import Calender from '@/components/common/calender/Calender.tsx'
import Spacing from '@/components/common/spacing/Spacing.tsx'
import { defaultDate } from '@/libs/utils/date.ts'

const Schedule = () => {
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
  )
}
export default Schedule
