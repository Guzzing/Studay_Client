import { useState } from 'react'
import Button from '@/components/common/button/Button.tsx'

const Silder = ({ onChange }: { onChange: (e: number) => void }) => {
  const [value, setValue] = useState(0)
  const [infinityMoney, setInfinityMoney] = useState(false)
  const parseAcademyFee = (value: number) => {
    switch (value) {
      case 0: {
        return '0 ~ 10만원'
      }
      case 100_000: {
        return '10만원 ~ 20만원'
      }
      case 200_000: {
        return '20만원 ~ 30만원'
      }
      case 300_000: {
        return '30만원 ~ 40만원'
      }
      case 400_000: {
        return '40만원 ~ 50만원'
      }
      case 500_000: {
        return '50만원 ~ 60만원'
      }
      case 600_000: {
        return '60만원 ~ 70만원'
      }
      case 700_000: {
        return '70만원 이상'
      }
    }
  }
  return (
    <div className={'flex flex-col w-full justify-center items-center'}>
      <div className={'headline-20 mb-6 text-center'}>
        {infinityMoney ? '금액은 상관 없어요' : parseAcademyFee(value)}
      </div>
      <div className={'relative w-[300px] mb-6'}>
        <div
          className={
            'w-[4px] h-[30px] left-[46px] bg-gray-200 rounded-lg absolute'
          }
        />
        <div className={'absolute top-[35px] body-15 text-gray-200'}>{'0'}</div>
        <div
          className={
            'w-[4px] h-[30px] left-[87px] bg-gray-200 rounded-lg absolute'
          }
        />
        <div
          className={'absolute top-[35px] body-15 left-[81px] text-gray-200'}>
          {'20'}
        </div>
        <div
          className={'absolute top-[35px] body-15 left-[41px] text-gray-200'}>
          {'10'}
        </div>
        <div
          className={
            'w-[4px] h-[30px] left-[128px] bg-gray-200 rounded-lg absolute'
          }
        />
        <div
          className={'absolute top-[35px] body-15 left-[122px] text-gray-200'}>
          {'30'}
        </div>
        <div
          className={
            'w-[4px] h-[30px] left-[169px] bg-gray-200 rounded-lg absolute'
          }
        />
        <div
          className={'absolute top-[35px] body-15 left-[163px] text-gray-200'}>
          {'40'}
        </div>
        <div
          className={
            'w-[4px] h-[30px] left-[209px] bg-gray-200 rounded-lg absolute'
          }
        />
        <div
          className={'absolute top-[35px] body-15 left-[200px] text-gray-200'}>
          {'50'}
        </div>
        <div
          className={
            'w-[4px] h-[30px] left-[249px] bg-gray-200 rounded-lg absolute'
          }
        />
        <div
          className={'absolute top-[35px] body-15 left-[243px] text-gray-200'}>
          {'60'}
        </div>
        <div
          className={'absolute top-[35px] body-15 left-[286px] text-gray-200'}>
          {'70~'}
        </div>
        <input
          id={'labels-range-input'}
          type={'range'}
          value={value / 1000}
          min={0}
          max={700}
          step={100}
          className={
            'w-full h-[4px] bg-gray-200 rounded-lg relative appearance-none cursor-pointer z-10'
          }
          onChange={(e) => {
            const newValue = Number.parseInt(e.target.value, 10)
            setValue(newValue * 1000)
            setInfinityMoney(false)
            onChange(newValue * 1000)
          }}
        />
      </div>
      <div className={'mt-[10px]'}>
        <Button
          label={'금액은 상관없어요'}
          buttonType={'Plain-blue'}
          width={'LW'}
          height={'SH'}
          onClick={() => {
            setInfinityMoney(true)
            onChange(0)
          }}
        />
      </div>
    </div>
  )
}

export default Silder
