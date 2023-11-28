import { cva } from 'class-variance-authority'

export type LabelVariant = 'medium' | 'small'
export type LabelColorType = 'default' | 'selected' | 'disabled'

export const LabelColorVariant = {
  default: {
    medium: 'bg-white border border-blue-500 bg-white-0',
    small: 'bg-blue-400'
  },
  selected: {
    medium: 'bg-blue-500',
    small: 'bg-blue-700'
  },
  disabled: {
    medium: 'bg-white border border-gray-500 bg-white-0',
    small: 'bg-gray-500'
  }
}

export const LabelTextColorVariant = {
  default: {
    medium: 'stroke-blue-500 text-blue-500 ',
    small: 'text-white-0'
  },
  selected: {
    medium: 'stroke-white-0 text-white-0',
    small: 'text-white-0'
  },
  disabled: {
    medium: 'stroke-gray-500 text-gray-500',
    small: 'text-white-0'
  }
}

export const LabelVariant = cva(
  `flex flex-row justify-center gap-[2px] items-center w-fit px-[5px] `,
  {
    variants: {
      variant: {
        medium: 'rounded-[10px] font-nsk body-14 h-[32px]',
        small: 'font-nsk caption-13 rounded-[10px] h-[28px] text-white'
      },
      defaultVariants: {
        variant: 'medium'
      }
    }
  }
)
