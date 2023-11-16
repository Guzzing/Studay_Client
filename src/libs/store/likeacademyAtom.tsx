import { atom } from 'jotai'
import { GetLikeAcademyResponse } from '@/libs/api/likeacademy/LikeAcademyType'

const initialLikeAcademyAtom: GetLikeAcademyResponse = {
  likeAcademyInfo: [{ academyName: '', expectedFee: 0 }],
  totalFee: 0
}
const initialLikeAcademyCheckBox = [
  Array.from({ length: initialLikeAcademyAtom.likeAcademyInfo.length }).fill(
    true
  )
]

export const likeAcademyAtom = atom(initialLikeAcademyAtom)
export const likeAcademyCheckBoxAtom = atom(initialLikeAcademyCheckBox)
