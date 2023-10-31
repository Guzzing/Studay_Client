import { ReactNode } from 'react'

interface ModalProperties {
  children: ReactNode
}

const Modal = ({ children }: ModalProperties) => {
  return (
    <div
      id={'background'}
      className={
        'fixed absolute left-0 top-0 w-full h-screen bg-[rgba(0,0,0,0.2)] z-50'
      }
    >
      <div
        className={`absolute left-1/2 top-1/2 text-center z-10 translate-y-[-50%] translate-x-[-50%]`}
      >
        {children}
      </div>
    </div>
  )
}
export default Modal
