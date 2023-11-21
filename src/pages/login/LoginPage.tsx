import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BUTTON_IMG_LINK, LOGIN_LINK } from '.'
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
          if (getCode().method === 'kakao') {
            const kakaoToken = await getKaKaoAccessToken(pushData())
            kakaoToken && (await getAccessToken(kakaoToken, 'kakao'))
          } else {
            await getAccessToken(getCode().accessToken as string, 'google')
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
            <img src={BUTTON_IMG_LINK.KAKAO} className={'w-[100%] h-[100%]'} />
          }
          buttonType={'Round-blue-500'}
          width={'LW'}
          onClick={() => (window.location.href = `${LOGIN_LINK.KAKAO}`)}
        />
        <Button
          label={
            <img
              src={BUTTON_IMG_LINK.GOOGLE}
              className={'w-[100%] h-[100%]'}
              onClick={() => (window.location.href = `${LOGIN_LINK.GOOGLE}`)}
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
