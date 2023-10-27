import type { ButtonProps } from './ButtonType'
import {
  BUTTON_BG_COLOR,
  BUTTON_BORDER_COLOR,
  BUTTON_HEIGHT,
  BUTTON_RADIUS,
  BUTTON_TEXT_COLOR,
  BUTTON_WIDTH,
  FONT_STYLE
} from './constants'
const Button = ({
  label,
  buttonType = 'Square',
  textColor = 'blue500',
  bgColor = 'white0',
  borderColor = 'blue500',
  borderRadius = 'middle',
  width = 'XLW',
  height = 'LH',
  ...props
}: ButtonProps) => {
  const btnClass = `
  ${BUTTON_BG_COLOR[bgColor]}
  ${BUTTON_TEXT_COLOR[textColor]}
  ${FONT_STYLE['NSK']}
  ${BUTTON_HEIGHT[height]}
  ${BUTTON_WIDTH[width]} 
  ${
    buttonType === 'Round'
      ? BUTTON_RADIUS['middle']
      : buttonType === 'Square'
      ? BUTTON_RADIUS['min']
      : buttonType === 'Floating'
      ? BUTTON_RADIUS['max']
      : `${BUTTON_RADIUS[borderRadius]} text-1.2`
  }
  ${
    bgColor === 'white0' && textColor === 'blue500'
      ? BUTTON_BORDER_COLOR['blue500']
      : bgColor === 'white0' && textColor === 'red600'
      ? BUTTON_BORDER_COLOR['red600']
      : ''
  }`
  return (
    <button className={btnClass} {...props}>
      {label}
    </button>
  )
}

export default Button
