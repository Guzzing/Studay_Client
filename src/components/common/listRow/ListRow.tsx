/* eslint-disable prettier/prettier */
import { ComponentProps, ReactNode } from 'react'
import { PaddingSizeType, PaddingVariant } from './ListRowType'
import cn from '@/libs/utils/cn'

/**
 * @param leftElement 왼쪽 요소 (필수) ReactNode로 작성해야 함.
 * @param rightElement 오른쪽 요소 ReactNode로 작성해야 함
 * @param paddingSize 'small [10px] | medium [20px] | large [30px] 가로 사이즈만 조절됨' 
 * @param hasBorder 'bottom-border 의 존재 여부 설정' 
 * */

interface ListRowProps extends ComponentProps<'div'> {
  rightElement: ReactNode
  leftElement?: ReactNode
  paddingSize?: PaddingSizeType
  hasBorder?: boolean
  className?: string
}

const ListRow = ({ leftElement, rightElement, hasBorder = true, paddingSize = 'medium', className }: ListRowProps) => {
  return (
    <div
      className={cn(`flex flex-row justify-between box-border items-center py-[13px] w-full ${hasBorder ? 'border-b-[1px] border-gray-200' : ''
        } ${PaddingVariant[paddingSize]}`, className)}
    >
      {leftElement}
      {rightElement}
    </div>
  )
}

export default ListRow
