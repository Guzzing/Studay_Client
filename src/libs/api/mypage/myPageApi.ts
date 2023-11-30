import type { GetMyPageResponse } from './myPageType'
import request from '@/libs/api'

export const getAllUserInfo = async (): Promise<GetMyPageResponse> => {
  try {
    const myPageData = await request.get('/members')
    return myPageData.data
  } catch {
    throw new Error('cannot get api from myPage')
  }
}
