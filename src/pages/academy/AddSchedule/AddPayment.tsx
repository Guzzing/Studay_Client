import { useEffect, useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import ko from 'date-fns/locale/ko'
import { useAtom } from 'jotai'
import CustomTimePicker from '@/components/academy/CustomTimePicker'
import Button from '@/components/common/button/Button'
import Input from '@/components/common/inputbox/input/Input'
import Select from '@/components/common/inputbox/select/Select'
import { academyInfoAtom } from '@/libs/store/academyInfo'
const AddPayment = () => {
  const [paymentDate, _] = useState(new Date())
  const [academyInfo, setAcademyInfo] = useAtom(academyInfoAtom)
  const [paymentInfo, setPaymentInfo] = useState({
    paymentName: '',
    paymentFee: 0
  })
  const typeKeys = Object.keys(academyInfo.paymentInfo) as Array<
    keyof typeof academyInfo.paymentInfo
  >
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const parseAcademyName = (name: string) => {
    if (name === 'educationFee') return '교육비'
  }
  const handlePayment = () => {
    if (paymentInfo.paymentFee === 0) {
      alert('0원을 설정할수 없습니다.')
      return
    }
    switch (paymentInfo.paymentName) {
      case '교육비': {
        setAcademyInfo({
          ...academyInfo,
          paymentInfo: {
            ...academyInfo.paymentInfo,
            educationFee: paymentInfo.paymentFee
          }
        })
        break
      }
      case '기타': {
        setAcademyInfo({
          ...academyInfo,
          paymentInfo: {
            ...academyInfo.paymentInfo,
            etcFee: paymentInfo.paymentFee
          }
        })
        break
      }
      case '셔틀비': {
        {
          setAcademyInfo({
            ...academyInfo,
            paymentInfo: {
              ...academyInfo.paymentInfo,
              shuttleFee: paymentInfo.paymentFee
            }
          })
        }
        break
      }
      case '교재비': {
        {
          setAcademyInfo({
            ...academyInfo,
            paymentInfo: {
              ...academyInfo.paymentInfo,
              bookFee: paymentInfo.paymentFee
            }
          })
        }
      }
    }
    setPaymentInfo({
      paymentFee: 0,
      paymentName: ''
    })
  }
  useEffect(() => {
    console.log(paymentInfo)
  }, [paymentInfo])
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
          options={['교재비', '교육비', '셔틀비', '기타']}
          onChange={(e) =>
            setPaymentInfo({ paymentFee: 0, paymentName: e.target.value })
          }
        />
        <div className={'flex flex-row w-full items-center gap-[7px]'}>
          <Input
            inputType={'Default'}
            fullWidth={true}
            onChange={(e) => {
              setPaymentInfo({
                ...paymentInfo,
                paymentFee: Number.parseInt(e.target.value, 10)
              })
            }}
          />
          <div className={'subHead-18'}>{'원'}</div>
        </div>
      </div>
      <Button
        buttonType={'Plain-blue'}
        label={'추가하기'}
        onClick={() => {
          handlePayment()
        }}></Button>
      <div>
        {typeKeys.map((key) => {
          if (academyInfo.paymentInfo[key] > 0) return <div>{key}</div>
        })}
      </div>
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
          dateFormat={`매달 dd일`}
          customInput={<CustomTimePicker value={''} />}
        />
      </div>
    </div>
  )
}

export default AddPayment
