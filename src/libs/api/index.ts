import axios from 'axios'
// import { refreshApi } from './autorization/refresh/refreshApi'

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
  async (error) => {
    // 토큰이 이상할 때!
    const {
      // config,
      response: { status }
    } = error
    if (status === 403) {
      // console.log('토큰이 만료된거같아요!')
      // const newAccessToken = await refreshApi()
      // if (newAccessToken.appToken) {
      //   config.headers.Authorization = `Bearer ${newAccessToken.appToken}`
      // }
    } else {
      console.log('토큰 만료 안 됐어~!')
    }
    // async (error) => {
    //   throw error
    // }
  }
)

export default request
