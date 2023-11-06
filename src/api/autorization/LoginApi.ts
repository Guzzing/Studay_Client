import axios from 'axios'
import request from '..'
import { VITE_CLIENT_ID, VITE_CLIENT_SECRET } from '../../constants'

export const getCode = () => {
  const currentURL = window.location.href
  const params = new URLSearchParams(currentURL.split('?')[1])
  const code = params.get('code')
  return code as string
}

export const pushData = () => {
  const data = new URLSearchParams()
  data.append('grant_type', 'authorization_code')
  data.append('client_id', VITE_CLIENT_ID)
  data.append('redirect_uri', 'http://localhost:5173/login')
  data.append('code', getCode())
  data.append('client_secret', VITE_CLIENT_SECRET)

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

export const getAccessToken = async (kakaoAccessToken: string) => {
  try {
    const res = await axios.get('http://3.114.43.57:8080/auth/kakao', {
      headers: {
        Authorization: `Bearer ${kakaoAccessToken}`
      }
    })
    return res.data.appToken
  } catch {
    throw new Error('cannt get access token')
  }
}
