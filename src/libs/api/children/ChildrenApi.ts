import request from '../index'
import { EditChildInfoRequest, GetChildrenInfoResponse } from './ChildrenType'

export const getChildrenInfo = async (): Promise<GetChildrenInfoResponse[]> => {
  const res = await request.get('/children')
  return res.data.children
}

export const editChildInfo = async (
  payload: EditChildInfoRequest
): Promise<{ childID: number }> => {
  const res = await request.patch(`/children/${payload.childId}`, {
    nickname: payload.nickname,
    grade: payload.grade
  })
  return res.data
}

export const deleteChild = async (childId: number) => {
  const res = await request.delete(`/children/${childId}`)
  return res.data
}
