import type { HeaderProps } from './HeaderType'
import Icon from '../icon/Icon'

const Header = ({
  headerType,
  pageTitle = 'pageTitle',
  onClick
}: HeaderProps) => {
  return (
    <header
      className={`absolute fixed left-[50%] top-0 translate-x-[-50%] w-[390px] h-[80px] bg-white-0 text-black-900 px-[22px] border-b-[1px] border-gray-100`}
    >
      <div
        className={`w-full h-full ${
          headerType === 'BackPush' ||
          headerType === 'Close' ||
          headerType === 'CloseWithTitle'
            ? 'flex items-center justify-start'
            : 'flex items-center justify-between'
        }`}
      >
        {headerType === 'BackPush' ? (
          <span onClick={() => alert('뒤로가기')}>
            <Icon icon={'BackPush'} classStyle={'cursor-pointer'} />
          </span>
        ) : headerType === 'Logo' ? (
          <>
            <div>
              <span>{'👍'}</span>
              <span className={'mx-[20px] font-nsk subHead-18'}>
                {pageTitle}
              </span>
            </div>
            <div className={'flex items-center justify-between'}>
              <div className={'mx-[7px]'} onClick={() => alert('알림보기!')}>
                <Icon icon={'Alarm'} classStyle={'cursor-pointer'} />
              </div>
              <span onClick={() => alert('사이드 바 열기')}>
                <Icon icon={'SideBar'} classStyle={'cursor-pointer'} />
              </span>
            </div>
          </>
        ) : headerType === 'Close' ? (
          <span onClick={onClick}>
            <Icon icon={'Close'} classStyle={'cursor-pointer'} />
          </span>
        ) : headerType === 'CloseWithTitle' ? (
          <div className={'flex cursor-pointer items-center'}>
            <span onClick={onClick}>
              <Icon icon={'Close'} classStyle={'cursor-pointer'} />
            </span>
            <span className={'mx-[20px] font-nsk subHead-18'}>{pageTitle}</span>
          </div>
        ) : (
          ''
        )}
      </div>
    </header>
  )
}

export default Header
