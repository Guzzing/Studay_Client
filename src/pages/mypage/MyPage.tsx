import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import SettingPage from '../setting/SettingPage'
import Loading from '@/components/Loading/Loading'
import Button from '@/components/common/button/Button'
import Icon from '@/components/common/icon/Icon'
import ListRow from '@/components/common/listRow/ListRow'
import Profile from '@/components/common/profile/Profile'
import Spacing from '@/components/common/spacing/Spacing'
import { logoutApi } from '@/libs/api/autorization/logout/LogoutApi'
import { withdrawUserApi } from '@/libs/api/autorization/withdrawUser/withdrawUserApi'
import { getAllUserInfo } from '@/libs/api/mypage/myPageApi'
import useModal from '@/libs/hooks/useModal'
import useSidebar from '@/libs/hooks/useSidebar'
import useToastify from '@/libs/hooks/useToastify'

const MyPage = () => {
  const navigate = useNavigate()
  const { setToast } = useToastify()
  const { toggleOpen } = useSidebar()
  const { open, close, Modal } = useModal()

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['members'],
    queryFn: () => getAllUserInfo()
  })

  useEffect(() => {
    navigate('/myPages')
  }, [isSuccess])

  if (isLoading) {
    return <Loading />
  }
  return (
    <div className={'relative h-full overflow-hidden'}>
      <SettingPage isOpen={toggleOpen} />
      <div>
        <Spacing size={80} />
        <div className={'h-[110px] pl-[25px] py-[30px] headline-20'}>
          <h2>{`${data?.nickname}님 안녕하세요!`}</h2>
          <p className={'body-15-gray py-[5px]'}>{data?.email}</p>
        </div>
        <div className={'h-[175px] p-[20px]'}>
          <div className={'flex items-center mb-[5px]'}>
            <span>{'내 아이 관리하기'}</span>
            {(data?.childInformationResponses.length as number) < 5 && (
              <Icon
                icon={'Add'}
                classStyle={'w-[30px] h-[30px] cursor-pointer'}
                onClick={() =>
                  data?.childInformationResponses.length === 5
                    ? setToast({
                        comment: '아이는 최대 5명까지만 입력할 수 있어요.',
                        type: 'warning'
                      })
                    : navigate('/onboarding')
                }
              />
            )}
          </div>
          <div className={'flex overflow-x-scroll scrollbar-hide flex-start'}>
            {data?.childInformationResponses.length === 0 ? (
              <p>{'🥲아직 아이를 등록하지 않으셨습니다...'}</p>
            ) : (
              <ul className={'list-none flex-shrink-0 flex flex-start'}>
                {data?.childInformationResponses.map(
                  ({ childId, childName, childProfileImageUrl }) => (
                    <li key={childId} className={'px-2'}>
                      <Profile
                        imageSize={'M'}
                        imageUrl={childProfileImageUrl}
                        imageLabel={childName}
                        canEdit={true}
                        onClick={() =>
                          navigate(`/edit/${childId}`, {
                            state: {
                              childId: childId
                            }
                          })
                        }
                      />
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        </div>
        <ListRow
          leftElement={<p>{'찜한 학원 보러가기'}</p>}
          rightElement={
            <Icon icon={'ArrowDown'} classStyle={'rotate-[-90deg]'} />
          }
          onClick={() => navigate('/likeacademy')}
          className={'py-[20px] cursor-pointer'}
        />
        <div className={'absolute bottom-[38px] flex flex-col mx-8'}>
          <Button
            buttonType={'Plain-blue'}
            label={'로그아웃 하기'}
            className={'mb-[20px]'}
            onClick={() => {
              logoutApi()
              setToast({
                comment: '로그아웃이 완료되었어요.',
                type: 'success'
              })
            }}
          />
          <Button
            buttonType={'Plain-red'}
            label={'회원탈퇴 하기'}
            onClick={open}
          />
        </div>
      </div>
      <Modal
        children={
          <div
            className={
              'h-[200px] w-[360px] bg-white-0 p-[24px] px-[50px] flex flex-col items-center justify-between rounded-[15px]'
            }>
            <p>{'정말 회원탈퇴를 하시나요?'}</p>
            <Button
              label={'아니오'}
              onClick={close}
              buttonType={'Plain-blue'}
            />
            <Button
              label={'예'}
              onClick={() => withdrawUserApi()}
              buttonType={'Plain-red'}
            />
          </div>
        }
      />
    </div>
  )
}
export default MyPage
