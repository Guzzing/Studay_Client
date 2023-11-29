import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import SettingPage from '../setting/SettingPage'
import Button from '@/components/common/button/Button'
import Icon from '@/components/common/icon/Icon'
import ListRow from '@/components/common/listRow/ListRow'
import Profile from '@/components/common/profile/Profile'
import Spacing from '@/components/common/spacing/Spacing'
import { logoutApi } from '@/libs/api/autorization/logout/LogoutApi'
import { getAllUserInfo } from '@/libs/api/mypage/myPageApi'
import useSidebar from '@/libs/hooks/useSidebar'
import useToastify from '@/libs/hooks/useToastify'
import { myPageAtom } from '@/libs/store/myPageAtom'

const MyPage = () => {
  const navigate = useNavigate()
  const { setToast } = useToastify()
  const [myPageData, setMyPageData] = useAtom(myPageAtom)
  const { toggleOpen } = useSidebar()
  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      setToast({ comment: '로그인 페이지로 이동합니다.', type: 'info' })
      navigate('/login')
      return
    }
    const response = async () => {
      const res = await getAllUserInfo()
      setMyPageData(res)
    }
    response()
  }, [])

  return (
    <div className={'relative h-full overflow-hidden'}>
      <SettingPage isOpen={toggleOpen} />
      <div>
        <Spacing size={80} />
        <div className={'h-[110px] pl-[25px] py-[30px] headline-20'}>
          <h2>{`${myPageData?.nickname}님 안녕하세요!`}</h2>
          <p className={'body-15-gray py-[5px]'}>{myPageData?.email}</p>
        </div>
        <div className={'h-[175px] p-[20px]'}>
          <div className={'flex items-center mb-[5px]'}>
            <span>{'내 아이 관리하기'}</span>
            <Icon
              icon={'Add'}
              classStyle={'w-[30px] h-[30px] cursor-pointer'}
              onClick={() =>
                myPageData.childInformationResponses.length === 5
                  ? setToast({
                      comment: '아이는 최대 5명까지만 입력할 수 있어요.',
                      type: 'warning'
                    })
                  : navigate('/onboarding')
              }
            />
          </div>
          <div className={'flex overflow-x-scroll'}>
            {myPageData.childInformationResponses.map(
              ({ childId, childName }) => (
                <li
                  key={childId}
                  className={`list-none px-[10px] flex-shrink-0`}>
                  <Profile
                    imageSize={'M'}
                    imageLabel={childName}
                    canEdit={true}
                    onClick={() =>
                      navigate(`/edit/${childId}`, { state: childId })
                    }
                  />
                </li>
              )
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
            onClick={() =>
              setToast({
                comment: '회원 탈퇴가 완료되었어요.',
                type: 'success'
              })
            }
          />
        </div>
      </div>
    </div>
  )
}
export default MyPage
