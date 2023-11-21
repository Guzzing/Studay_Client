import {
  VITE_KAKAO_CLIENT_ID,
  VITE_REDIRECT_URL,
  VITE_GOOGLE_CLIENT_ID
} from '../../constants/env'
export const BUTTON_IMG_LINK = {
  kakao: '/img/kakao.png',
  google: '/img/google.png'
}

// 아직 로그인 링크 못 구함
export const LOGIN_LINK = {
  kakao: `https://kauth.kakao.com/oauth/authorize?client_id=${VITE_KAKAO_CLIENT_ID}&redirect_uri=${VITE_REDIRECT_URL}&response_type=code`,
  google: `https://accounts.google.com/o/oauth2/v2/auth?response_type=token&scope=email%20profile&client_id=${VITE_GOOGLE_CLIENT_ID}&redirect_uri=${VITE_REDIRECT_URL}`
}
