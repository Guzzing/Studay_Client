import { ComponentProps } from 'react'

type SelectType = 'Single' | 'Box'
export interface SelectProps<T> extends ComponentProps<'select'> {
  selecttype: SelectType
  value?: string
  options: T[]
  fullWidth?: boolean
  width?: number
  height?: number
  isPlace?: boolean
  placeholder?: string
  errorMessage?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}
