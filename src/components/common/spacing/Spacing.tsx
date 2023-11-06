interface SpacingProps {
  size: number
  color?: string
}

/**
 * @param size 높이
 * @param color 색상
 * */

const Spacing = ({ size, color }: SpacingProps) => {
  const spacingStyle = `bg-${color}`

  return <div className={spacingStyle} style={{ height: size + 'px' }}></div>
}

export default Spacing
