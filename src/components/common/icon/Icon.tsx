import Icons from '@/components/common/icon/Icons'
export type IconType = keyof typeof Icons

export interface IconProps {
  icon: IconType
  classStyle?: string
}

const Icon = ({ icon, classStyle }: IconProps) => {
  const SvgIcon = Icons[icon]
  return <SvgIcon className={classStyle} />
}

export default Icon
