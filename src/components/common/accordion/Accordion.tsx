/* eslint-disable prettier/prettier */
import { forwardRef, ReactNode, useState } from 'react'
import ListRow from '@/components/common/listRow/ListRow'

export interface AccordionProps {
  title: string
  content: ReactNode
  contentHeight?: number
  initialState?: boolean
  rightElement?: ReactNode
  onAccordionOpened?: () => void
  onAccordionClosed?: () => void
}
/**
 * @param title : 제목
 * @param content: 아코디언 내용
 * @param contentHeight 컨텐츠 높이 지정되면 애니메이션 적용
 * @param initialState 초기 오픈 상태
 * @param rightElement : 오른쪽 (핸들러 왼쪽)에 뱃지 같은거 넣을겨
 */

export const Accordion = forwardRef<HTMLButtonElement, AccordionProps>(
  (
    {
      title,
      content,
      onAccordionOpened,
      onAccordionClosed,
      contentHeight,
      initialState = false,
      rightElement
    }: AccordionProps,
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(initialState)

    const handleAccordion = () => {
      if (isOpen) {
        setIsOpen((prev) => !prev)
        onAccordionClosed && onAccordionClosed()
      } else {
        setIsOpen((prev) => !prev)
        onAccordionOpened && onAccordionOpened()
      }
    }

    return (
      <div className={'w-full'}>
        <button
          onClick={handleAccordion}
          ref={ref}
          className={'flex flex-column justify-center w-full'}
        >
          <ListRow hasBorder={true} leftElement={title} rightElement={rightElement} />
        </button>

        <div
          style={isOpen ? {
            maxHeight: `${contentHeight}px`, transition: 'all 0.4s ease', overflow: 'hidden'
          } : {
            maxHeight: '0px', transition: 'all 0.1s ease-in-out', overflow: 'hidden'
          }}
        >
          {content}
        </div>
      </div >
    )
  }
)

