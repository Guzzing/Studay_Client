import { atom } from 'jotai'
import { PostScheduleType } from '@/libs/api/schedule/scheduleType'
import { getFormattingDate } from '@/libs/utils/dateParse'

export const initialScheduleAtom: PostScheduleType = {
  lessonScheduleCreateRequests: [],
  attendanceDate: {
    startDateOfAttendance: getFormattingDate(new Date()),
    endDateOfAttendance: ''
  },
  isAlarmed: true,
  periodicity: 'WEEKLY',
  childId: 0,
  dashboardId: 0,
  memo: ''
}

export const scheduleAtom = atom(initialScheduleAtom)
