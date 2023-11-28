import React from 'react'
import { CalenderType } from '../../../types/date.ts'
import { Holidays } from '@/libs/api/schedule/scheduleType.ts'

interface CalenderProps {
  calenderState: CalenderType
  setCalenderState: React.Dispatch<React.SetStateAction<CalenderType>>
  existenceDays: number[]
  holidays: Holidays[] | []
}

export default CalenderProps
