import request from '@/libs/api'
import {
  CalendarDayPropsType,
  CalendarPropsType,
  CalendarResponse,
  DayScheduleResponse
} from '@/libs/api/schedule/scheduleType.ts'

export const getMonthScheduleAll = async ({
  year,
  month
}: CalendarPropsType): Promise<CalendarResponse> => {
  const res = await request.get(`/calendar/mark?year=${year}&month=${month}`)
  return res.data
}

export const getDaySchedule = async ({
  year,
  month,
  day
}: CalendarDayPropsType): Promise<DayScheduleResponse> => {
  const dayData = day > 9 ? day : `0${day}`
  const res = await request.get(
    `/calendar/date?date=${year}-${month}-${dayData}`
  )
  console.log(res)
  // return res.data
  return {
    date: '2023-11-01',
    dateResponses: [
      {
        startTime: '08:00',
        schedules: [
          {
            lessonId: 101,
            academyName: 'Academy A',
            lessonName: 'Math',
            endTime: '09:00',
            overlappingSchedules: [
              {
                scheduleId: 1001,
                childId: 161,
                childImageUrl: 'https://chanwookim.me/agumon-dday/agumon.png',
                isRepeatable: true
              },
              {
                scheduleId: 1002,
                childId: 162,
                childImageUrl: 'https://chanwookim.me/agumon-dday/agumon.png',
                isRepeatable: false
              }
            ]
          }
        ]
      }
    ]
  }
}

export const deleteSchedule = async ({
  scheduleId
}: {
  scheduleId: number
}) => {
  const res = await request.delete(`/academy-schedules/${scheduleId}`)
  return res.data
}
