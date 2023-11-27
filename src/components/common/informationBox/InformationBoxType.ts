import { ComponentProps } from 'react'

export interface InformationBoxProps extends ComponentProps<'div'> {
  imageUrl?: string
  mainTitle: string
  subTitle: string
  description: string
}
