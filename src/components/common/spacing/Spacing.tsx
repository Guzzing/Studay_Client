interface SpacingProps {
  size: number
  color: string
}

/**
 * @param size 높이
 * @param color 색상
 * */

const Spacing = ({ size, color }: SpacingProps) => {
  return <div className={`h-[${size}px] w-full bg-${color}`}></div>
}

export default Spacing
