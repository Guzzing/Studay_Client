export interface CalendarPropsType {
  year: number
  month: number
}

export interface Holidays {
  date: string
  names: string[]
}
export interface CalendarResponse {
  holidays: Holidays[] | []
  existenceDays: number[]
}
