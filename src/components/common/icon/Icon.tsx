import { ReactNode } from 'react'

interface IconProps {
  children: ReactNode
  width?: number
  height?: number
  color?: string
}

const Icon = ({ children }: IconProps) => {
  return <>{children}</>
}

export default Icon
