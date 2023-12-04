import { Spinner } from '@/assets/icon'
const Loading = () => {
  return (
    <div
      className={
        'w-full h-full fixed top-0 left-0 bg-black-800 opacity-50 flex items-center justify-center z-50'
      }>
      <Spinner className={'animate-spin h-20 w-20'} />
    </div>
  )
}

export default Loading
