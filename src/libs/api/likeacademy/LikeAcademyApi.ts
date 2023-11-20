import type { GetLikeAcademyResponse } from './LikeAcademyType'
import request from '@/libs/api'
export const getLikeAcademyApi = async (): Promise<GetLikeAcademyResponse> => {
  try {
    const res = await request.get('/likes')
    return res.data
  } catch {
    throw new Error(`Failed to request likeAcademy api`)
  }
}

// id받음
export const deleteLikeAcademyApi = async (academyId: number) => {
  try {
    const res = await request.delete(`/likes/${academyId}`)
    return res.data
  } catch {
    throw new Error('Failed to call delete likeAcademy api')
  }
}
