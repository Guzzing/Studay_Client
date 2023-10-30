import type { InformationBoxProps } from './InformationBoxType'
import Icon from '../icon/Icon'
import Profile from '../profile/Profile'

// CHECK
// Profile component가 머지되면 바로 프로필 컴포넌트 반영할게요!
const InformationBox = ({
  mainTitle,
  subTitle,
  description // CHECK : description은 글자 수 설정을 해놓으면 좋을 것 같습니다!
}: InformationBoxProps) => {
  return (
    <div
      className={
        'p-[14px] w-[345px] h-[120px] border border-black-900 font-nsk overflow-hidden rounded-[10px] bg-white-200'
      }
    >
      <div className={'w-full h-full flex'}>
        <Profile imageSize={'M'} canEdit={true} />
        <div
          className={
            'relative w-[240px] h-full pl-[17px] flex flex-col justify-between'
          }
        >
          <p className={'subHead-18 font-nsk text-black-900'}>{mainTitle}</p>
          <p className={'text-gray-700 body-15'}>{subTitle}</p>
          <p className={'text-black-900 caption-13 break-words'}>
            {description}
          </p>
          <span className={'absolute top-[3px] right-[3px] cursor-pointer'}>
            <Icon icon={'Edit'} classStyle={'text-black-900'} />
          </span>
        </div>
      </div>
    </div>
  )
}

export default InformationBox
