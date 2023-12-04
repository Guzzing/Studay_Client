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
    if (error.response.status === 403) {
      const { setToast } = useToastify()
      try {
        const getRefreshToken = await refreshApi()
        const prevRequest = error.config
        prevRequest.headers.Authorization = `Bearer ${getRefreshToken.appToken}`
        setItem('token', getRefreshToken.appToken)
        return request(prevRequest)
      } catch {
        setToast({
          comment: '로그인을 다시 진행해주세요.',
          type: 'info'
        })
        await logoutApi()
        throw new Error('failed to request refresh token')
      }
    }
  }
)

export default request
