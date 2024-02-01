interface ChipsProps {
  label: string
  isSelected: boolean
}
const Chips = ({ label, isSelected }: ChipsProps) => {
  return (
    <div
      className={`rounded-[100px] font-semibold text-lg cursor-pointer flex justify-center items-center border-2 w-20 h-10 ${
        isSelected
          ? 'bg-green-5 text-green-50 border-green-50'
          : 'bg-transparent border-gray-20'
      }`}>
      {label}
    </div>
  )
}

export default Chips
