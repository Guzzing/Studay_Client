import type { GetLikeAcademyResponse } from './LikeAcademyType'
import request from '@/libs/api'
export const getLikeAcademyApi = async (): Promise<GetLikeAcademyResponse> => {
  try {
    const res = await request.get('http://3.114.43.57:8080/likes')
    console.log('찜한 학원 데이터 받아옴 >>', res.data)
    return res.data
  } catch {
    throw new Error(`Failed to request likeAcademy api`)
  }
}

// id받음
export const deleteLikeAcademyApi = async (academyId: number) => {
  try {
    const res = await request.delete(
      `http://3.114.43.57:8080/likes/${academyId}`
    )
    console.log('삭제한 학원 >>', res.data)
  } catch {
    throw new Error('Failed to call delete likeAcademy api')
  }
}
