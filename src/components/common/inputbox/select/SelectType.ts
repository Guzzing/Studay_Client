import { ComponentProps } from 'react'

type SelectType = 'Single' | 'Box'
export interface SelectProps extends ComponentProps<'select'> {
  selectType: SelectType
  value?: string
  options: string[] | undefined
  fullWidth?: boolean
  width?: number
  height?: number
  errorMessage?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}
