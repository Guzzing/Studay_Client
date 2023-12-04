import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useQuery } from '@tanstack/react-query'
import { useAtom } from 'jotai/index'
import { ArrowDown, Spinner } from '@/assets/icon'
import Loading from '@/components/Loading/Loading.tsx'
import { Accordion } from '@/components/common/accordion/Accordion.tsx'
import ListRow from '@/components/common/listRow/ListRow.tsx'
import MapBottomSheetItem from '@/components/map/MapBottomSheetItem.tsx'
import ReviewGraph from '@/components/map/ReviewGraph.tsx'
import { getAcademyDetail } from '@/libs/api/mapapi/mapApi.ts'
import { Academy } from '@/libs/api/mapapi/mapApiType.ts'
import { InitSelectAcademy } from '@/libs/store/mapInfoAtom.ts'
import numberWithCommas from '@/libs/utils/numberWithCommas.ts'
interface MapBottomSheetProps {
  setPage: () => void
  academyList: Academy[]
  isLast: boolean
  isLoading: boolean
}

const MapBottomSheet = ({
  setPage,
  academyList,
  isLast,
  isLoading
}: MapBottomSheetProps) => {
  const [selectAcademy, setSelectAcademy] = useAtom(InitSelectAcademy)
  const [expanded, setExpanded] = useState(1)
  const { data: academyDetail } = useQuery({
    queryKey: ['academyDetail', selectAcademy?.academyId],
    queryFn: () =>
      getAcademyDetail({
        academyId: selectAcademy?.academyId as number
      }),
    enabled: !!selectAcademy
  })
  const { ref, inView } = useInView({
    threshold: 1
  })

  const observer = (
    <div
      className={'observer'}
      ref={ref}
      style={{ width: '100%', height: '2px' }}
    />
  )

  useEffect(() => {
    if (isLast) setPage()
  }, [inView])

  const setBottomSheet = () => {
    console.log('test~~')
    if (expanded === 3) {
      setExpanded(1)
    } else {
      setExpanded(expanded + 1)
    }
  }

  useEffect(() => {
    if (selectAcademy) {
      setExpanded(1)
    }
  }, [selectAcademy])

  return (
    <>
      <div
        className={`box-border absolute left-0 bottom-0 w-full ${
          expanded === 1 ? 'h-[10%]' : expanded === 2 ? 'h-[30%]' : 'h-[80%]'
        } transition-all duration-500 z-[9999] flex flex-col items-center pt-[13px] px-[30px] bg-white-0 stroke-amber-100 text-gray-600 rounded-t-[20px] drop-shadow`}>
        <header
          className={'w-full flex justify-center '}
          onClick={setBottomSheet}>
          <div
            className={
              'box-border w-[93px] h-[6px] bg-gray-100 rounded-full mb-[23px] cursor-pointer'
            }
          />
        </header>
        <div className={'flex flex-col w-full h-[92%]'}>
          {expanded === 1 && (
            <div className={'flex justify-center items-center'}>
              <span className={'font-nsk body-14 text-black-900'}>
                {selectAcademy ? '학원 정보 상세보기' : '학원 목록 상세보기'}
              </span>
              {isLoading && <Loading />}
            </div>
          )}
          {expanded > 1 && !selectAcademy && (
            <div className={'flex flex-col overflow-y-auto'}>
              {academyList.length > 0 &&
                academyList?.map((academy, index) => (
                  <MapBottomSheetItem
                    key={index}
                    academyId={academy?.academyId}
                    academyName={academy?.academyName}
                    address={academy?.address}
                    contact={academy?.contact}
                    categories={academy?.categories}
                    isLiked={academy?.isLiked}
                    onClick={() => setSelectAcademy(academy)}
                  />
                ))}
              {isLoading && (
                <div className={'flex justify-center items-center'}>
                  <Spinner className={'animate-spin h-20 w-20'} />
                </div>
              )}
              {observer}
            </div>
          )}
          {expanded > 1 && academyDetail && (
            <div className={'flex flex-col overflow-y-auto h-full'}>
              <MapBottomSheetItem
                academyId={selectAcademy?.academyId as number}
                academyName={academyDetail.academyName}
                address={academyDetail.address}
                contact={academyDetail.contact}
                categories={academyDetail.categories}
                isLiked={academyDetail.isLiked}
              />
              <div
                className={'flex flex-col font-nsk text-black-900 mb-[20px]'}>
                <span className={'font-nsk subHead-18 mb-[15px]'}>
                  {'개설반 정보'}
                </span>
                <div>
                  {academyDetail.lessonGetResponses.lessons.map(
                    (lesson, index) => (
                      <Accordion
                        key={index}
                        title={lesson.subject}
                        rightElement={<ArrowDown />}
                        contentHeight={
                          51 * academyDetail.lessonGetResponses.lessons.length
                        }
                        content={
                          <div className={'flex flex-col gap-0 bg-white-100'}>
                            <ListRow
                              leftElement={
                                <div className={'font-nsk text-body-18'}>
                                  {'정원'}
                                </div>
                              }
                              rightElement={
                                <div
                                  className={
                                    'font-nsk text-body-16 text-blue-500'
                                  }>
                                  {`${lesson.capacity}명 정원`}
                                </div>
                              }
                              hasBorder={true}
                              className={'bg-white-100'}
                            />
                            <ListRow
                              leftElement={
                                <div className={'font-nsk text-body-18'}>
                                  {'금액'}
                                </div>
                              }
                              rightElement={
                                <div
                                  className={
                                    'font-nsk text-body-16 text-blue-500'
                                  }>
                                  {`${numberWithCommas(lesson.totalFee)}원`}
                                </div>
                              }
                              hasBorder={true}
                              className={'bg-white-100'}
                            />
                            <ListRow
                              leftElement={
                                <div className={'font-nsk text-body-18'}>
                                  {'수업 단위 기간'}
                                </div>
                              }
                              rightElement={
                                <div
                                  className={
                                    'font-nsk text-body-16 text-blue-500'
                                  }>
                                  {`${
                                    lesson.duration
                                      ? lesson.duration
                                      : '문의 필요'
                                  }`}
                                </div>
                              }
                              hasBorder={true}
                              className={'bg-white-100'}
                            />
                          </div>
                        }
                      />
                    )
                  )}
                </div>
              </div>
              <div className={'font-nsk text-black-900'}>
                <div className={'subHead-18 mb-[15px]'}>
                  {'학원 리뷰 모아보기'}
                </div>
                <div className={' h-[119px]'}>
                  <ReviewGraph
                    key={0}
                    review={
                      academyDetail.reviewPercentGetResponse.kindnessPercent
                    }
                    value={'선생님이 친절해요 👨‍🏫'}
                  />
                  <ReviewGraph
                    key={1}
                    review={
                      academyDetail.reviewPercentGetResponse.goodFacilityPercent
                    }
                    value={'시설이 좋아요 🏫'}
                  />
                  <ReviewGraph
                    key={2}
                    review={
                      academyDetail.reviewPercentGetResponse.cheapFeePercent
                    }
                    value={'교육비가 저렴해요 💰'}
                  />
                  <ReviewGraph
                    key={3}
                    review={
                      academyDetail.reviewPercentGetResponse
                        .goodManagementPercent
                    }
                    value={'교육 관리가 철저해요 📝'}
                  />
                  <ReviewGraph
                    key={4}
                    review={
                      academyDetail.reviewPercentGetResponse
                        .lovelyTeachingPercent
                    }
                    value={'학생에 대한 애정 가득 💓'}
                  />
                  <ReviewGraph
                    key={5}
                    review={
                      academyDetail.reviewPercentGetResponse
                        .shuttleAvailabilityCount
                    }
                    value={'등하원이 편리해요 🚌'}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default MapBottomSheet
