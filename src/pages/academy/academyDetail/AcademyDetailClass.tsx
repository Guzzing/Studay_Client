import { Accordion } from '@/components/common/accordion/Accordion'
import Icon from '@/components/common/icon/Icon'
import ListRow from '@/components/common/listRow/ListRow'
import Spacing from '@/components/common/spacing/Spacing'
import { GetAllDashBoardResponse } from '@/libs/api/dashboard/DashBoardType'

const AcademyDetailClass = ({ data }: { data: GetAllDashBoardResponse }) => {
  return (
    <div className={'w-full py-[23px]'}>
      <h3 className={'subHead-18'}>{'우리 아이 반 정보'}</h3>
      <Spacing size={7} />
      <Accordion
        title={data.lessonInfo.curriculum}
        contentHeight={200}
        rightElement={<Icon icon={'ArrowDown'} />}
        content={
          <div className={'flex flex-col'}>
            <ListRow
              leftElement={<div className={'body-16'}>{'정원'}</div>}
              hasBorder={false}
              className={'bg-white-100'}
              rightElement={
                <div className={'body-14 text-blue-500'}>
                  {data.lessonInfo.capacity}
                  {'명'}
                </div>
              }
            />
            <ListRow
              leftElement={<div className={'body-16'}>{'금액'}</div>}
              hasBorder={false}
              className={'bg-white-100'}
              rightElement={
                <div className={'body-14 text-blue-500'}>
                  {data.lessonInfo.totalFee.toLocaleString('ko-KR')}
                  {'원'}
                </div>
              }
            />
            <ListRow
              leftElement={<div className={'body-16'}>{'수업 단위 기간'}</div>}
              hasBorder={false}
              className={'bg-white-100'}
              rightElement={
                <div className={'body-14 text-blue-500'}>
                  {data.lessonInfo.duration.split('월').join('월 ')}
                </div>
              }
            />
          </div>
        }
      />
    </div>
  )
}

export default AcademyDetailClass
