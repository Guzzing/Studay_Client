import request from '@/libs/api'

export const logoutApi = async () => {
  try {
    const token = JSON.stringify(localStorage.getItem('token'))
    const req = await request.delete('/auth/logout', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (req.data.isLogout) {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
  } catch {
    throw new Error('Could not log out')
  }
}
