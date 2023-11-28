import type { LoginResponse } from './LoginType'
import {
  VITE_KAKAO_CLIENT_ID,
  VITE_KAKAO_CLIENT_SECRET_KEY,
  VITE_REDIRECT_URL
} from '../../../constants'
import request from '@/libs/api'

export const getCode = () => {
  const currentURL = window.location.href
  if (currentURL.includes('access_token')) {
    const params = new URLSearchParams(currentURL.split('#')[1])
    const accessToken = params.get('access_token')
    return { accessToken: accessToken as string, method: 'google' }
  } else if (currentURL.includes('code')) {
    const params = new URLSearchParams(currentURL.split('?')[1])
    const code = params.get('code')
    return { code: code as string, method: 'kakao' }
  } else return
}

export const pushData = () => {
  const data = new URLSearchParams()
  data.append('grant_type', 'authorization_code')
  data.append('client_id', VITE_KAKAO_CLIENT_ID)
  data.append('redirect_uri', VITE_REDIRECT_URL)

  data.append('code', getCode()?.code as string)
  data.append('client_secret', VITE_KAKAO_CLIENT_SECRET_KEY)

  return data
}
export const getKaKaoAccessToken = async (data: URLSearchParams) => {
  try {
    const res = await request.post(
      'https://kauth.kakao.com/oauth/token',
      data,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }
    )
    return res.data.access_token
  } catch {
    throw new Error('cannot get kakao access token!')
  }
}

export const getAccessToken = async (
  accessToken: string,
  variant: string
): Promise<LoginResponse> => {
  try {
    const res = await request.post(
      `/auth/${variant}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    )
    if (res.data) {
      localStorage.setItem('token', res.data.appToken)
      const { isNewMember } = res.data
      window.location.href = isNewMember ? '/onboarding' : '/'
    }

    return res.data
  } catch {
    throw new Error('cannot get access token')
  }
}
