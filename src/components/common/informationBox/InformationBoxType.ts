import { ComponentProps } from 'react'

export interface InformationBoxProps extends ComponentProps<'div'> {
  image?: string
  mainTitle: string
  subTitle: string
  description: string
}
