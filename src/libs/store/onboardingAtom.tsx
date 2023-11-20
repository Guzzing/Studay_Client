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

export const onboardingPageData = atom(initialPageValuesAtom).init
export const initialCurPageNumber = atom(initialCurPage).init
export const isSubmit = atom(isSubmitToggle).init
