import { useNavigate } from 'react-router-dom'
import Button from '@/components/common/button/Button'
import Header from '@/components/common/header/Header'
import Icon from '@/components/common/icon/Icon'
import ListRow from '@/components/common/listRow/ListRow'
import Profile from '@/components/common/profile/Profile'
import Spacing from '@/components/common/spacing/Spacing'

const MY_PAGE_DUMMY = {
  nickname: '메시엄마',
  email: 'messiMother@naver.com',
  children: [
    {
      // 첫 째 아이
      childId: 1,
      childname: '첫 째',
      profile: 'messi image',
      schedule: '휴식중'
    },
    {
      // 둘 째 아이
      childId: 2,
      childname: '둘 째',
      profile: 'ronaldo image',
      schedule: '휴식중'
    },
    {
      childId: 3,
      childname: '셋 째',
      profile: 'messi',
      schedule: '휴식중'
    },
    {
      childId: 4,
      childname: '넷 째',
      profile: 'messi',
      schedule: '휴식중'
    },
    {
      childId: 5,
      childname: '다섯 째',
      profile: 'messi',
      schedule: '휴식중'
    }
  ]
}
const MyPage = () => {
  const navigate = useNavigate()
  return (
    <div className={'relative h-full'}>
      <Header headerType={'Logo'} pageTitle={'마이페이지'} />
      <Spacing size={80} />
      <div className={'h-[110px] pl-[25px] py-[30px] headline-20'}>
        <h2>{`${MY_PAGE_DUMMY.nickname}님 안녕하세요!`}</h2>
        <p className={'body-15-gray py-[5px]'}>{MY_PAGE_DUMMY.email}</p>
      </div>
      <div className={'h-[175px] p-[20px]'}>
        <div className={'flex items-center mb-[5px]'}>
          <span>{'내 아이 관리하기'}</span>
          <Icon
            icon={'Add'}
            classStyle={'w-[30px] h-[30px] cursor-pointer'}
            onClick={() => navigate('/study/onboarding')}
          />
        </div>
        <div className={'flex overflow-x-scroll'}>
          {MY_PAGE_DUMMY.children.map(
            ({ childId, childname, profile }, index) => (
              <li key={childId} className={`list-none px-[10px] flex-shrink-0`}>
                <Profile imageSize={'M'} imageLabel={childname} />
              </li>
            )
          )}
        </div>
      </div>
      <ListRow
        leftElement={<p>{'찜한 학원 보러가기'}</p>}
        rightElement={<Icon icon={'ArrowDown'} />}
        className={'py-[20px]'}
      />
      <div className={'absolute bottom-[38px] flex flex-col mx-8'}>
        <Button
          buttonType={'Plain-blue'}
          label={'로그아웃 하기'}
          className={'mb-[20px]'}
        />
        <Button buttonType={'Plain-red'} label={'회원탈퇴 하기'} />
      </div>
    </div>
  )
}
export default MyPage
