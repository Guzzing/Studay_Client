import type { InformationBoxProps } from './InformationBoxType'
import Icon from '../icon/Icon'
import Profile from '../profile/Profile'

// CHECK

const InformationBox = ({
  mainTitle,
  subTitle,
  description,
  imageUrl,
  onClick // CHECK : description은 글자 수 설정을 해놓으면 좋을 것 같습니다!
}: InformationBoxProps) => {
  return (
    <div
      className={
        'p-[14px] w-[345px] h-[120px] font-nsk overflow-hidden rounded-[10px] bg-white-0'
      }>
      <div className={'w-full h-full flex items-center'}>
        <Profile imageSize={'M'} canEdit={true} imageUrl={imageUrl} />
        <div
          className={
            'relative w-[240px] h-full pl-[17px] flex flex-col justify-center gap-[5px]'
          }>
          <p className={'subHead-18'}>{mainTitle}</p>
          <p className={'text-gray-700 body-15'}>{subTitle}</p>
          <p className={'text-black-700 caption-13 break-words'}>
            {description}
          </p>
          <span
            className={'absolute top-[3px] right-[3px] cursor-pointer'}
            onClick={onClick}>
            <Icon icon={'Edit'} classStyle={'text-black-700'} />
          </span>
        </div>
      </div>
    </div>
  )
}

export default InformationBox
