import { ReactNode } from 'react'

type HeaderType = 'BackPush' | 'Logo' | 'Close' | 'CloseWithTitle'
export interface HeaderProps {
  headerType: HeaderType
  pageTitle?: string
  backUrl?: string
  rightElement?: ReactNode
  onClick?: () => void
}
