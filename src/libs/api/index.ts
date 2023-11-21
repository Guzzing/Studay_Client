import axios from 'axios'
import { logoutApi } from './autorization/logout/LogoutApi'
import { refreshApi } from './autorization/refresh/refreshApi'

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
    } else window.location.href = `/login`
    return config
  },
  (error) => {
    console.error(error)
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  async (res) => {
    return res
  },
  async (error) => {
    if (error.response.status === 403) {
      try {
        const getRefreshToken = await refreshApi()
        const prevRequest = error.config
        prevRequest.headers.Authorization = `Bearer ${getRefreshToken.appToken}`
        return request(prevRequest)
      } catch {
        alert('로그인이 풀리셨습니다... 로그인을 다시 진행해주세요😁')
        await logoutApi()
        throw new Error('failed to request refresh token')
      }
    } else {
      console.log('다른 예외처리 진행!')
    }
  }
)

export default request
