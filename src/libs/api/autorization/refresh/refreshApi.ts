import type { RefreshResponse } from './refreshType'
import request from '@/libs/api'

export const refreshApi = async (): Promise<RefreshResponse> => {
  const prevAccessToken = JSON.stringify(localStorage.getItem('token'))
  try {
    const res = await request.post(
      '/auth/refresh',
      {},
      {
        headers: {
          Authorization: `Bearer ${prevAccessToken}`
        }
      }
    )
    return res.data
  } catch {
    throw new Error(`Failed to catch refresh token`)
  }
}
