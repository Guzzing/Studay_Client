import { TextBoxProps } from '@/components/common/textBox/TextBoxType.ts'

const TextBox = ({
  isFullWidth = false,
  width,
  text,
  onClick,
  isCursor = false
}: TextBoxProps) => {
  return (
    <div
      className={`flex${
        isFullWidth ? 'w-full' : ''
      } h-[52px] rounded-[10px] border border-blue-350 px-[20px] font-nsk text-gray-600 bg-white-200 body-18 text-center outline-none  justify-start items-center`}
      style={{ cursor: isCursor ? 'pointer' : 'default', width: width }}
      onClick={onClick}>
      <span>{text}</span>
    </div>
  )
}

export default TextBox
