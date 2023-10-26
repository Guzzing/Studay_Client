interface InputModalProperties {
  onConfirm: () => void
  onCancel: () => void
  title: string
}

const InputModal = ({ onConfirm, onCancel, title }: InputModalProperties) => {
  return (
    <div
      className={
        'flex flex-col justify-center items-center w-[339px] h-[189px] bg-white-0 rounded-[15px]'
      }
    >
      <div className={'w-11/12 text-left body-16 text-black-900 mb-1 ml-3'}>
        {title}
      </div>
      <input
        className={
          'w-[298px] h-[42px] bg-white-100 rounded-xl border border-solid border-blue-500'
        }
      />
      <div className={'flex flex-row mt-7'}>
        <button
          className={
            'w-[123px] h-[40px] border rounded-xl mr-9 bg-blue-500 text-white-0 border-none'
          }
          onClick={onConfirm}
        >
          {'확인'}
        </button>
        <button
          className={
            'w-[123px] h-[40px] border rounded-xl bg-blue-500 text-white-0 border-none'
          }
          onClick={onCancel}
        >
          {'취소'}
        </button>
      </div>
    </div>
  )
}

export default InputModal
