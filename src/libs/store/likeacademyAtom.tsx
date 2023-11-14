import { atom } from 'jotai'
import { GetLikeAcademyResponse } from '@/libs/api/likeacademy/LikeAcademyType'

const initialLikeAcademyAtom: GetLikeAcademyResponse = {
  likeAcademyInfo: [{ academyName: '', expectedFee: 0 }],
  totalFee: 0
}

export const likeAcademyAtom = atom(initialLikeAcademyAtom)
