import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Loading from '@/components/Loading/Loading'
import Icon from '@/components/common/icon/Icon'
import InformationBox from '@/components/common/informationBox/InformationBox'
import Spacing from '@/components/common/spacing/Spacing'
import { getChildrenInfo } from '@/libs/api/children/ChildrenApi'
const HomePage = () => {
  const navigate = useNavigate()

  const { data, isLoading } = useQuery({
    queryKey: ['children'],
    queryFn: () => getChildrenInfo()
  })
  console.log(data)
  if (isLoading) {
    return <Loading />
  }

  return (
    <div className={'bg-white-100 w-full h-[750px] overflow-scroll'}>
      <Spacing size={100} />
      <div className={'flex flex-col items-center gap-[20px] pb-[20px]'}>
        {data && data?.length > 0 ? (
          data.map((data) => {
            return (
              <InformationBox
                key={data.childId}
                mainTitle={data.nickname}
                subTitle={data.grade}
                description={data.schedule}
                imageUrl={data.profileImageUrl}
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
        <Icon
          icon={'Add'}
          classStyle={'h-[60px] w-[60px]'}
          onClick={() =>
            (data?.length as number) < 5
              ? navigate('/onboarding')
              : alert('5명이상 등록할 수 없습니다!')
          }
        />
      </div>
    </div>
  )
}

export default HomePage
