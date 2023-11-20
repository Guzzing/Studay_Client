import { atom } from 'jotai'
import { GetLikeAcademyResponse } from '@/libs/api/likeacademy/LikeAcademyType'

const initialLikeAcademyAtom: GetLikeAcademyResponse = {
  likeAcademyInfos: [
    { likeId: 0, academyId: 0, academyName: '', expectedFee: 0 }
  ],
  totalFee: 0
}

const total = 0
const checkGroup: boolean[] = []

export const totalAtom = atom(total)
export const checkGroupAtom = atom(checkGroup)
export const likeAcademyAtom = atom(initialLikeAcademyAtom)
