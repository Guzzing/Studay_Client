import type { ProfileImageProps } from './ProfileType'
import { PROFILE_SIZE, PROFILE_BORDER_COLOR } from './constants'

const Profile = ({
  imageSize,
  imageUrl = 'https://chanwookim.me/agumon-dday/agumon.png',
  imageLabel = '',
  canEdit = false,
  onClick
}: ProfileImageProps) => {
  return (
    <div
      className={`${canEdit && 'cursor-pointer'} ${
        PROFILE_BORDER_COLOR['black500']
      } relative flex flex-col`}>
      <img
        onClick={canEdit ? onClick : undefined}
        src={imageUrl}
        alt={'profile photo'}
        className={`border rounded-full ${
          imageSize === 'S'
            ? PROFILE_SIZE['S']
            : imageSize === 'M'
            ? PROFILE_SIZE['M']
            : imageSize === 'L'
            ? PROFILE_SIZE['L']
            : PROFILE_SIZE['XL']
        } rounded-full`}
      />
      {imageLabel && <p className={'relative text-center'}>{imageLabel}</p>}
    </div>
  )
}

export default Profile
