import { useLocation, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Loading from '@/components/Loading/Loading'
import { Accordion } from '@/components/common/accordion/Accordion'
import Button from '@/components/common/button/Button'
import Icon from '@/components/common/icon/Icon'
import ListRow from '@/components/common/listRow/ListRow'
import Profile from '@/components/common/profile/Profile'
import Spacing from '@/components/common/spacing/Spacing'
import {
  getAcademiesScheduleDetail,
  deleteAcademySchedule
} from '@/libs/api/academy/scheduleDetail/ScheduleDetailApi'
import useModal from '@/libs/hooks/useModal'
const DetailSchedulePage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const scheduleId = queryParams.get('scheduleId')
  const lessonId = queryParams.get('lessonId')
  const child = queryParams.get('child')
  const { open, close, Modal } = useModal()

  const { data, isLoading } = useQuery({
    queryKey: ['schedule', scheduleId],
    queryFn: () =>
      getAcademiesScheduleDetail({
        lessonId: Number(lessonId as string),
        childId: Number(child as string),
        scheduleId: Number(scheduleId as string)
      })
  })

  const deleteSchedule = async (all: boolean) => {
    try {
      await deleteAcademySchedule({
        academyScheduleId: Number(scheduleId as string),
        isAllDeleted: all ? true : false,
        requestDate: data?.date.slice(0, -4).trim() as string
      })
      navigate('/schedule')
    } catch {
      throw new Error('error!')
    }
  }

  if (isLoading) {
    return <Loading />
  }
  return (
    <div className={'border h-full relative'}>
      <Spacing size={110} />
      <div className={'pl-[20px] h-[194px] relative'}>
        <Icon
          icon={'Edit'}
          classStyle={'absolute top-0 right-[20px] cursor-pointer'}
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
      </div>
      <div className={'h-[150px] relative'}>
        <div
          className={
            'absolute top-[-20px] left-[50%] h-full w-full translate-x-[-50%]'
          }>
          <Accordion
            initialState={true}
            title={data?.lessonInfo.lessonName as string}
            rightElement={<Icon icon={'ArrowDown'} />}
            contentHeight={100}
            content={
              <>
                <ListRow
                  leftElement={<span>{'정원'}</span>}
                  rightElement={
                    <span className={'body-18'}>
                      {data?.lessonInfo.capacity + '명 정원'}
                    </span>
                  }
                />
                <ListRow
                  leftElement={<span>{'금액'}</span>}
                  rightElement={
                    <span className={'body-18'}>
                      {data?.lessonInfo.totalFee + '원'}
                    </span>
                  }
                />
              </>
            }
          />
        </div>
      </div>
      <div className={'pl-[20px] pt-[10px] h-[165px]'}>
        <h2 className={'subHead-18 mb-[10px]'}>{'일정 수행중인 아이'}</h2>
        <div className={'flex'}>
          <div
            key={data?.childrenInfo.childId}
            className={'list-none'}
            onClick={() =>
              navigate(`academies/${data?.childrenInfo.dashBoardId}/edit`)
            }>
            <Profile
              imageSize={'M'}
              imageUrl={data?.childrenInfo.imageUrl}
              imageLabel={data?.childrenInfo.childName}
            />
          </div>
        </div>
      </div>
      <div className={'px-[20px] h-[265px] pt-[10px]'}>
        <h2 className={'subHead-18 mb-[10px]'}>{'메모'}</h2>
        <ul className={'h-[50px]'}>
          <div
            key={data?.childrenInfo.childId}
            className={'flex h-[50px] overflow-auto'}>
            <span>{data?.childrenInfo.memo}</span>
          </div>
        </ul>
        <div className={'h-[190px] flex flex-col items-center mt-[20px]'}>
          <Button
            buttonType={'Plain-red'}
            label={'일정 삭제하기'}
            className={'mt-[10px]'}
            onClick={open}
          />
        </div>
        <Modal
          children={
            <div
              className={
                'h-[240px] w-[370px] bg-white-0 p-[24px] px-[50px] flex flex-col items-center justify-between rounded-[15px]'
              }>
              <h2 className={'subHead-18'}>{'일정을 삭제할까요?'}</h2>
              <Button
                buttonType={'Plain-red'}
                label={'오늘 일정만 삭제'}
                onClick={() => {
                  deleteSchedule(false)
                }}
              />
              <Button
                buttonType={'Plain-red'}
                label={'이후 모든일정 삭제'}
                onClick={() => {
                  deleteSchedule(true)
                }}
              />
              <Button
                buttonType={'Plain-blue'}
                label={'취소하기'}
                onClick={close}
              />
            </div>
          }
        />
      </div>
    </div>
  )
}

export default DetailSchedulePage
