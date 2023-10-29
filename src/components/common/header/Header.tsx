// 봐 결국 함수야..!
import type { HeaderProps } from './HeaderType'

const Header = ({ headerType, rightElement }: HeaderProps) => {
  return (
    <header
      className={`w-[390px] h-[80px] bg-white-0 relative text-black-900 px-[22px] border border-black-900`}
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
          <span>{'<'}</span>
        ) : headerType === 'Logo' ? (
          <>
            <div>
              <span>{'👍'}</span>
              <span className={'mx-[6px]'}>{'logo'}</span>
            </div>
            <div>
              {/*
              CHECK : 이 부분에 rightElement icon요소 이름이 들어가는데, 아직 icon컴포넌트 미반영으로 넣지 못 했습니다!
              */}
              <span className={'mx-[6px]'}>{'👏'}</span>
              <span>{'👏'}</span>
            </div>
          </>
        ) : headerType === 'Close' ? (
          <span>{'❌'}</span>
        ) : headerType === 'CloseWithTitle' ? (
          <div>
            <span>{'❌'}</span>
            <span className={'mx-[6px]'}>{'logo'}</span>
          </div>
        ) : (
          ''
        )}
      </div>
    </header>
  )
}

export default Header
