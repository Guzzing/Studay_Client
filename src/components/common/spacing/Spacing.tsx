interface SpacingProps {
  size: number
  color?: string
}

/**
 * @param size 높이
 * @param color 색상
 * */

const Spacing = ({ size, color }: SpacingProps) => {
  const spacingStyle = `h-[${size}px] bg-${color}`

  return <div className={spacingStyle}></div>
}

export default Spacing
