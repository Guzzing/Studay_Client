import request from '../index'
import { GetChildrenInfoResponse } from './ChildrenType'
export const getChildrenInfo = async (): Promise<GetChildrenInfoResponse[]> => {
  const res = await request.get('/children')
  return res.data.children
}
