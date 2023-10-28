/* eslint-disable prettier/prettier */
import { useState } from 'react'
import BottomSheetContent from '@/components/BottomSheet/BottomSheetContent'
import BottomSheetHeader from '@/components/BottomSheet/BottomSheetHeader'
interface BottomSheetProps {
  title: string
}
const BottomSheet = ({ title }: BottomSheetProps) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <div
      className={`box-border absolute left-0 bottom-0 w-full transition-all duration-500 ${expanded ? 'h-full' : 'h-[210px]'
        } z-10 flex flex-col items-center pt-[13px] px-[30px] bg-white stroke-amber-100 text-gray-600 rounded-t-xl shadow-inner `}
    >
      <header className={"w-full flex justify-center "}
        onClick={() => setExpanded(!expanded)}>
        <div className={
          'box-border w-[93px] h-[6px] bg-gray-100 rounded-full mb-[23px] cursor-pointer'
        }>
        </div>
      </header >
      <div className={'flex flex-col items-between w-full'}>
        <BottomSheetHeader title={title} />
        <BottomSheetContent expanded={expanded} />
      </div>
    </div >
  )
}

export default BottomSheet
