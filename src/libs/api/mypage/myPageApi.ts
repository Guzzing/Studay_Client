import type { MyPageResponse } from './myPageType'
import request from '@/libs/api'

export const myPageApi = async (): Promise<MyPageResponse> => {
  try {
    const userId = localStorage.getItem('userId')
    const req = await request.get('http://3.114.43.57:8080/members/mypage', {
      params: {
        userId: Number(userId)
      }
    })
    console.log(req)
    return req.data
  } catch {
    throw new Error('cannot get api from myPage')
  }
}
