import { atom } from 'jotai'
import { atomFamily } from 'jotai/utils'
import {
  AcademyInfoRequest,
  TempAcademyScheduleType,
  AcademyScheduleType
} from '@/libs/api/academy/AcademyType'

export const initialAcademyInfoAtom: AcademyInfoRequest = {
  academyId: 0,
  childId: 0,
  lessonId: 0,
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
    goodFacility: false,
    cheapFee: false,
    goodManagement: false,
    lovelyTeaching: false,
    shuttleAvailability: false
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
