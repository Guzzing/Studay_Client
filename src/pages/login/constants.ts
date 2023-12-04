import { VITE_KAKAO_CLIENT_ID, VITE_REDIRECT_URL } from '../../constants/env'
export const BUTTON_IMG_LINK = {
  KAKAO: '/img/kakao.png'
}
export const LOGIN_LINK = {
  KAKAO: `https://kauth.kakao.com/oauth/authorize?client_id=${VITE_KAKAO_CLIENT_ID}&redirect_uri=${VITE_REDIRECT_URL}&response_type=code`
}
