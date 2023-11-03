import type { ProfileImageProps } from './ProfileType'
import { PROFILE_SIZE, PROFILE_BORDER_COLOR } from './constants'

const Profile = ({
  imageSize,
  imageUrl = 'https://chanwookim.me/agumon-dday/agumon.png',
  canEdit = false
}: ProfileImageProps) => {
  return (
    <div
      className={`border ${canEdit && 'cursor-pointer'} ${
        PROFILE_BORDER_COLOR['black500']
      } rounded-full relative overflow-hidden ${
        imageSize === 'S'
          ? PROFILE_SIZE['S']
          : imageSize === 'M'
          ? PROFILE_SIZE['M']
          : imageSize === 'L'
          ? PROFILE_SIZE['L']
          : PROFILE_SIZE['XL']
      } mx-[1px]`}>
      <img
        onClick={
          canEdit
            ? () => {
                alert('프로필 바꾸는 기능!')
              }
            : undefined
        }
        src={imageUrl}
        alt={'profile photo'}
        className={'absolute top-0 left-0 w-[100%] h-[100%]'}
      />
    </div>
  )
}

export default Profile
