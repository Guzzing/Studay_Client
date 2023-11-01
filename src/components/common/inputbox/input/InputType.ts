import { ComponentProps } from 'react'

type InputType = 'Default' | 'Search'
export interface InputProps extends ComponentProps<'input'> {
  inputType: InputType
  fullWidth: boolean
  typo?: string
  errorMessage?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
