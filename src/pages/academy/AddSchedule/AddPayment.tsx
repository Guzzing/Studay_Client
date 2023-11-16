import { useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import ko from 'date-fns/locale/ko'
import CustomTimePicker from '@/components/academy/CustomTimePicker'
import Button from '@/components/common/button/Button'
import Input from '@/components/common/inputbox/input/Input'
import Select from '@/components/common/inputbox/select/Select'
const AddPayment = () => {
  const [paymentDate, setPaymentDate] = useState(new Date())
  registerLocale('ko', ko)
  return (
    <div
      className={
        'w-full flex flex-col items-center gap-[16px] border-b px-[20px]'
      }>
      <div
        className={
          'w-full flex flex-row items-center justify-center gap-[18px]'
        }>
        <Select
          title={'반복'}
          selectType={'Single'}
          fullWidth={true}
          options={['교재비', '특강비', '교육비', '기타']}
        />
        <div className={'flex flex-row w-full items-center gap-[7px]'}>
          <Input inputType={'Default'} fullWidth={true} />
          <div className={'subHead-18'}>{'원'}</div>
        </div>
      </div>
      <Button buttonType={'Plain-blue'} label={'추가하기'}></Button>
      <div
        className={
          'flex flex-row w-full border rounded-[10px] border-blue-350 px-[12px] py-[8px] justify-between items-center mb-[20px]'
        }>
        <div className={'text-black-800 body-15'}>{'학원비 결제 날짜'}</div>
        <DatePicker
          selected={paymentDate}
          locale={'ko'}
          onChange={() => {
            console.log('클릭')
          }}
          // minTime={setHours(new Date(0), 6)}
          // maxTime={setHours(new Date(0), 22)}
          dateFormat={`매달 dd일`}
          customInput={<CustomTimePicker value={''} />}
        />
      </div>
    </div>
  )
}

export default AddPayment
