import { ToastContainer } from 'react-toastify'
const Toast = () => {
  return (
    <ToastContainer
      position={'top-center'}
      autoClose={1500}
      closeButton={false}
      newestOnTop
      hideProgressBar={true}
      limit={1}
      toastStyle={{
        borderRadius: '12px',
        backgroundColor: 'white',
        margin: '10px'
      }}
      bodyStyle={{ color: 'ccc', lineHeight: 1.5 }}
    />
  )
}

export default Toast
