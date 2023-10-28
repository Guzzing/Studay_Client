import { useState } from 'react'

interface BottomSheetProps {
  title: string
}
const BottomSheet = ({ title }: BottomSheetProps) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <div
      className={
        'box-border absolute left-0 bottom-0 w-full h-full z-10 flex flex-col items-center pt-[13px] px-[24px] bg-white stroke-amber-100 text-gray-600 rounded-t-xl shadow-inner '
      }
    >
      <div
        className={
          'box-border w-[93px] h-[6px] bg-gray-100 rounded-full mb-[23px]'
        }
      ></div>
      <div className={'flex flex-col items-between w-full'}>
        <header className={'font-nsk headline-25 text-black-900'}>
          {title}
        </header>
        <div>{'컨텐츠'}</div>
      </div>
    </div>
    // <div
    //   className={`${styles.detailSection} ${expanded ? styles.expanded : ''} ${currentStore ? styles.selected : ''
    //     }`}
    // >
    //   <DetailHeader
    //     currentStore={currentStore}
    //     expanded={expanded}
    //     onClickArrow={() => setExpanded(!expanded)}
    //   />
    //   <DetailContent currentStore={currentStore} expanded={expanded} />
    // </div>
  )
}

export default BottomSheet
