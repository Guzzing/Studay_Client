import axios from 'axios'
import { refreshApi } from './autorization/refresh/refreshApi'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  headers: {
    Accept: '*/*'
  }
})

// 모든 API요청을 보내기 전에 반드시 header에 토큰을 넣어서 보내야 함!
request.interceptors.request.use(
  (config) => {
    const curAccessToken = localStorage.getItem('token')
    if (curAccessToken) {
      config.headers['Authorization'] = `Bearer ${curAccessToken}`
      // 로그인 할 땐 header가 없기 때문에, 안 넣어서 보내도 돼!
    } else console.log('토큰 없음!')
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
  // 응답이 잘 오지 않았을 때! => 토큰 처리
  async (error) => {
    // 토큰이 이상할 때!
    const {
      config,
      response: { status }
    } = error
    if (status === 403) {
      const newAccessToken = await refreshApi()
      if (newAccessToken.appToken) {
        config.headers.Authorization = `Bearer ${newAccessToken.appToken}`
      }
    } else {
      console.log('토큰 만료 안 됐어~!')
    }
    throw error
  }
)

export default request
