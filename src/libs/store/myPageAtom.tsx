import { atom } from 'jotai'
import { GetMyPageResponse } from '@/libs/api/mypage/myPageType'

const initialMyPagesAtom: GetMyPageResponse = {
  nickname: '',
  email: '',
  childInformationResponses: [
    {
      childId: 0,
      childName: '',
      schedule: '휴식중입니다',
      childProfileImageUrl: ''
    }
  ]
}

export const myPageAtom = atom(initialMyPagesAtom)
