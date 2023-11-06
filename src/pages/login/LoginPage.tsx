import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { VITE_CLIENT_ID } from '../../constants'
import Button from '@/components/common/button/Button'
import {
  getAccessToken,
  getCode,
  getKaKaoAccessToken,
  pushData
} from '@/libs/api/autorization'

const LoginPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (getCode()) {
      const req = async () => {
        try {
          const kakaoToken = await getKaKaoAccessToken(pushData())
          if (kakaoToken) {
            const accessToken = await getAccessToken(kakaoToken)
            if (accessToken) {
              localStorage.setItem('token', accessToken)
              accessToken && navigate('/')
            }
          }
        } catch (error) {
          console.error('액세스 토큰 요청 실패:', error)
        }
      }
      req()
    }
  }, [navigate])
  return (
    <div className={'w-full h-full border flex-col flex'}>
      <div className={'h-[80%] w-full flex justify-center items-center'}>
        <div className={'border'}>{'Logo'}</div>
      </div>
      <div className={`h-[20%] flex flex-col justify-around items-center`}>
        <Button
          label={
            <img
              src={
                'https://s3-alpha-sig.figma.com/img/bf52/65e1/2ba30b9cb07431cc30e30c3400dba2d2?Expires=1699833600&Signature=fY8GaxNnvp4sMJtm7QkKnJ4YZGou4i1lVzudfw3fXSo-ZWQOxBvBqPSa7lem1efMqCuzWzM2RCRDHJY3wHjp05PfMI4PwM3WJTRuFur~V39fI2GC1IG2iwksIkZFHoB1Zfk9cJRUp9~8jrwd8ZU2staQVskePEcRahcZk4eWE39nrOtu4V3-RZa0YhNjxarUoyRYJybCXsQS~kaeSXNCqI6dlJG3EgjpVGWOXomGG8ZyDcPfE5W3aTkTk1UUOmFKxj79W7BjIEwiCN7RfvYuE9Adb~YYPjcznsnOvdmLkzgRnBIG4AsoqwtZurGcBLDwKOK8pdqa9Q7KY2pu4GQwDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
              }
              className={'w-[100%] h-[120%]'}
            />
          }
          buttonType={'Round-blue-500'}
          width={'LW'}
          onClick={() => {
            window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${VITE_CLIENT_ID}&redirect_uri=http://localhost:5173/login&response_type=code`
          }}
        />
        <Button
          label={
            <img
              src={
                'https://s3-alpha-sig.figma.com/img/2acf/ed14/3403c8c02b6eb88e512b693cc6217c6f?Expires=1699833600&Signature=YWyMT6FmicrFVwAaKYdOohjc45mOYASsG2UL8IumAeo2gmOrXK-VEK4bSA5qHYGTGW74185jKG1ka2O97drJkoReEsmAzkzNMihRyxVQ4t47BvGH5XQfDg7ZzO43JY4i8mMt6ogVOQ24v1VsPCKtBFkXIvQRb-2TDqjDH-jv4q4kvsBMp3iNBK2HYDGs5STtQBQmEW~3vx~jNXV8QCUg~ZVndqBx5yOon~NT0h3Lv-NGuPtogGKBwTiUmb6wU8k~d9VMyeMy~UmB4BpODVk3BB0Qm71Zgc1jnMP~fm0v78grGkr-DfxcDrwtwfo4X~U5GCutHU2sw0eKs9pMxFp1KQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
              }
              className={'w-[100%] h-[120%]'}
            />
          }
          buttonType={'Round-blue-500'}
          width={'LW'}
        />
      </div>
    </div>
  )
}
export default LoginPage
