import { atom } from 'jotai'
import { GetMyPageResponse } from '@/libs/api/mypage/myPageType'

const initialMyPagesAtom: GetMyPageResponse = {
  nickname: '',
  email: '',
  children: [
    {
      childId: 0,
      childname: '',
      profile: '',
      schedule: ''
    }
  ]
}

export const myPageAtom = atom(initialMyPagesAtom)
