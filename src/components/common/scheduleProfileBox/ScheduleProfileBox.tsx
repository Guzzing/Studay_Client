import Icon from '@/components/common/icon/Icon.tsx'
import { ScheduleProfileBoxProps } from '@/components/common/scheduleProfileBox/ScheduleProfileBoxType.ts'

const ScheduleProfileBox = ({
  mainTitle,
  subTitle,
  handleDetail,
  children
}: ScheduleProfileBoxProps) => {
  return (
    <div
      className={
        'flex flex-col w-[360px] h-[88px] shadow-md pt-[22px] pb-[20px] px-[24px] rounded-[20px] font-nsk cursor-pointer'
      }
      onClick={() => {
        handleDetail()
      }}>
      <div className={'flex flex-row w-full mb-[2px]'}>
        <span
          className={
            'w-full subHead-18 text-ellipsis overflow-hidden whitespace-nowrap'
          }>
          {mainTitle}
        </span>
      </div>
      <div className={'flex flex-row '}>
        <div className={'flex flex-row w-full items-center'}>
          <Icon icon={'Time'} classStyle={'mr-[2px]'} />
          <span>{subTitle}</span>
        </div>
        <div className={'flex flex-row w-full justify-end'}>{children}</div>
      </div>
    </div>
  )
}
export default ScheduleProfileBox
