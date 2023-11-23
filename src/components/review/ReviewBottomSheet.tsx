import { useState } from 'react'
import Label from '@/components/common/label/Label'
import Spacing from '@/components/common/spacing/Spacing'
import { AcademyReview } from '@/libs/api/review/reviewType'
import { ReviewRequestType } from '@/libs/api/review/reviewType'
const ReviewBottomSheet = ({
  academyTitle,
  academyId
}: {
  academyTitle: string
  academyId: number
}) => {
  const [reviewState, setReviewState] = useState<ReviewRequestType>({
    academyId: academyId,
    KINDNESS: false,
    GOOD_FACILITY: false,
    CHEAP_FEE: false,
    GOOD_MANAGEMENT: false,
    LOVELY_TEACHING: false,
    SHUTTLE_AVAILABILITY: false
  })
  // const handleMemo = (value) => {
  //   if (reviewState[value]) {
  //       setReviewState({

  //       })
  //     }
  //   } else {
  //     setAcademyInfo({
  //       ...academyInfo,
  //       simpleMemo: {
  //         ...academyInfo.simpleMemo,
  //         [AcademyMemo[index].serverData]: true
  //       }
  //     })
  //   }
  // }
  return (
    <>
      <div
        className={`box-border absolute left-0 bottom-0 w-full transition-all duration-500 h-[300px] z-10 flex flex-col items-center pt-[13px] px-[30px] bg-white-0 stroke-amber-100 text-gray-600 rounded-t-[20px] shadow-inner `}>
        <Spacing size={20}></Spacing>
        <header className={'w-full flex justify-center '}>
          <div
            className={
              'box-border w-[93px] h-[6px] bg-gray-100 rounded-full mb-[23px] cursor-pointer'
            }></div>
        </header>
        <div className={'flex flex-col items-between w-full'}>
          <div
            className={'flex flex-col justify-between w-full mb-[17px] gap-3'}>
            <h1 className={'font-nsk headline-25 text-black-800'}>
              {academyTitle}
              {'에 대한'}
            </h1>
            <h1 className={'font-nsk headline-25 text-black-800'}>
              {'리뷰를 남겨요'}
            </h1>
          </div>
        </div>
        <div
          className={
            'grid grid-rows-3 grid-cols-2 justify-items-stretch px-[20px] gap-2'
          }>
          {AcademyReview.map((data, index) => {
            return (
              <Label
                key={index}
                color={AcademyReview[index].serverData ? 'selected' : 'default'}
                variant={'medium'}
                label={data.clientData}
                onClick={() => handleMemo(index)}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ReviewBottomSheet
