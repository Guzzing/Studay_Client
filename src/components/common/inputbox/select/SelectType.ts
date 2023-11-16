import { ComponentProps } from 'react'

type SelectType = 'Single' | 'Box'
export interface SelectProps extends ComponentProps<'select'> {
  selectType: SelectType
  value?: string
  options: string[]
  fullWidth?: boolean
  width?: number
  height?: number
  isPlace?: boolean
  placeholder?: string
  errorMessage?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}
