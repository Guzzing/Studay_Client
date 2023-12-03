import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import SettingPage from '../setting/SettingPage'
import Loading from '@/components/Loading/Loading'
import Icon from '@/components/common/icon/Icon'
import InformationBox from '@/components/common/informationBox/InformationBox'
import Spacing from '@/components/common/spacing/Spacing'
import { getChildrenInfo } from '@/libs/api/children/ChildrenApi'
import useSidebar from '@/libs/hooks/useSidebar'
import useToastify from '@/libs/hooks/useToastify'

const HomePage = () => {
  const navigate = useNavigate()
  const { setToast } = useToastify()
  const { toggleOpen } = useSidebar()

  const { data, isLoading } = useQuery({
    queryKey: ['children'],
    queryFn: () => getChildrenInfo()
  })
  if (isLoading) {
    return <Loading />
  }

  return (
    <div
      className={'relative bg-white-100 overflow-hidden'}
      style={{ height: 'calc(100% - 80px)' }}>
      <SettingPage isOpen={toggleOpen} />
      <div className={'h-full overflow-y-scroll'}>
        <Spacing size={80} />
        <div
          className={
            'flex flex-col items-center gap-[20px] pb-[20px] pt-[20px] overflow-y-scroll'
          }>
          {data && data?.length > 0 ? (
            data.map((data) => {
              return (
                <InformationBox
                  key={data.childId}
                  mainTitle={data.nickname}
                  imageUrl={data.profileImageUrl}
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
        <div className={'absolute right-[10px] bottom-[30px] cursor-pointer'}>
          <Icon
            icon={'Add'}
            classStyle={'h-[60px] w-[60px]'}
            onClick={() =>
              (data?.length as number) < 5
                ? navigate('/onboarding')
                : setToast({
                    comment: '아이는 5명 이상 등록할 수 없어요.',
                    type: 'warning'
                  })
            }
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
