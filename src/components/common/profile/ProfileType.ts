type ProfileImageType = 'S' | 'M' | 'L' | 'XL'

export interface ProfileImageProps {
  imageSize: ProfileImageType
  imageUrl?: string
  canEdit?: boolean
  onClick?: () => void
}
