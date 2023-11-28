import { atom } from 'jotai'
import { PostOnboardingRequest } from '../api/onboarding/onboardingType'

const initialPageValuesAtom = atom<PostOnboardingRequest>({
  nickname: '',
  email: '',
  children: [
    {
      nickname: '',
      grade: ''
    }
  ]
})

const initialCurPage = atom(0)
const isSubmitToggle = atom(false)
const toggleDone = atom(false)
const storage = atom<string[]>([])

export const onboardingPageDataAtom = atom(initialPageValuesAtom).init
export const initialCurPageNumberAtom = atom(initialCurPage).init
export const isSubmitAtom = atom(isSubmitToggle).init
export const isDoneAtom = atom(toggleDone).init
export const storeStorageAtom = atom(storage).init
