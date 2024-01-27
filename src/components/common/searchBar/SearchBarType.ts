import { ComponentProps } from 'react'
import { ChangeEvent } from 'react'
export interface SearchBarType extends ComponentProps<'search'> {
  fullWidth?: boolean
  width?: string
  height?: string
  name?: string
  typo?: string
  field?: string
  errorMessage?: string
  placeholder?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
