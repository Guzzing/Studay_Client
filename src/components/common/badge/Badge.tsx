interface BadgeProps {
  value: string
  isSelected: boolean
}
const Badge = ({ value, isSelected }: BadgeProps) => {
  return (
    <div
      className={`rounded-[100px] flex justify-center items-center w-full h-full px-[8px] py-[4px] ${
        isSelected ? 'bg-green-5 text-green-50' : 'bg-gray-5 text-gray-50'
      } `}>
      {value}
    </div>
  )
}

export default Badge
