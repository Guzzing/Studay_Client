import request from '../index'
export const getChildrenInfo = async () => {
  const res = await request.get('/children')
  console.log(res.data)
  return res.data
}
