import React from 'react'
import { SigunguType } from '../../types/selectcity.ts'
import Input from '@/components/common/inputbox/input/Input.tsx'
import Select from '@/components/common/inputbox/select/Select.tsx'
import StepQuestion from '@/components/common/stepquestion/StepQuestion.tsx'

interface SelectCityStepProps extends SigunguType {
  sido: string
  onChange: (selectedSido: string) => void
  onClick: (number: number) => void
}

const SelectCityStep2 = ({
  sido,
  sigunguArr,
  select,
  onChange,
  onClick
}: SelectCityStepProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value) // Call the passed onChange handler with the new value
  }

  return (
    <>
      <span className={'headline-30 text-left mt-[60px] ml-[37px]'}>
        {`${sido}을(를) 선택하셨군요!`}
      </span>
      <span className={'headline-30 text-left mt-[15px] ml-[37px] mb-[44px]'}>
        {'어떤 지역구인가요?'}
      </span>
      <div className={'flex flex-col ml-[37px]'}>
        <StepQuestion text={'도시'} step={1} />
        <div className={'mt-[14px] mb-[30px]'}>
          <Input
            inputType={'Default'}
            fullWidth={true}
            value={sido}
            disabled={true}
            onClick={() => onClick(1)}
          ></Input>
        </div>
        <StepQuestion text={'지역구'} step={2}></StepQuestion>
        <div className={'mt-[14px]'}>
          <Select
            selectType={'Single'}
            fullWidth={true}
            options={['', ...sigunguArr]}
            value={select}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  )
}

export default SelectCityStep2
