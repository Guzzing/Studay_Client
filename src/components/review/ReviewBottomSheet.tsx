import { useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import Dimmer from '@/components/BottomSheet/Dimmer'
import Button from '@/components/common/button/Button'
import Label from '@/components/common/label/Label'
import Spacing from '@/components/common/spacing/Spacing'
import { queryClient } from '@/libs/api/queryClient'
import { postReview } from '@/libs/api/review/reviewApi'
import { AcademyReview } from '@/libs/api/review/reviewType'
import { ReviewRequestType } from '@/libs/api/review/reviewType'
import { useOutsideClick } from '@/libs/hooks/useOutSideClick'
import useToastify from '@/libs/hooks/useToastify'

const ReviewBottomSheet = ({
  academyTitle,
  academyId,
  bottomSheetState
}: {
  academyTitle: string
  academyId: number
  bottomSheetState: boolean
}) => {
  const [isOpen, setOpen] = useState(false)
  const [outsideRef, handleClickEditProfileDimmer] = useOutsideClick(() =>
    setOpen(false)
  )

  useEffect(() => {
    setOpen(bottomSheetState)
  }, [bottomSheetState])

  const { setToast } = useToastify()
  const [reviewCount, setReviewCount] = useState<string[]>([])
  const [reviewState, setReviewState] = useState<ReviewRequestType>({
    academyId: academyId,
    KINDNESS: false,
    GOOD_FACILITY: false,
    CHEAP_FEE: false,
    GOOD_MANAGEMENT: false,
    LOVELY_TEACHING: false,
    SHUTTLE_AVAILABILITY: false
  })
  const reviewMutation = useMutation({
    mutationFn: (reviewState: ReviewRequestType) => postReview(reviewState),
    onSettled: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['isReview', data?.academyId]
      })
    },
    onSuccess: () => {
      setOpen(false)
      setToast({ comment: '리뷰를 성공적으로 남겼어요.', type: 'success' })
    }
  })
  const handleMemo = (value: string) => {
    if (reviewCount.includes(value)) {
      setReviewState({
        ...reviewState,
        [value]: false
      })
      setReviewCount(reviewCount.filter((data) => data !== value))
    } else {
      setReviewState({
        ...reviewState,
        [value]: true
      })
      setReviewCount([...reviewCount, value])
    }
  }

  return (
    <>
      {isOpen ? (
        <Dimmer dimmerRef={outsideRef} onClick={handleClickEditProfileDimmer} />
      ) : (
        ''
      )}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: isOpen ? '0%' : '100%' }}
        transition={{
          duration: 1,
          type: 'spring',
          damping: 40,
          stiffness: 400
        }}
        className={
          'box-border absolute left-0 bottom-0 w-full h-[400px] z-10 flex flex-col items-center pt-[13px] bg-white-0 stroke-amber-100 text-gray-600 rounded-t-[20px] shadow-inner'
        }>
        <Spacing size={20}></Spacing>
        <div className={'w-full h-full relative'}>
          <header className={'w-full flex justify-center '}>
            <div
              className={
                'box-border w-[93px] h-[6px] bg-gray-100 rounded-full mb-[23px] cursor-pointer '
              }></div>
          </header>
          <div className={'flex flex-col items-between w-full px-[30px]'}>
            <div
              className={
                'flex flex-col justify-between w-full mb-[17px] gap-3'
              }>
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
              'grid grid-rows-3 grid-cols-2 justify-items-stretch px-[25px] gap-2'
            }>
            {AcademyReview.map((data, index) => {
              return (
                <Label
                  key={index}
                  color={
                    reviewCount.includes(data.serverData)
                      ? 'selected'
                      : 'default'
                  }
                  variant={'medium'}
                  label={data.clientData}
                  onClick={() => {
                    if (reviewCount.length === 3) {
                      if (reviewCount.includes(data.serverData)) {
                        handleMemo(data.serverData)
                      } else {
                        setToast({
                          comment: '리뷰는 4개 이상 남길 수 없어요'
                        })
                        return
                      }
                    } else {
                      handleMemo(data.serverData)
                    }
                  }}
                />
              )
            })}
          </div>
          <Button
            buttonType={'Square'}
            label={'작성 완료'}
            fullWidth={true}
            style={{ position: 'absolute', bottom: '0px' }}
            onClick={() => {
              if (reviewCount.length === 0) {
                setToast({
                  comment: '리뷰는 최소 1개 이상 남겨주세요.',
                  type: 'warning'
                })
                return
              }
              reviewMutation.mutate(reviewState)
            }}
          />
        </div>
      </motion.div>
    </>
  )
}

export default ReviewBottomSheet
