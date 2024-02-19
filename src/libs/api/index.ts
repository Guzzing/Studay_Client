import axios from 'axios'
import { setItem } from '../utils/storage'
import { logoutApi } from './autorization/logout/LogoutApi'
import { refreshApi } from './autorization/refresh/refreshApi'
import useToastify from '@/libs/hooks/useToastify'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  headers: {
    Accept: '*/*'
  }
})

request.interceptors.request.use(
  (config) => {
    const curAccessToken = localStorage.getItem('token')
    if (curAccessToken) {
      config.headers['Authorization'] = `Bearer ${curAccessToken}`
    } else if (!window.location.href.includes('/login')) {
      window.location.href = '/login'
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  async (res) => {
    return res
  },
  async (error) => {
    if (!error.config.retryCount) {
      // 요청에 재시도 횟수를 추적하는 속성이 없으면 초기화
      error.config.retryCount = 0
    }

    if (error.response.status === 403) {
      const { setToast } = useToastify()

      try {
        error.config.retryCount += 1
        if (error.config.retryCount >= 3) {
          throw new Error('예외 발생!')
        }
        const getRefreshToken = await refreshApi()
        const prevRequest = error.config
        prevRequest.headers.Authorization = `Bearer ${getRefreshToken.appToken}`
        setItem('token', getRefreshToken.appToken)
        return request(prevRequest)
      } catch {
        if (error.config.retryCount >= 3) {
          window.location.href = '/login'
          localStorage.removeItem('token')
        } else {
          setToast({
            comment: '로그인을 다시 진행해주세요.',
            type: 'info'
          })
          await logoutApi()
          throw new Error('failed to request refresh token')
        }
      }
    }
  }
)

export default request
