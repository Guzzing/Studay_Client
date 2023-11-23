import { useEffect, useRef, useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import ko from 'date-fns/locale/ko'
import { useAtom } from 'jotai'
import CustomTimePicker from '@/components/academy/CustomTimePicker'
import Button from '@/components/common/button/Button'
import Icon from '@/components/common/icon/Icon'
import Input from '@/components/common/inputbox/input/Input'
import Select from '@/components/common/inputbox/select/Select'
import { academyInfoAtom } from '@/libs/store/academyInfo'
import { getFormattingDate } from '@/libs/utils/dateParse'
const AddPayment = () => {
  const selectRef = useRef<HTMLSelectElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [academyInfo, setAcademyInfo] = useAtom(academyInfoAtom)
  const [paymentDate, setPaymentDate] = useState(
    academyInfo.paymentInfo.paymentDay
      ? new Date(academyInfo.paymentInfo.paymentDay)
      : new Date()
  )

  const [paymentInfo, setPaymentInfo] = useState({
    paymentName: '',
    paymentFee: 0
  })
  const deletePayment = (key: keyof typeof academyInfo.paymentInfo) => {
    setAcademyInfo({
      ...academyInfo,
      paymentInfo: {
        ...academyInfo.paymentInfo,
        [key]: 0
      }
    })
  }

  useEffect(() => {
    if (academyInfo.paymentInfo.paymentDay.length === 0)
      setAcademyInfo({
        ...academyInfo,
        paymentInfo: {
          ...academyInfo.paymentInfo,
          paymentDay: getFormattingDate(new Date())
        }
      })
  }, [academyInfo, setAcademyInfo])

  const onSelect = (time: Date) => {
    setAcademyInfo({
      ...academyInfo,
      paymentInfo: {
        ...academyInfo.paymentInfo,
        paymentDay: getFormattingDate(time)
      }
    })
    setPaymentDate(time)
  }

  const paymentTypeKeys = Object.keys(academyInfo.paymentInfo).slice(
    0,
    length - 1
  ) as unknown as Array<
    keyof Omit<typeof academyInfo.paymentInfo, 'paymentDay'>
  >

  const parseAcademyName = (name: keyof typeof academyInfo.paymentInfo) => {
    switch (name) {
      case 'educationFee': {
        return '교육비'
      }
      case 'shuttleFee': {
        return '셔틀비'
      }
      case 'bookFee': {
        return '교재비'
      }
      default: {
        return '기타'
      }
    }
  }

  const handlePayment = () => {
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
    if (selectRef.current) {
      selectRef.current.selectedIndex = 0
    }
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }
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
          selecttype={'Single'}
          fullWidth={true}
          placeholder={'비용 종류 선택'}
          options={['교재비', '교육비', '셔틀비', '기타']}
          ref={selectRef}
          onChange={(e) =>
            setPaymentInfo({ ...paymentInfo, paymentName: e.target.value })
          }
        />
        <div className={'flex flex-row w-full items-center gap-[7px]'}>
          <Input
            inputType={'Default'}
            fullWidth={true}
            ref={inputRef}
            onChange={(e) => {
              console.log(e.target.value)
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
        buttonType={
          paymentInfo.paymentName.length > 0 && paymentInfo.paymentFee > 0
            ? 'Plain-blue'
            : 'Plain-disabled'
        }
        disabled={
          paymentInfo.paymentName.length > 0 && paymentInfo.paymentFee > 0
            ? false
            : true
        }
        label={'추가하기'}
        onClick={() => {
          handlePayment()
        }}></Button>
      <div className={'w-full'}>
        {paymentTypeKeys.map((key) => {
          if (academyInfo.paymentInfo[key] > 0)
            return (
              <div
                key={key}
                className={
                  'flex w-full justify-between items-center body-16 text-gray-600 mb-2'
                }>
                <div>{parseAcademyName(key)}</div>
                <div className={'flex flex-row gap-1'}>
                  {academyInfo.paymentInfo[key].toLocaleString('ko-KR')}
                  {'원'}
                  <Icon
                    icon={'Delete'}
                    classStyle={'cursor-pointer'}
                    onClick={() => {
                      deletePayment(key)
                    }}
                  />
                </div>
              </div>
            )
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
          onChange={onSelect}
          dateFormat={`매달 dd일`}
          customInput={<CustomTimePicker value={''} />}
        />
      </div>
    </div>
  )
}

export default AddPayment
