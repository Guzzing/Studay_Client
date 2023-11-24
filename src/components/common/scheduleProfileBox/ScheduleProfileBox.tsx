import Icon from '@/components/common/icon/Icon.tsx'
import { ScheduleProfileBoxProps } from '@/components/common/scheduleProfileBox/ScheduleProfileBoxType.ts'

const ScheduleProfileBox = ({
  mainTitle,
  handleEdit,
  handleDelete,
  profileNode
}: ScheduleProfileBoxProps) => {
  return (
    <div
      className={
        'flex flex-col w-[360px] h-[88px] shadow-md pt-[22px] pb-[20px] px-[24px] rounded-[20px] font-nsk'
      }>
      <div className={'flex flex-row w-full'}>
        <span className={'w-full subHead-18'}>{mainTitle}</span>
        <div className={'flex flex-row  w-[20%]'}>
          <Icon
            icon={'Edit'}
            onClick={handleEdit}
            classStyle={'cursor-pointer'}
          />
          <Icon
            icon={'Close'}
            onClick={handleDelete}
            classStyle={'cursor-pointer'}
          />
        </div>
      </div>
      <div className={'flex flex-row '}>
        <div className={'flex flex-row w-full items-center'}>
          <Icon icon={'Time'} classStyle={'mr-[2px]'} />
          <span>{'오후 4시에 종료'}</span>
        </div>
        <div className={'w-full'}>{profileNode}</div>
      </div>
    </div>
  )
}
export default ScheduleProfileBox
