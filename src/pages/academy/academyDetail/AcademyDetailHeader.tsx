import { useNavigate } from 'react-router-dom'
import Loading from '@/components/Loading/Loading'
import Icon from '@/components/common/icon/Icon'
import Label from '@/components/common/label/Label'
import { GetAllDashBoardResponse } from '@/libs/api/dashboard/DashBoardType'
import { getWeekday } from '@/libs/utils/weekParse'

const AcademyDetailHeader = ({ data }: { data: GetAllDashBoardResponse }) => {
  const navigate = useNavigate()
  return (
    <>
      {data ? (
        <>
          <div className={'flex flex-row justify-between mb-[20px]'}>
            <h1 className={'headline-25 w-4/6'}>
              {data?.academyInfo.academyName}
            </h1>
            <div className={'flex gap-2 items-center'}>
              {data.isActive ? (
                ''
              ) : (
                <Label variant={'small'} label={'미등록'} color={'disabled'} />
              )}
              <Icon
                icon={'Edit'}
                classStyle={'cursor-pointer'}
                onClick={() => {
                  navigate('edit', {
                    state: data.dashboardId
                  })
                }}
              />
            </div>
          </div>
          <div className={'w-full mb-[20px]'}>
            {data?.schedules.map((data, index) => (
              <div className={'flex flex-row items-center gap-2'} key={index}>
                <div className={'body-14'}>
                  {'매주 '}
                  {getWeekday([data])}
                  {'요일'}
                </div>
                <Icon icon={'Time'} />
                <div
                  className={
                    'caption-13 text-gray-700 flex items-center justify-center'
                  }>
                  {data.startTime}
                  {' ~ '}
                  {data.endTime}
                </div>
              </div>
            ))}
          </div>
          <div className={'flex gap-2 mb-[20px]'}>
            <Icon icon={'MapPin'} />
            <div className={'body-14 w-11/12'}>
              {data?.academyInfo.fullAddress}
            </div>
          </div>
          <div className={'flex flex-row gap-[14px] mb-[40px]'}>
            <Label
              variant={'medium'}
              label={data ? data?.academyInfo.areaOfExpertise : ''}
            />
            {data?.academyInfo.shuttleAvailability && (
              <Label
                variant={'medium'}
                color={'selected'}
                label={'셔틀 운영'}
              />
            )}
          </div>
          <div className={'w-full bg-gray-100 h-[1px]'}></div>
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default AcademyDetailHeader
