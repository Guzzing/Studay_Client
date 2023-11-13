import { useNavigate } from 'react-router-dom'
import Header from '@/components/common/header/Header'
import Icon from '@/components/common/icon/Icon'
import ListRow from '@/components/common/listRow/ListRow'
import Spacing from '@/components/common/spacing/Spacing'

const SettingPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header headerType={'BackPush'} pageTitle={'settings'} />
      <Spacing size={120} />
      <ListRow
        leftElement={
          <div className={'flex'}>
            <Icon icon={'User'} />
            <span className={'px-[5px]'}>{'마이페이지'}</span>
          </div>
        }
        rightElement={<Icon icon={'ArrowDown'} />}
        onClick={() => navigate('/myPage')}
        className={'cursor-pointer'}
      />
      <ListRow
        leftElement={
          <div className={'flex'}>
            <Icon icon={'Write'} />
            <span className={'px-[5px]'}>{'찜한 학원보기'}</span>
          </div>
        }
        rightElement={<Icon icon={'ArrowDown'} />}
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
        rightElement={<Icon icon={'ArrowDown'} />}
        onClick={() => alert('로그아웃')}
        className={'cursor-pointer'}
      />
    </>
  )
}

export default SettingPage
