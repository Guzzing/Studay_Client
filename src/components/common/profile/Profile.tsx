import type { ProfileImageProps } from './ProfileType'
import { PROFILE_SIZE, PROFILE_BORDER_COLOR } from './constants'

const Profile = ({
  imageSize,
  imageUrl = 'https://chanwookim.me/agumon-dday/agumon.png',
  canEdit = false,
  onClick
}: ProfileImageProps) => {
  return (
    <div
      className={`border ${
        PROFILE_BORDER_COLOR['black500']
      } rounded-full relative overflow-hidden ${
        imageSize === 'S'
          ? PROFILE_SIZE['S']
          : imageSize === 'M'
          ? PROFILE_SIZE['M']
          : imageSize === 'L'
          ? PROFILE_SIZE['L']
          : ''
      }`}
    >
      <img
        onClick={canEdit ? onClick : undefined}
        src={imageUrl}
        alt={'profile photo'}
        className={'absolute top-0 left-0 w-[100%] h-[100%]'}
      />
    </div>
  )
}

export default Profile
