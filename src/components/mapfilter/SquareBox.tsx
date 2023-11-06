import { ReactNode } from 'react'

interface SquareBoxProps {
  children: ReactNode
  height: string
  flex: string
}

const SquareBox = ({ children, height, flex }: SquareBoxProps) => {
  const squareBoxStyle = `flex ${flex} w-full bg-white-0 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mb-[10px]`
  return (
    <div className={squareBoxStyle} style={{ height: height + 'px' }}>
      {children}
    </div>
  )
}

export default SquareBox
