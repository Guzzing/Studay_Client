import type { GetMyPageResponse } from './myPageType'
import request from '@/libs/api'

export const getAllUserInfo = async (): Promise<GetMyPageResponse> => {
  try {
    const req = await request.get('/members')
    return req.data
  } catch {
    throw new Error('cannot get api from myPage')
  }
}
