import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  headers: {
    Accept: '*/*',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzMTQ4MzYxNTc0Iiwicm9sZSI6IlJPTEVfVVNFUiIsIm1lbWJlcklkIjo1LCJleHAiOjEwMzM5MjA4ODQzfQ.6BGk8IBzQJVkox78C3_dnnTKKxqj5MejKvdUFYgafO4`
  }
})

request.interceptors.request.use(
  (config) => {
    const curAccessToken = localStorage.getItem('token')
    if (curAccessToken) {
      config.headers['Authorization'] = `Bearer ${curAccessToken}`
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
