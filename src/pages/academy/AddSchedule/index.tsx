import { useAtom } from 'jotai'
import AddSchedule from './AddSchedule'
import Button from '@/components/common/button/Button'
import Spacing from '@/components/common/spacing/Spacing'
import { academyInfoAtom } from '@/libs/store/academyInfo'
import AddAcademyInfo from '@/pages/academy/AddSchedule/AddAcademyInfo'
import AddAcademyName from '@/pages/academy/AddSchedule/AddAcademyName'
import AddMemo from '@/pages/academy/AddSchedule/AddMemo'
import AddPayment from '@/pages/academy/AddSchedule/AddPayment'
const AddAcademy = () => {
  return (
    <div className={'w-full overflow-scroll relative scrollbar-hide'}>
      <Spacing size={100} />
      <AddAcademyName />
      <h2 className={'body-16 text-black-800 px-[24px] mb-[14px]'}>
        {'요일 선택하기'}
      </h2>
      <AddSchedule />
      <h2 className={'body-16 text-black-800 px-[24px] my-[14px]'}>
        {'학원 정보 입력'}
      </h2>
      <AddAcademyInfo />
      <h2 className={'body-16 text-black-800 px-[24px] my-[14px]'}>
        {'학원비 입력하기'}
      </h2>
      <AddPayment />
      <h2 className={'body-16 text-black-800 px-[24px] my-[14px]'}>
        {'간편 메모하기'}
      </h2>
      <AddMemo />
      <Spacing size={40} />
      <Button buttonType={'Square'} label={'저장 완료'} fullWidth={true} />
    </div>
  )
}

export default AddAcademy
