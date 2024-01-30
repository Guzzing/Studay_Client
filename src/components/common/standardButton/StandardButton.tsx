interface StandardButtonProps {
  label: string
  state: 'disabled' | 'enabled'
  style: 'outlined' | 'filled'
}
const StandardButton = ({ label, state, style }: StandardButtonProps) => {
  return (
    <div
      className={`rounded-[8px] cursor-pointer flex justify-center items-center font-medium border border-1 w-full h-full px-[0px] py-[10px] ${
        state === 'enabled'
          ? // enabled
            style === 'filled'
            ? 'bg-green-50 text-white-0 border-green-50'
            : 'bg-transparent text-green-50 border-green-50'
          : // disabled
          style === 'filled'
          ? 'bg-gray-10 text-gray-50 border-gray-50'
          : 'bg-transparent text-gray-40 border-gray-40'
      }`}>
      {label}
    </div>
  )
}

export default StandardButton
