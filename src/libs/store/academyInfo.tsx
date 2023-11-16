import { atom } from 'jotai'
import { atomFamily } from 'jotai/utils'
import {
  AcademyInfoRequest,
  TempAcademyScheduleType
} from '@/libs/api/academy/AcademyType'

const initialAcademyInfoAtom: AcademyInfoRequest = {
  academyId: 0,
  childId: 0,
  lessonId: 0,
  schedules: [],
  paymentInfo: {
    educationFee: 0,
    bookFee: 0,
    shuttleFee: 0,
    etcFee: 0,
    paymentDay: 0
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
  endTime: '',
  repeatance: 'NONE'
}

export const academyInfoAtom = atom(initialAcademyInfoAtom)
export const schedulesAtom = atom(initialSchedulesInfoAtom)

export const academyTimeFamily = atomFamily(
  (
    name: keyof Pick<
      AcademyInfoRequest,
      'paymentInfo' | 'schedules' | 'simpleMemo'
    >
  ) =>
    atom(
      (get) => get(academyInfoAtom)[name],
      (get, set, arg: object) => {
        const prev = get(academyInfoAtom)
        if (name === 'schedules') {
          if (Object.keys(arg).includes('0')) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const strArr = Object.keys(arg).map((item) => arg[item])
            set(academyInfoAtom, {
              ...prev,
              [name]: [...prev[name], ...strArr]
            })
          } else {
            set(academyInfoAtom, {
              ...prev,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              [name]: [...prev[name], arg]
            })
          }
        } else {
          set(academyInfoAtom, {
            ...prev,
            [name]: { ...prev[name], ...arg }
          })
        }
      }
    )
)
