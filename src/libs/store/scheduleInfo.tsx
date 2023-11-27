import { atom } from 'jotai'
import { PostScheduleType } from '@/libs/api/schedule/scheduleType'
import { getFormattingDate } from '@/libs/utils/dateParse'

const initialChildAtom: PostScheduleType = {
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

export const scheduleAtom = atom(initialChildAtom)
