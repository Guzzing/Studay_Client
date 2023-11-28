import { useState } from 'react'
import { Accordion } from '@/components/common/accordion/Accordion'
import Button from '@/components/common/button/Button'
import Icon from '@/components/common/icon/Icon'
import Label from '@/components/common/label/Label'
import ListRow from '@/components/common/listRow/ListRow'
import Modal from '@/components/common/modal/Modal'
import Profile from '@/components/common/profile/Profile'
import Spacing from '@/components/common/spacing/Spacing'
import { DATA } from '@/pages/calendar/data'

const CalendarPage = () => {
  // const { calendarId } = useParams()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleteModalOpen, setisDeleteModalOpen] = useState(false)

  return (
    <div className={'w-full h-full border px-[30px]'}>
      <Spacing size={110} />
      <div className={'relative h-[194px] w-full'}>
        <h2 className={'headline-25 py-[5px]'}>
          {DATA.academyInfo.academyName}
        </h2>
        <Icon
          icon={'Edit'}
          classStyle={'absolute top-0 right-0 cursor-pointer'}
        />
        <p className={'body-14 py-[5px]'}>{DATA.date}</p>
        <div className={'flex items-center caption-13 py-[5px]'}>
          <Icon icon={'Time'} />
          <span
            className={
              'pl-[5px]'
            }>{`${DATA.lessonInfo.lessonTimes[0].startTime} - ${DATA.lessonInfo.lessonTimes[0].endTime}`}</span>
        </div>
        <p className={'caption-13'}>{'반복: 매주 목요일, 토요일'}</p>
        <div className={'flex items-center body-14 pt-[15px]'}>
          <Icon icon={'MapPin'} />
          <p>{DATA.academyInfo.address}</p>
        </div>
        <div className={'absolute right-0 bottom-[45px]'}>
          <Label variant={'medium'} label={'국어'} icon={'Korean'} />
        </div>
      </div>
      <Accordion
        title={DATA.lessonInfo.lessonName}
        content={
          <div>
            <ListRow
              leftElement={
                <div className={'flex'}>
                  <span className={'px-[5px]'}>{'금액'}</span>
                </div>
              }
              rightElement={
                <span>
                  {DATA.lessonInfo.total_fee}
                  {'원'}
                </span>
              }
              className={'cursor-pointer'}
            />
            <ListRow
              leftElement={
                <div className={'flex'}>
                  <span className={'px-[5px]'}>{'정원'}</span>
                </div>
              }
              rightElement={<span>{DATA.lessonInfo.capacity}</span>}
              className={'cursor-pointer'}
            />
          </div>
        }
        rightElement={<Icon icon={'ArrowDown'} />}
        initialState={true}
        contentHeight={100}
      />
      <div className={'py-[12px]'}>
        <h2 className={'subhead-18'}>{'일정 수행중인 아이'}</h2>
        <div className={'flex items-center justify-start pt-[10px]'}>
          {DATA.childrenInfos.map(({ childId, childName }) => (
            <li key={childId} className={'list-none'}>
              <Profile imageSize={'M'} imageLabel={childName} />
            </li>
          ))}
        </div>
      </div>
      <div>
        <h2 className={'subhead-18'}>{'메모'}</h2>
        <div className={'h-[70px] overflow-auto'}>
          {DATA.childrenInfos.map(({ childId, memo }) => (
            <li
              key={childId}
              className={
                'list-none flex items-center justify-start overflow-scroll'
              }>
              <Icon icon={'Edit'} />
              {memo}
            </li>
          ))}
        </div>
      </div>
      <div className={'absolute left-[30px] bottom-[28px]'}>
        <Button
          buttonType={'Plain-blue'}
          label={'학원정보 보러가기'}
          onClick={() => setIsModalOpen(true)}
        />
        <Button
          buttonType={'Plain-red'}
          label={'일정 삭제하기'}
          className={'mt-[10px]'}
          onClick={() => setisDeleteModalOpen(true)}
        />
      </div>
      {isModalOpen && (
        <Modal>
          <div
            className={
              'w-[340px] h-[240px] px-[34px] py-[30px] flex flex-col bg-white-0 justify-around items-center rounded-[10px]'
            }>
            <p className={'subHead-18'}>{'어떤 아이의 정보를 확인할까요?'}</p>
            <div className={'flex items-center justify-start pt-[10px]'}>
              {DATA.childrenInfos.map(({ childId }) => (
                <li key={childId} className={'list-none'}>
                  <Profile imageSize={'M'} />
                </li>
              ))}
            </div>
            <Button
              buttonType={'Plain-blue'}
              label={'닫기'}
              fullWidth={false}
              width={'MW'}
              className={'w-[220px]'}
              onClick={() => setIsModalOpen(false)}
            />
          </div>
        </Modal>
      )}
      {isDeleteModalOpen && (
        <Modal>
          <div
            className={
              'w-[340px] h-[240px] px-[30px] py-[30px] flex flex-col bg-white-0 justify-around items-center rounded-[10px]'
            }>
            <p className={'subHead-18'}>{'일정을 삭제할까요?'}</p>
            <div
              className={'flex flex-col items-center justify-around pt-[10px]'}>
              <Button
                buttonType={'Plain-red'}
                label={'오늘 일정만 삭제'}
                className={'mb-[10px]'}
                fullWidth={false}
                width={'SW'}
              />
              <Button
                buttonType={'Plain-red'}
                label={'이후 모든일정 삭제'}
                className={'mb-[10px]'}
              />
              <Button
                buttonType={'Plain-blue'}
                label={'취소'}
                onClick={() => setisDeleteModalOpen(false)}
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default CalendarPage
