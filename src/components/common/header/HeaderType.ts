import { ReactNode } from 'react'

type HeaderType = 'BackPush' | 'Logo' | 'Close' | 'CloseWithTitle' | 'Map'
export interface HeaderProps {
  headerType: HeaderType
  pageTitle?: string
  backUrl?: string
  skip?: string
  rightElement?: ReactNode
  onClick?: () => void
}
