import { MouseEventHandler, RefObject } from 'react'

export type DimmerPropsType = {
  dimmerRef: RefObject<HTMLDivElement>
  onClick: MouseEventHandler<HTMLDivElement>
}

const Dimmer = ({ dimmerRef, onClick }: DimmerPropsType) => {
  return (
    <div
      ref={dimmerRef}
      onClick={onClick}
      className={
        'fixed top-0 left-0 w-full h-full z-10 bg-black-800 opacity-50 '
      }
    />
  )
}

export default Dimmer
