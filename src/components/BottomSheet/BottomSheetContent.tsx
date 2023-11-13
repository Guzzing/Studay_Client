import { ArrowDown } from '@/assets/icon'
import { Accordion } from '@/components/common/accordion/Accordion.tsx'
import ListRow from '@/components/common/listRow/ListRow.tsx'

interface BottomSheetContentProps {
  expanded: boolean
  number: string
  address: string
}
const BottomSheetContent = ({
  expanded,
  number,
  address
}: BottomSheetContentProps) => {
  return (
    <div>
      <div className={'font-nsk body-15 text-black-900 mb-[20px]'}>
        {address}
        <br />
        {number}
      </div>
      {expanded && (
        <div className={'flex flex-col'}>
          <div className={'font-nsk text-black-900 mb-[20px]'}>
            <span className={'font-nsk subHead-18'}>{'개설반 정보'}</span>
            <Accordion
              title={'test'}
              contentHeight={106}
              content={
                <div className={'flex flex-col gap-0'}>
                  <ListRow
                    leftElement={
                      <div className={'font-nsk text-body-18'}>
                        {'체르니 마스터반'}
                      </div>
                    }
                    rightElement={
                      <div className={'font-nsk text-body-16 text-blue-500'}>
                        {'50명 정원'}
                      </div>
                    }
                    hasBorder={true}
                    className={'bg-white-100'}
                  />
                  <ListRow
                    leftElement={
                      <div className={'font-nsk text-body-18'}>{'금액'}</div>
                    }
                    rightElement={
                      <div className={'font-nsk text-body-16 text-blue-500'}>
                        {'300,000원'}
                      </div>
                    }
                    hasBorder={true}
                    className={'bg-white-100'}
                  />
                </div>
              }
              rightElement={<ArrowDown />}></Accordion>
          </div>
          <div className={'font-nsk text-black-900'}>
            <div className={'subHead-18 mb-[15px]'}>{'학원 리뷰 모아보기'}</div>
            <div
              className={'flex flex-row h-[37px] w-[323px] ml-[7px] mb-[7px]'}>
              <div className={'h-full bg-blue-200 w-[70%]'}></div>
              <div className={'h-full bg-gray-200 w-[30%]'}></div>
              <div
                className={
                  'absolute text-center subHead-18 z-50 ml-[13px] mt-[7px]'
                }>
                {'선생님이 친절해요'}
              </div>
            </div>
            <div
              className={'flex flex-row h-[37px] w-[323px] ml-[7px] mb-[7px]'}>
              <div className={'h-full bg-blue-200 w-[70%]'}></div>
              <div className={'h-full bg-gray-200 w-[30%]'}></div>
              <div
                className={
                  'absolute text-center subHead-18 z-50 ml-[13px] mt-[7px]'
                }>
                {'선생님이 친절해요'}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BottomSheetContent
