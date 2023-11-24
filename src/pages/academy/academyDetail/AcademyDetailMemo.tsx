import Label from '@/components/common/label/Label'
import { AcademyMemo } from '@/libs/api/academy/AcademyType'
import { GetAllDashBoardResponse } from '@/libs/api/dashboard/DashBoardType'
const AcademyDetailMemo = ({
  memoData
}: {
  memoData: GetAllDashBoardResponse
}) => {
  return (
    <div>
      <h3 className={'subHead-18  py-[20px]'}>{'간편 메모하기'}</h3>
      <div
        className={'grid grid-rows-3 grid-cols-2 justify-items-stretch gap-2'}>
        {AcademyMemo.map((data, index) => {
          return (
            <Label
              key={index}
              color={
                memoData.simpleMemo[data.serverData] ? 'selected' : 'default'
              }
              variant={'medium'}
              label={data.clientData}
            />
          )
        })}
      </div>
    </div>
  )
}

export default AcademyDetailMemo
