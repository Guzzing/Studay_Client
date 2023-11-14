import type { LikeAcademyResponse } from './LikeAcademyType'
import request from '@/libs/api'
export const likeAcademyApi = async (): Promise<LikeAcademyResponse> => {
  try {
    const res = await request.get('http://3.114.43.57:8080/likes')
    console.log('찜한 학원 데이터 받아옴 >>', res.data)
    return res.data
  } catch {
    throw new Error(`Failed to request likeAcademy api`)
  }
}
