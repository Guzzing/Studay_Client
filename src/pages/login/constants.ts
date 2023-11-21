import {
  VITE_KAKAO_CLIENT_ID,
  VITE_REDIRECT_URL,
  VITE_GOOGLE_CLIENT_ID
} from '../../constants/env'
export const BUTTON_IMG_LINK = {
  KAKAO: '/img/kakao.png',
  GOOGLE: '/img/google.png'
}
export const LOGIN_LINK = {
  KAKAO: `https://kauth.kakao.com/oauth/authorize?client_id=${VITE_KAKAO_CLIENT_ID}&redirect_uri=${VITE_REDIRECT_URL}&response_type=code`,
  GOOGLE: `https://accounts.google.com/o/oauth2/v2/auth?response_type=token&scope=email%20profile&client_id=${VITE_GOOGLE_CLIENT_ID}&redirect_uri=${VITE_REDIRECT_URL}`
}
