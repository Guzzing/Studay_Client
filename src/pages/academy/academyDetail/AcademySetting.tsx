import Button from '@/components/common/button/Button'
import { GetAllDashBoardResponse } from '@/libs/api/dashboard/DashBoardType'
const AcademySetting = ({ data }: { data: GetAllDashBoardResponse }) => {
  return (
    <div className={'w-full mt-[37px] px-[20px]'}>
      {data.isActive ? (
        <div className={'flex flex-col gap-[12px]'}>
          <Button
            fullWidth={true}
            buttonType={'Plain-blue'}
            label={'리뷰 남기기'}
          />
          <Button
            fullWidth={true}
            buttonType={'Plain-red'}
            label={'학원을 그만뒀어요'}
          />
        </div>
      ) : (
        <div className={'flex flex-col gap-[12px]'}>
          <Button
            buttonType={'Plain-blue'}
            label={'학원을 등록했어요'}
            fullWidth={true}
          />
          <Button
            buttonType={'Plain-red'}
            label={'삭제하기'}
            fullWidth={true}
          />
        </div>
      )}
    </div>
  )
}

export default AcademySetting
