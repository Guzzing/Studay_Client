import request from '.'

interface Request {
  nickname: string
  email: string
  children: {
    nickname: string
    grade: string
  }[]
}
const curAccessToken = localStorage.getItem('token')

export const onboarding = async (requestValue: Request) => {
  const req = await request.patch(
    'http://3.114.43.57:8080/members',
    requestValue,
    {
      headers: {
        Authorization: `Bearer ${curAccessToken}`
      }
    }
  )

  return req.data
}
