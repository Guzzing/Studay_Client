type ProfileImageType = 'S' | 'M' | 'L'

export interface ProfileImageProps {
  imageSize: ProfileImageType
  imageUrl?: string
  canEdit?: boolean
  onClick?: () => void
}
