import { useAtom } from 'jotai'
import { scheduleAtom } from '@/libs/store/scheduleInfo'

const AddScheduleMemo = () => {
  const [scheduleInfo, setScheduleInfo] = useAtom(scheduleAtom)
  return (
    <div>
      <h2 className={'body-16'}>{'메모'}</h2>
      <textarea
        className={
          'flex flex-row w-full border rounded-[10px] h-4/5 bg-white-200 border-blue-350 justify-between items-center resize-none px-[20px] py-[20px]'
        }
        value={scheduleInfo.memo}
        onChange={(e) => {
          setScheduleInfo({
            ...scheduleInfo,
            memo: e.target.value
          })
        }}
      />
    </div>
  )
}

export default AddScheduleMemo
