import { ToastContainer } from 'react-toastify'
const Toast = () => {
  return (
    <ToastContainer
      position={'bottom-center'}
      autoClose={3500}
      closeButton={false}
      newestOnTop
      limit={5}
      toastStyle={{
        borderRadius: '12px',
        backgroundColor: 'white',
        margin: '6px'
      }}
      bodyStyle={{ color: 'ccc', lineHeight: 1.5 }}
    />
  )
}

export default Toast
