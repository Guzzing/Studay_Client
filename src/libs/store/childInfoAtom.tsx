import { atom } from 'jotai'
import { GetChildrenInfoResponse } from '@/libs/api/children/ChildrenType'

const initialChildAtom: GetChildrenInfoResponse = {
  childId: 0,
  nickname: '',
  grade: '',
  schedule: '',
  profileImageUrl: ''
}

export const childAtom = atom(initialChildAtom)
