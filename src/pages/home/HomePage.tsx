import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Loading from '@/components/Loading/Loading'
import Icon from '@/components/common/icon/Icon'
import InformationBox from '@/components/common/informationBox/InformationBox'
import Spacing from '@/components/common/spacing/Spacing'
import {
  getAccessToken,
  getCode,
  getKaKaoAccessToken,
  pushData
} from '@/libs/api/autorization'
import { getChildrenInfo } from '@/libs/api/children/ChildrenApi'
const HomePage = () => {
  const navigate = useNavigate()
  const { data, isLoading } = useQuery({
    queryKey: ['children'],
    queryFn: () => getChildrenInfo()
  })
  useEffect(() => {
    if (getCode()) {
      console.log(getCode())
      const req = async () => {
        try {
          const kakaoToken = await getKaKaoAccessToken(pushData())
          if (kakaoToken) {
            const accessToken = await getAccessToken(kakaoToken)
            if (accessToken) {
              localStorage.setItem('token', accessToken)
              accessToken && navigate('/login')
            }
          }
        } catch (error) {
          console.error('액세스 토큰 요청 실패:', error)
        }
      }
      req()
    }
  }, [navigate])
  if (isLoading) {
    return <Loading />
  }

  return (
    <div className={'bg-white-100 w-full h-full'}>
      <Spacing size={100} />
      <div className={'flex flex-col items-center gap-[20px]'}>
        {data && data?.length > 0 ? (
          data.map((data) => {
            return (
              <InformationBox
                key={data.childId}
                mainTitle={data.nickname}
                subTitle={data.grade}
                description={data.schedule}
                onClick={() =>
                  navigate(`edit/${data.childId}`, {
                    state: {
                      childId: data.childId
                    }
                  })
                }
              />
            )
          })
        ) : (
          <div className={'absolute top-1/2 font-nsk body-15 text-gray-600'}>
            {'아이를 먼저 등록해주세요!'}
          </div>
        )}
      </div>
      <div className={'absolute right-[10px] bottom-[90px] cursor-pointer'}>
        <Icon icon={'Add'} classStyle={'h-[60px] w-[60px]'} />
      </div>
    </div>
  )
}

export default HomePage
