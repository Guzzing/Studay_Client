import './setting.css'
import { useNavigate } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import Icon from '@/components/common/icon/Icon'
import ListRow from '@/components/common/listRow/ListRow'
import Spacing from '@/components/common/spacing/Spacing'
import { logoutApi } from '@/libs/api/autorization/logout/LogoutApi'
interface SettingPage {
  isOpen: boolean
}
const SettingPage = ({ isOpen }: SettingPage) => {
  const navigate = useNavigate()
  return (
    <CSSTransition in={isOpen} timeout={300} classNames={'slide'} unmountOnExit>
      {() => (
        <div
          className={
            'setting-page absolute top-[80px] left-0 z-30 w-full h-full bg-white-0'
          }>
          <Spacing size={40} />
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
        </div>
      )}
    </CSSTransition>
  )
}

export default SettingPage
