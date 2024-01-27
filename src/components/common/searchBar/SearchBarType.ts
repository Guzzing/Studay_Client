import { ComponentProps } from 'react'
export interface SearchBarType extends ComponentProps<'input'> {
  fullWidth?: boolean
  width?: string
  height?: string
  name?: string
  typo?: string
  field?: string
  errorMessage?: string
  placeholder?: string
  onSearch?: (e: string) => void
}
