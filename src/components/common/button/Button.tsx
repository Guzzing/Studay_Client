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
  buttonType,
  fullWidth = false,
  textColor = 'white0',
  bgColor = 'blue500',
  borderColor = 'blue500',
  borderRadius = 'middle',
  width = 'XLW',
  height = 'LH',
  ...props
}: ButtonProps) => {
  const btnClass = `
  outline-none
  ${
    buttonType === 'Floating'
      ? `${BUTTON_RADIUS['max']} ${
          fullWidth ? BUTTON_WIDTH['FULL'] : BUTTON_WIDTH['SW']
        } ${BUTTON_HEIGHT['LH']} ${'text-1xl'} ${
          BUTTON_TEXT_COLOR[textColor]
        } ${BUTTON_BG_COLOR[bgColor]}`
      : buttonType === 'Square'
      ? `${BUTTON_RADIUS['min']} ${
          fullWidth ? BUTTON_WIDTH['FULL'] : BUTTON_WIDTH['XLW']
        } ${BUTTON_HEIGHT['LH']} ${BUTTON_TEXT_COLOR['white0']} ${
          BUTTON_BG_COLOR['blue500']
        }`
      : buttonType === 'Plain-blue'
      ? `${BUTTON_RADIUS['middle']} ${
          fullWidth ? BUTTON_WIDTH['FULL'] : BUTTON_WIDTH['LW']
        } ${BUTTON_HEIGHT['MH']} ${BUTTON_BG_COLOR['white0']} ${
          BUTTON_TEXT_COLOR['blue500']
        } ${BUTTON_BORDER_COLOR['blue500']}`
      : buttonType === 'Plain-red'
      ? `${BUTTON_RADIUS['middle']} ${
          fullWidth ? BUTTON_WIDTH['FULL'] : BUTTON_WIDTH['LW']
        } ${BUTTON_HEIGHT['MH']} ${BUTTON_BG_COLOR['white0']} ${
          BUTTON_TEXT_COLOR['red600']
        } ${BUTTON_BORDER_COLOR['red600']}`
      : buttonType === 'Round-blue-500'
      ? `${BUTTON_RADIUS['middle']} ${
          fullWidth ? BUTTON_WIDTH['FULL'] : BUTTON_WIDTH['LW']
        } ${BUTTON_HEIGHT['MH']} ${BUTTON_BG_COLOR['blue500']} ${
          BUTTON_TEXT_COLOR['white0']
        }`
      : buttonType === 'Round-blue-700'
      ? `${BUTTON_RADIUS['middle']} ${
          fullWidth ? BUTTON_WIDTH['FULL'] : BUTTON_WIDTH['LW']
        } ${BUTTON_HEIGHT['MH']} ${BUTTON_BG_COLOR['blue700']} ${
          BUTTON_TEXT_COLOR['white0']
        }`
      : ''
  }
  ${FONT_STYLE['NSK']}
  `
  return (
    <button className={btnClass} {...props}>
      {label}
    </button>
  )
}

export default Button
