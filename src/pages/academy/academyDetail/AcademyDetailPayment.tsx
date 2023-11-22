import ListRow from '@/components/common/listRow/ListRow'
import { GetAllDashBoardResponse } from '@/libs/api/dashboard/DashBoardType'
const AcademyDetailPayment = ({ data }: { data: GetAllDashBoardResponse }) => {
  const sumData =
    data.paymentInfo.educationFee +
    data.paymentInfo.bookFee +
    data.paymentInfo.etcFee +
    data.paymentInfo.shuttleFee
  return (
    <div className={'w-full'}>
      <h3 className={'subHead-18 mb-[18px]'}>{'학원비 모아보기'}</h3>
      <h4 className={'body-16 mb-[24px]'}>
        {'💰 매달 '}
        <span className={'text-blue-500'}>
          {data.paymentInfo.paymentDay.split('-').splice(-1)}
          {'일'}
        </span>
        {' 결제가 필요해요.'}
      </h4>
      <h1 className={'headline-25 px-[5px] mb-[17px]'}>
        {'총 '}
        {sumData.toLocaleString('ko-KR')}
        {'원'}
      </h1>
      {sumData > 0 ? (
        <>
          {data.paymentInfo.educationFee > 0 && (
            <ListRow
              hasBorder={false}
              leftElement={
                <div className={'body-16 text-gray-600'}>{'교육비'}</div>
              }
              rightElement={
                <div className={'body-16 text-gray-600'}>
                  {data.paymentInfo.educationFee.toLocaleString('ko-KR')}
                  {'원'}
                </div>
              }
            />
          )}
          {data.paymentInfo.bookFee > 0 && (
            <ListRow
              hasBorder={false}
              leftElement={
                <div className={'body-16 text-gray-600'}>{'교재비'}</div>
              }
              rightElement={
                <div className={'body-16 text-gray-600'}>
                  {data.paymentInfo.bookFee.toLocaleString('ko-KR')}
                  {'원'}
                </div>
              }
            />
          )}
          {data.paymentInfo.shuttleFee > 0 && (
            <ListRow
              hasBorder={false}
              leftElement={
                <div className={'body-16 text-gray-600'}>{'셔틀 이용비'}</div>
              }
              rightElement={
                <div className={'body-16 text-gray-600'}>
                  {data.paymentInfo.shuttleFee.toLocaleString('ko-KR')}
                  {'원'}
                </div>
              }
            />
          )}
          {data.paymentInfo.etcFee > 0 && (
            <ListRow
              hasBorder={false}
              leftElement={
                <div className={'body-16 text-gray-600'}>{'기타 지출'}</div>
              }
              rightElement={
                <div className={'body-16 text-gray-600'}>
                  {data.paymentInfo.etcFee.toLocaleString('ko-KR')}
                  {'원'}
                </div>
              }
            />
          )}
        </>
      ) : (
        <div
          className={
            'w-full h-[60px] pt-[10px] text-center caption-13 text-gray-700'
          }>
          {'교육비를 등록해주세요'}
        </div>
      )}
      <div className={'w-full bg-gray-100 h-[1px]'}></div>
    </div>
  )
}

export default AcademyDetailPayment
