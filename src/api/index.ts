import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  headers: {
    Accept: '*/*',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzMTQ4MzYxNTc0Iiwicm9sZSI6IlJPTEVfVVNFUiIsIm1lbWJlcklkIjoxOCwiZXhwIjoxNjk5MTg1NjMzfQ.KC55SM2C3c4kzWmrozaK_adY3NzObXSujALCQsTIao4`
  }
})

request.interceptors.request.use(
  (config) => {
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
