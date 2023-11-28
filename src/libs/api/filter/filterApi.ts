import request from '@/libs/api'

export const getAcademyFilter = async ({
  queryString
}: {
  queryString: string
}) => {
  const res = await request.get(`/academies/filter${queryString}`)
  return res.data
}
// console.log('call~')
