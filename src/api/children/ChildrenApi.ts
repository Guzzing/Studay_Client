import request from '../index'
export const getChildrenInfo = async () => {
  const res = await request.get('/children')
  return res.data
}
