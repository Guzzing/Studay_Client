import type { ProfileImageProps } from './ProfileType'
import { useRef, useState, RefObject } from 'react'
import { PROFILE_SIZE, PROFILE_BORDER_COLOR } from './constants'
import request from '@/libs/api'
import useToastify from '@/libs/hooks/useToastify'
const Profile = ({
  imageSize,
  imageUrl = 'https://chanwookim.me/agumon-dday/agumon.png',
  imageLabel = '',
  canEdit = false,
  editId = 0,
  onClick,
  profileSize
}: ProfileImageProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const imgRef = useRef<HTMLInputElement>(null) as RefObject<HTMLInputElement>
  const { setToast } = useToastify()
  const [image, setImage] = useState(imageUrl)

  const handleImageChange = (editId: number) => {
    if (imgRef.current && imgRef.current?.files) {
      setImage(URL.createObjectURL(imgRef.current.files[0]))
      const formData = new FormData()
      formData.append('file', imgRef.current.files[0], 'myfile')
      request
        .post(`/children/${editId}/profile`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(() => {
          setToast({
            comment: '프로필 사진을 수정했어요.',
            type: 'success'
          })
        })
        .catch(() => {
          setToast({
            comment: '파일 용량이 너무 커서 업로드를 실패했어요.',
            type: 'error'
          })
        })
    }
  }
  return (
    <div
      className={`${PROFILE_BORDER_COLOR['black500']} relative flex flex-col`}>
      <label
        htmlFor={'fileInput'}
        className={`relative ${canEdit && 'cursor-pointer'}`}>
        <img
          onClick={canEdit ? onClick : undefined}
          src={image}
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
      </label>
      {canEdit && (
        <input
          ref={imgRef}
          type={'file'}
          id={'fileInput'}
          className={'hidden'}
          accept={'image/*'}
          onChange={() => handleImageChange(editId)}
        />
      )}
      {imageLabel && (
        <p
          className={
            'relative text-center text-ellipsis overflow-hidden whitespace-nowrap w-[70px]'
          }>
          {imageLabel}
        </p>
      )}
    </div>
  )
}

export default Profile
