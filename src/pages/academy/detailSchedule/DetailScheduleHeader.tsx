import { useNavigate } from 'react-router-dom'
import Button from '@/components/common/button/Button'
import Icon from '@/components/common/icon/Icon'
import Spacing from '@/components/common/spacing/Spacing'
import { ScheduleDetailResponse } from '@/libs/api/academy/scheduleDetail/ScheduleDetailType'
import useModal from '@/libs/hooks/useModal'
const DetailScheduleHeader = ({
  data,
  scheduleId
}: {
  data: ScheduleDetailResponse | undefined
  scheduleId: string
}) => {
  const navigate = useNavigate()
  const { open, close, Modal } = useModal()
  return (
    <>
      <div className={'pl-[20px] h-[194px] relative'}>
        <Icon
          icon={'Edit'}
          classStyle={'absolute top-0 right-[20px] cursor-pointer'}
          onClick={() => open()}
        />
        <h2 className={'headline-25 mb-[10px]'}>
          {data?.academyInfo.academyName}
        </h2>
        <p className={'body-14 mb-[6px]'}>{data?.date}</p>
        <div className={'flex items-center pb-[10px]'}>
          <Icon icon={'Time'} classStyle={'mr-[5px]'} />
          <span>
            {data?.lessonInfo.lessonTimes.startTime +
              ' ~ ' +
              data?.lessonInfo.lessonTimes.endTime}
          </span>
        </div>
        <div className={'flex items-center relative w-[350px] h-[30px]'}>
          <Icon icon={'MapPin'} classStyle={'w-[30px] ml-[-4px]'} />
          <div className={'w-full h-full grow'}>
            <span className={'body-14'}>{data?.academyInfo.address}</span>
          </div>
        </div>
        <Modal
          children={
            <div
              className={
                'h-[240px] w-[370px] bg-white-0 p-[24px] px-[50px] flex flex-col items-center justify-between rounded-[15px]'
              }>
              <h2 className={'subHead-18'}>{'일정을 수정할까요?'}</h2>
              <Button
                buttonType={'Plain-blue'}
                label={'오늘 일정 이후만 수정'}
                onClick={() => {
                  navigate(`/schedule/${scheduleId}/edit`, {
                    state: {
                      isAllUpdated: false
                    }
                  })
                }}
              />
              <Button
                buttonType={'Plain-blue'}
                label={'모든 일정 수정'}
                onClick={() => {
                  navigate(`/schedule/${scheduleId}/edit`, {
                    state: {
                      isAllUpdated: true
                    }
                  })
                }}
              />
              <Button
                buttonType={'Plain-red'}
                label={'취소하기'}
                onClick={close}
              />
            </div>
          }
        />
      </div>
    </>
  )
}

export default DetailScheduleHeader
