import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  headers: {
    Accept: '*/*',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzMTQ2MzgyNTU5Iiwicm9sZSI6IlJPTEVfVVNFUiIsIm1lbWJlcklkIjo0LCJleHAiOjE2OTkyMDMwMTl9.jj91lLRPUwsyyFkKm6r9PnnFuwLa0RgGkLNRXlHYH1I`
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
