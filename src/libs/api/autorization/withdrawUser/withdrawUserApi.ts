import request from '@/libs/api'

export const withdrawUserApi = async () => {
  try {
    await request.delete('/members')
    localStorage.removeItem('token')
    window.location.href = '/login'
  } catch {
    throw new Error(`Failed to request withdraw user api`)
  }
}
