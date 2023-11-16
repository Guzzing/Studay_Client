import request from '@/libs/api'

export const academyFilter = async ({
  lat,
  lng,
  areaOfExpertises,
  desiredMinAmount,
  desiredMaxAmount
}) => {
  let param = `lat=${lat}&lng=${lng}&areaOfExpertises=${areaOfExpertises}`
  if (desiredMinAmount && desiredMaxAmount)
    param += `&desiredMinAmount=${desiredMinAmount}&desiredMinAmount=${desiredMaxAmount}`
  const res = await request.get(`/academies/filter?${param}`)
  return res.data
}
