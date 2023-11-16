import type {
  GetOnboardingResponse,
  PostOnboardingRequest
} from './onboardingType'
import request from '@/libs/api'

export const onboardingApi = async (
  requestValue: PostOnboardingRequest
): Promise<GetOnboardingResponse> => {
  const req = await request.patch(
    'http://3.114.43.57:8080/members',
    requestValue,
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzMTQ2MzgyNTU5Iiwicm9sZSI6IlJPTEVfVVNFUiIsIm1lbWJlcklkIjo0LCJleHAiOjEwMzM5MTk4NDE5fQ.f4_QlKQAdHiph9ZWhSSJ9kpGgXMklR2S-O3aCOXmr5o`
      }
    }
  )

  console.log('id >>', req.data)
  return req.data
}
