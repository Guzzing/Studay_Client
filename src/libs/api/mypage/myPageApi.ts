import type { GetMyPageResponse } from './myPageType'
import request from '@/libs/api'

export const myPageApi = async (): Promise<GetMyPageResponse> => {
  try {
    const req = await request.get('http://3.114.43.57:8080/members')
    return req.data
  } catch {
    throw new Error('cannot get api from myPage')
  }
}
