import {
  VITE_KAKAO_CLIENT_ID,
  VITE_REDIRECT_URL,
  VITE_CLIENT_GOOGLE_ID
} from '../../constants/env'
export const BUTTON_IMG_LINK = {
  kakao:
    'https://s3-alpha-sig.figma.com/img/bf52/65e1/2ba30b9cb07431cc30e30c3400dba2d2?Expires=1699833600&Signature=fY8GaxNnvp4sMJtm7QkKnJ4YZGou4i1lVzudfw3fXSo-ZWQOxBvBqPSa7lem1efMqCuzWzM2RCRDHJY3wHjp05PfMI4PwM3WJTRuFur~V39fI2GC1IG2iwksIkZFHoB1Zfk9cJRUp9~8jrwd8ZU2staQVskePEcRahcZk4eWE39nrOtu4V3-RZa0YhNjxarUoyRYJybCXsQS~kaeSXNCqI6dlJG3EgjpVGWOXomGG8ZyDcPfE5W3aTkTk1UUOmFKxj79W7BjIEwiCN7RfvYuE9Adb~YYPjcznsnOvdmLkzgRnBIG4AsoqwtZurGcBLDwKOK8pdqa9Q7KY2pu4GQwDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  google:
    'https://s3-alpha-sig.figma.com/img/2acf/ed14/3403c8c02b6eb88e512b693cc6217c6f?Expires=1699833600&Signature=YWyMT6FmicrFVwAaKYdOohjc45mOYASsG2UL8IumAeo2gmOrXK-VEK4bSA5qHYGTGW74185jKG1ka2O97drJkoReEsmAzkzNMihRyxVQ4t47BvGH5XQfDg7ZzO43JY4i8mMt6ogVOQ24v1VsPCKtBFkXIvQRb-2TDqjDH-jv4q4kvsBMp3iNBK2HYDGs5STtQBQmEW~3vx~jNXV8QCUg~ZVndqBx5yOon~NT0h3Lv-NGuPtogGKBwTiUmb6wU8k~d9VMyeMy~UmB4BpODVk3BB0Qm71Zgc1jnMP~fm0v78grGkr-DfxcDrwtwfo4X~U5GCutHU2sw0eKs9pMxFp1KQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
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
