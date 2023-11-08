import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import SelectMyChild from '@/components/academy/SelectMyChlid'
import Button from '@/components/common/button/Button'
import Icon from '@/components/common/icon/Icon'
import ScheduleBox from '@/components/common/scheduleBox/ScheduleBox'
import Spacing from '@/components/common/spacing/Spacing'
import { getChildrenInfo } from '@/libs/api/children/ChildrenApi'
import { GetChildrenInfoResponse } from '@/libs/api/children/ChildrenType'
const AcademyDashboard = () => {
  const [child, setChild] = useState<GetChildrenInfoResponse>()
  const { data } = useQuery({
    queryKey: ['children'],
    queryFn: () => getChildrenInfo()
  })
  return (
    <>
      <Spacing size={100} />
      {data && data?.length > 0 ? (
        <>
          <SelectMyChild data={data} />
          <Spacing size={20} />
          <div className={'flex flex-col gap-[16px]'}>
            <ScheduleBox
              scheduleType={'toggle'}
              mainTitle={'샤론음악학원'}
              subElement={'매주 월,화,수'}
            />
            <ScheduleBox
              scheduleType={'toggle'}
              mainTitle={'샤론음악학원'}
              subElement={'매주 월,화,수'}
            />
          </div>
          <div className={'absolute bottom-[95px] w-full flex justify-center'}>
            <Button
              buttonType={'Plain-blue'}
              label={`빵빵이 교육비 보고서 보기`}
            />
          </div>
        </>
      ) : (
        <div
          className={
            'absolute top-1/2 font-nsk body-15 text-gray-600 w-full text-center'
          }>
          {'아이를 먼저 등록해주세요!'}
        </div>
      )}

      <div className={'absolute right-[10px] bottom-[90px] cursor-pointer'}>
        <Icon icon={'Add'} classStyle={'h-[60px] w-[60px]'} />
      </div>
    </>
  )
}

export default AcademyDashboard
