import type {
  GetOnboardingResponse,
  PostOnboardingRequest
} from './onboardingType'
import { CreateChild } from './onboardingType'
import request from '@/libs/api'
export const onboardingApi = async (
  requestValue: PostOnboardingRequest
): Promise<GetOnboardingResponse> => {
  const req = await request.patch('/members', requestValue, {})
  return req.data
}

export const createChildApi = async ({ nickname, grade }: CreateChild) => {
  const req = await request.post(
    '/children',
    {
      nickname,
      grade
    },
    {}
  )
  return req.data
}
