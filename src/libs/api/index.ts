import axios from 'axios'

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
      config.headers[
        'Authorization'
      ] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzMTM2MzQ4MDMzIiwicm9sZSI6IlJPTEVfVVNFUiIsIm1lbWJlcklkIjoxLCJleHAiOjEwMzM5MzQ0ODMwfQ.U4TatitwBf8o_yw5h2RHjf4DpeRTJ4HsGM24_plrsmY`
    }
    return config
  },
  (error) => {
    console.error(error)
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (res) => {
    return res
  },
  (error) => {
    console.error(error)
    return Promise.reject(error)
  }
)

export default request
