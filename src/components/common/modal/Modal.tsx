import { ReactNode } from 'react'

interface ModalProperties {
  children: ReactNode
  onClose?: () => void
}

const Modal = ({ children, onClose }: ModalProperties) => {
  return (
    <div
      id={'background'}
      className={'fixed z-40 left-0 top-0 w-full h-screen bg-[rgba(0,0,0,0.2)]'}
      onClick={onClose}>
      <div
        className={`absolute left-1/2 top-1/2 text-center z-50 translate-y-[-50%] translate-x-[-50%]`}
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal
