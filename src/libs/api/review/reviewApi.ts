import request from '@/libs/api'
import { ReviewRequestType } from '@/libs/api/review/reviewType'
export const postReview = async (
  review: ReviewRequestType
): Promise<{ reviewId: number; academyId: number }> => {
  const res = await request.post(`/reviews`, review)
  return res.data
}
