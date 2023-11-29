import { atom } from 'jotai'
import { GetLikeAcademyResponse } from '@/libs/api/likeacademy/LikeAcademyType'

const initialLikeAcademyAtom: GetLikeAcademyResponse = {
  likeAcademyInfos: [],
  totalFee: 0
}

const total = 0
const checkGroup: boolean[] = []

export const totalAtom = atom(total)
export const checkGroupAtom = atom(checkGroup)
export const likeAcademyAtom = atom(initialLikeAcademyAtom)

// onChange로직 다시
// 아이 이름 입력 시 특수문자 => 에러메시지 거르자
// 디폴트 이미지 =>
