import { ComponentProps } from 'react'

type SelectType = 'Single' | 'Box'
export interface SelectProps extends ComponentProps<'select'> {
  selectType: SelectType
  fullWidth: boolean
  value: string
  width?: number
  height?: number
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}
