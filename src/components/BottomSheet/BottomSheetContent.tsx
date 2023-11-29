import { ArrowDown } from '@/assets/icon'
import { Accordion } from '@/components/common/accordion/Accordion.tsx'
import Label from '@/components/common/label/Label.tsx'
import ListRow from '@/components/common/listRow/ListRow.tsx'
import { DetailAcademyResponse } from '@/libs/api/mapapi/mapApiType.ts'
import numberWithCommas from '@/libs/utils/numberWithCommas.ts'

interface BottomSheetContentProps {
  expanded: boolean
  number: string
  address: string
  detailInfo: DetailAcademyResponse
}
const BottomSheetContent = ({
  expanded,
  number,
  address,
  detailInfo
}: BottomSheetContentProps) => {
  const { lessonGetResponses, reviewPercentGetResponse, categories } =
    detailInfo
  return (
    <div>
      <div className={'font-nsk body-15 text-black-900 mb-[20px]'}>
        {address}
        <br />
        {`☎ ${number}`}
        <div className={'mb-[11px]'} />
        <Label variant={'medium'} label={categories[0]}></Label>
      </div>
      {expanded && (
        <div className={'flex flex-col'}>
          <div className={'font-nsk text-black-900 mb-[20px]'}>
            <span className={'font-nsk subHead-18 mb-[15px]'}>
              {'개설반 정보'}
            </span>
            <div className={'h-[200px] overflow-y-auto'}>
              {lessonGetResponses.lessons &&
                lessonGetResponses.lessons.map((lesson, index) => (
                  <Accordion
                    key={index}
                    title={lesson.subject}
                    rightElement={<ArrowDown />}
                    contentHeight={153}
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
                              className={'font-nsk text-body-16 text-blue-500'}>
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
                              className={'font-nsk text-body-16 text-blue-500'}>
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
                              className={'font-nsk text-body-16 text-blue-500'}>
                              {`${lesson.duration}`}
                            </div>
                          }
                          hasBorder={true}
                          className={'bg-white-100'}
                        />
                      </div>
                    }></Accordion>
                ))}
            </div>
          </div>
          <div className={'font-nsk text-black-900'}>
            <div className={'subHead-18 mb-[15px]'}>{'학원 리뷰 모아보기'}</div>
            <div className={' h-[119px] overflow-y-auto'}>
              <div
                className={
                  'relative flex flex-row h-[37px] w-[323px] ml-[7px] mb-[7px]'
                }>
                <div
                  className={'h-full bg-blue-200'}
                  style={{
                    width: reviewPercentGetResponse.kindnessPercent + '%'
                  }}></div>
                <div
                  className={'h-full bg-gray-200'}
                  style={{
                    width: `${100 - reviewPercentGetResponse.kindnessPercent}%`
                  }}></div>
                <div
                  className={
                    'absolute text-center subHead-18 z-50 ml-[13px] mt-[7px]'
                  }>
                  {'선생님이 친절해요 👨‍🏫'}
                </div>
              </div>
              <div
                className={
                  'relative flex flex-row h-[37px] w-[323px] ml-[7px] mb-[7px]'
                }>
                <div
                  className={'h-full bg-blue-200'}
                  style={{
                    width: reviewPercentGetResponse.kindnessPercent + '%'
                  }}></div>
                <div
                  className={'h-full bg-gray-200'}
                  style={{
                    width: `${100 - reviewPercentGetResponse.kindnessPercent}%`
                  }}></div>
                <div
                  className={
                    'absolute text-center subHead-18 z-50 ml-[13px] mt-[7px]'
                  }>
                  {'시설이 좋아요 🏫'}
                </div>
              </div>
              <div
                className={
                  'relative flex flex-row h-[37px] w-[323px] ml-[7px] mb-[7px]'
                }>
                <div
                  className={'h-full bg-blue-200'}
                  style={{
                    width: reviewPercentGetResponse.cheapFeePercent + '%'
                  }}></div>
                <div
                  className={'h-full bg-gray-200'}
                  style={{
                    width: `${100 - reviewPercentGetResponse.cheapFeePercent}%`
                  }}></div>
                <div
                  className={
                    'absolute text-center subHead-18 z-50 ml-[13px] mt-[7px]'
                  }>
                  {'교육비가 저렴해요 💰'}
                </div>
              </div>
              <div
                className={
                  'relative flex flex-row h-[37px] w-[323px] ml-[7px] mb-[7px]'
                }>
                <div
                  className={'h-full bg-blue-200'}
                  style={{
                    width: reviewPercentGetResponse.goodManagementPercent + '%'
                  }}></div>
                <div
                  className={'h-full bg-gray-200'}
                  style={{
                    width: `${
                      100 - reviewPercentGetResponse.goodManagementPercent
                    }%`
                  }}></div>
                <div
                  className={
                    'absolute text-center subHead-18 z-50 ml-[13px] mt-[7px]'
                  }>
                  {'교육 관리가 철저해요 📝'}
                </div>
              </div>
              <div
                className={
                  'relative flex flex-row h-[37px] w-[323px] ml-[7px] mb-[7px]'
                }>
                <div
                  className={'h-full bg-blue-200'}
                  style={{
                    width: reviewPercentGetResponse.lovelyTeachingPercent + '%'
                  }}></div>
                <div
                  className={'h-full bg-gray-200'}
                  style={{
                    width: `${
                      100 - reviewPercentGetResponse.lovelyTeachingPercent
                    }%`
                  }}></div>
                <div
                  className={
                    'absolute text-center subHead-18 z-50 ml-[13px] mt-[7px]'
                  }>
                  {'학생에 대한 애정 가득 💓'}
                </div>
              </div>
              <div
                className={
                  'relative flex flex-row h-[37px] w-[323px] ml-[7px] mb-[7px]'
                }>
                <div
                  className={'h-full bg-blue-200'}
                  style={{
                    width: reviewPercentGetResponse.lovelyTeachingPercent + '%'
                  }}></div>
                <div
                  className={'h-full bg-gray-200'}
                  style={{
                    width: `${
                      100 - reviewPercentGetResponse.shuttleAvailabilityCount
                    }%`
                  }}></div>
                <div
                  className={
                    'absolute text-center subHead-18 z-50 ml-[13px] mt-[7px]'
                  }>
                  {'등하원이 편리해요 🚌'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BottomSheetContent
