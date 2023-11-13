export interface LoginRequest {}

export interface LoginResponse {
  appToken: string
  isNewMember: boolean
  userId: number
  name: string
}
