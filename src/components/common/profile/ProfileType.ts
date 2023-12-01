type ProfileImageType = 'S' | 'M' | 'L' | 'XL'

export interface ProfileImageProps {
  imageSize: ProfileImageType
  imageUrl?: string
  imageLabel?: string
  canEdit?: boolean
  editId?: number
  onClick?: () => void
  profileSize?: number
}
