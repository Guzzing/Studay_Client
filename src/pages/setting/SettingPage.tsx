import { useNavigate } from 'react-router-dom'
import Header from '@/components/common/header/Header'
import Icon from '@/components/common/icon/Icon'
import ListRow from '@/components/common/listRow/ListRow'
import Spacing from '@/components/common/spacing/Spacing'
import { logoutApi } from '@/libs/api/autorization/logout/LogoutApi'

const SettingPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header
        headerType={'BackPush'}
        pageTitle={'settings'}
        onClick={() => navigate('/')}
      />
      <Spacing size={120} />
      <ListRow
        leftElement={
          <div className={'flex'}>
            <Icon icon={'User'} />
            <span className={'px-[5px]'}>{'마이페이지'}</span>
          </div>
        }
        rightElement={
          <Icon icon={'ArrowDown'} classStyle={'rotate-[-90deg]'} />
        }
        onClick={() => navigate('/myPages')}
        className={'cursor-pointer'}
      />
      <ListRow
        leftElement={
          <div className={'flex'}>
            <Icon icon={'Write'} />
            <span className={'px-[5px]'}>{'찜한 학원보기'}</span>
          </div>
        }
        rightElement={
          <Icon icon={'ArrowDown'} classStyle={'rotate-[-90deg]'} />
        }
        onClick={() => navigate('/likeacademy')}
        className={'cursor-pointer'}
      />
      <ListRow
        leftElement={
          <div className={'flex'}>
            <Icon icon={'Logout'} />
            <span className={'px-[5px]'}>{'로그아웃'}</span>
          </div>
        }
        rightElement={
          <Icon icon={'ArrowDown'} classStyle={'rotate-[-90deg]'} />
        }
        onClick={() => logoutApi()}
        className={'cursor-pointer'}
      />
    </>
  )
}

export default SettingPage

// 로그아웃 시 모달 컴포넌트 띄우기
