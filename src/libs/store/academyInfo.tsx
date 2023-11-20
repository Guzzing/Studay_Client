import { atom } from 'jotai'
import { atomFamily } from 'jotai/utils'
import {
  AcademyInfoRequest,
  TempAcademyScheduleType,
  AcademyScheduleType
} from '@/libs/api/academy/AcademyType'

const initialAcademyInfoAtom: AcademyInfoRequest = {
  academyId: 0,
  childId: 0,
  lessonId: 747,
  schedules: [],
  paymentInfo: {
    educationFee: 0,
    bookFee: 0,
    shuttleFee: 0,
    etcFee: 0,
    paymentDay: ''
  },
  simpleMemo: {
    kindness: false,
    facility: false,
    price: false,
    management: false,
    love: false,
    shttule: false
  }
}

const initialSchedulesInfoAtom: TempAcademyScheduleType = {
  weekArray: [],
  startTime: '',
  endTime: ''
}

export const academyInfoAtom = atom(initialAcademyInfoAtom)
export const schedulesAtom = atom(initialSchedulesInfoAtom)

export const academyTimeFamily = atomFamily(
  (name: keyof Pick<AcademyInfoRequest, 'schedules'>) =>
    atom(
      (get) => get(academyInfoAtom)[name],
      (get, set, arg: AcademyScheduleType[]) => {
        const prev = get(academyInfoAtom)
        set(academyInfoAtom, {
          ...prev,
          [name]: [...prev[name], ...arg]
        })
      }
    )
)
