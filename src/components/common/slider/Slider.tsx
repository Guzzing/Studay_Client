import { useState } from 'react'

const Silder = ({
  minNum = 0,
  maxNum = 100_000
}: {
  minNum: number
  maxNum: number
}) => {
  const [value, setValue] = useState(1)
  return (
    <div className={'relative w-full'}>
      <div>{value}</div>
      <div
        className={
          'w-[4px] h-[20px] absolute left-[100px] bg-gray-200 rounded-lg'
        }
      />
      <div
        className={
          'w-[4px] h-[20px] absolute left-[200px] bg-gray-200 rounded-lg'
        }
      />
      <div
        className={
          'w-[4px] h-[20px] absolute left-[30px] bg-gray-200 rounded-lg'
        }
      />
      <div
        className={'w-[4px] h-[20px] absolute left-40 bg-gray-200 rounded-lg'}
      />
      <div
        className={'w-[4px] h-[20px]absolute left-50  bg-gray-200 rounded-lg'}
      />
      <input
        type={'range'}
        className={'w-[300px] z-10'}
        min={minNum}
        max={maxNum}
        step={1000}
        value={value}
        onChange={(e) => {
          const newValue = Number.parseInt(e.target.value, 10)
          setValue(newValue)
        }}
      />
    </div>
  )
}

export default Silder
