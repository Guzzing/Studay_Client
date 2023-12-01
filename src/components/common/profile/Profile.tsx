import type { ProfileImageProps } from './ProfileType'
import { PROFILE_SIZE, PROFILE_BORDER_COLOR } from './constants'

const Profile = ({
  imageSize,
  imageUrl = 'https://chanwookim.me/agumon-dday/agumon.png',
  imageLabel = '',
  canEdit = false,
  onClick,
  profileSize
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
        style={
          profileSize
            ? { width: `${profileSize}px`, height: `${profileSize}px` }
            : {}
        }
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
      {imageLabel && (
        <p
          className={
            'relative text-center text-ellipsis overflow-hidden whitespace-nowrap w-[70px] text-center'
          }>
          {imageLabel}
        </p>
      )}
    </div>
  )
}

export default Profile
