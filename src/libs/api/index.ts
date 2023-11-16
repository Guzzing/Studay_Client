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
    config.headers[
      'Authorization'
    ] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzMTQ2MzgyNTU5Iiwicm9sZSI6IlJPTEVfVVNFUiIsIm1lbWJlcklkIjo0LCJleHAiOjE3MDAyMDY3MzN9.S7dELKbPbPXcBigYQH4OKesg6R0rLngk5xzyBwSXjd8`
    if (curAccessToken) {
      //   config.headers[
      //     'Authorization'
      //   ] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzMTQ4MzYxNTc0Iiwicm9sZSI6IlJPTEVfVVNFUiIsIm1lbWJlcklkIjoxLCJleHAiOjE3MDAwMzUxODV9.9eIPZ_oX8sBw4WZe2hk9B3aPLT8MVFRsjfktvqVTEF8`
      // }
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
