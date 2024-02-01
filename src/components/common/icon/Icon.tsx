import Icons from './Icons'
export type IconType = keyof typeof Icons

export interface IconProps {
  icon?: IconType
  classStyle?: string
  onClick?: () => void
}

const Icon = ({ icon, classStyle, onClick }: IconProps) => {
  if (!icon) {
    return null
  }
  const SvgIcon = Icons[icon]
  return <SvgIcon className={classStyle} onClick={onClick} />
}

export default Icon
