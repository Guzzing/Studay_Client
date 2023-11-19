import { ComponentProps } from 'react'
import { ChangeEvent } from 'react'

type InputType = 'Default' | 'Search'
export interface InputProps extends ComponentProps<'input'> {
  inputType: InputType
  fullWidth?: boolean
  typo?: string
  field?: string
  errorMessage?: string
  placeholder?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
