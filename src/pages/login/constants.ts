import {
  VITE_KAKAO_CLIENT_ID,
  VITE_REDIRECT_URL,
  VITE_CLIENT_GOOGLE_ID
} from '../../constants/env'
export const BUTTON_IMG_LINK = {
  kakao: '/img/kakao.png',
  google: '/img/google.png'
}

// 아직 로그인 링크 못 구함
export const LOGIN_LINK = {
  kakao: `https://kauth.kakao.com/oauth/authorize?client_id=${VITE_KAKAO_CLIENT_ID}&redirect_uri=${VITE_REDIRECT_URL}&response_type=code`,
  google: `https://accounts.google.com/o/oauth2/auth?
  response_type=code&
  client_id=${VITE_CLIENT_GOOGLE_ID}&
  redirect_uri=${VITE_REDIRECT_URL}&
  scope=openid%20email&
  state=YOUR_STATE_STRING&
  nonce=YOUR_NONCE_STRING`
}
