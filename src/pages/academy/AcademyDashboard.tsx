import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Loading from '@/components/Loading/Loading'
import SelectMyChild from '@/components/academy/SelectMyChlid'
import Button from '@/components/common/button/Button'
import Icon from '@/components/common/icon/Icon'
import ScheduleBox from '@/components/common/scheduleBox/ScheduleBox'
import Spacing from '@/components/common/spacing/Spacing'
import { getChildrenInfo } from '@/libs/api/children/ChildrenApi'
import { GetChildrenInfoResponse } from '@/libs/api/children/ChildrenType'

const AcademyDashboard = () => {
  const [child, setChild] = useState<GetChildrenInfoResponse>()
  const navigate = useNavigate()
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ['children'],
    queryFn: () => getChildrenInfo()
  })

  useEffect(() => {
    if (isSuccess) setChild(data[0])
  }, [data])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <Spacing size={100} />
      <div className={'flex flex-col items-center'}>
        {data && data?.length > 0 ? (
          <div>
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
            <div className={'absolute bottom-[95px] w-full flex '}>
              <Button
                buttonType={'Plain-blue'}
                label={`${child?.nickname} 교육비 보고서 보기`}
              />
            </div>
          </div>
        ) : (
          <div className={'absolute top-1/2 font-nsk body-15 text-gray-600'}>
            {'아이를 먼저 등록해주세요!'}
          </div>
        )}
      </div>
      <div
        className={'absolute right-[10px] bottom-[90px] cursor-pointer'}
        onClick={() => navigate('register')}>
        <Icon icon={'Add'} classStyle={'h-[60px] w-[60px]'} />
      </div>
    </div>
  )
}

export default AcademyDashboard
