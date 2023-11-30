import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import BottomSheetContent from '@/components/BottomSheet/BottomSheetContent'
import BottomSheetHeader from '@/components/BottomSheet/BottomSheetHeader'
import Loading from '@/components/Loading/Loading.tsx'
import Spacing from '@/components/common/spacing/Spacing.tsx'
import { getAcademyDetail } from '@/libs/api/mapapi/mapApi.ts'

/**
 * @param title BottomSheet에 들어갈 Title을 입력합니다.
 */

//TODO: 추후 BottomSheet 안의 내용은 client-side 상태관리 이용하여 정보 받아 사용할 예정. 이에 따라 title props도 사라질 수 있음
interface BottomSheetProps {
  title: string
  address: string
  number: string
  academyId: number
}
const BottomSheet = ({
  title = '학원명 입력',
  address,
  number,
  academyId
}: BottomSheetProps) => {
  const [expanded, setExpanded] = useState(false)
  const { data: detailAcademy, isLoading } = useQuery({
    queryKey: ['academy', academyId],
    queryFn: () =>
      getAcademyDetail({
        academyId: academyId
      }),
    enabled: academyId > -1
  })

  return (
    <>
      <div
        className={`box-border absolute left-0 bottom-0 w-full transition-all duration-500 ${
          expanded ? 'h-full' : 'h-[210px]'
        } z-10 flex flex-col items-center pt-[13px] px-[30px] bg-white-0 stroke-amber-100 text-gray-600 rounded-t-[20px] shadow-inner `}>
        <Spacing size={80}></Spacing>
        <header
          className={'w-full flex justify-center '}
          onClick={() => setExpanded(!expanded)}>
          <div
            className={
              'box-border w-[93px] h-[6px] bg-gray-100 rounded-full mb-[23px] cursor-pointer'
            }></div>
        </header>
        {isLoading && <Loading />}
        {detailAcademy && (
          <div className={'flex flex-col items-between w-full'}>
            <BottomSheetHeader
              title={title}
              isLike={detailAcademy.isLiked || false}
              academyId={academyId}
            />
            <BottomSheetContent
              expanded={expanded}
              address={address}
              number={number}
              detailInfo={detailAcademy}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default BottomSheet
