import { ReactNode } from 'react'

export type ButtonSize = 'S' | 'M' | 'L'
export type ButtonTextColor = 'blue500' | 'white0' | 'red600'
export type ButtonBgColor = 'blue500' | 'blue700' | 'white0'
export type ButtonBorderColor = 'blue500' | 'red600'
export type ButtonType = 'Plain' | 'Round' | 'Square' | 'Floating'
export type ButtonBorderRadius = 'min' | 'middle' | 'max'
export type ButtonWidth = 'SW' | 'MW' | 'LW' | 'XLW'
export type ButtonHeight = 'SH' | 'MH' | 'LH'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  buttonType?: ButtonType
  size?: ButtonSize
  textColor?: ButtonTextColor
  bgColor?: ButtonBgColor
  borderColor?: ButtonBorderColor
  borderRadius?: ButtonBorderRadius
  width?: ButtonWidth
  height?: ButtonHeight
  onClick?: () => void
}
