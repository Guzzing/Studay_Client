import React from 'react'
import { DongneType } from '../../types/selectcity.ts'
import Input from '@/components/common/inputbox/input/Input.tsx'
import Select from '@/components/common/inputbox/select/Select.tsx'
import StepQuestion from '@/components/common/stepquestion/StepQuestion.tsx'

interface SelectCityStepProps extends DongneType {
  sido: string
  sigungu: string
  onChange: (selectedSido: string) => void
}

const SelectCityStep3 = ({
  dongneArr,
  select,
  sido,
  sigungu,
  onChange
}: SelectCityStepProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value) // Call the passed onChange handler with the new value
  }

  return (
    <>
      <span className={'headline-30 text-left mt-[60px] ml-[37px]'}>
        {`${sigungu}을(를) 선택하셨군요!`}
      </span>
      <span className={'headline-30 text-left mt-[15px] ml-[37px] mb-[44px]'}>
        {'어떤 동네인지 알려주세요'}
      </span>
      <div className={'flex flex-col ml-[37px]'}>
        <StepQuestion text={'도시'} step={1} />
        <div className={'mt-[14px] mb-[30px]'}>
          <Input
            inputType={'Default'}
            fullWidth={true}
            value={sido}
            disabled={true}
          ></Input>
        </div>
        <StepQuestion text={'지역구'} step={2}></StepQuestion>
        <div className={'mt-[14px] mb-[30px]'}>
          <Input
            inputType={'Default'}
            fullWidth={true}
            value={sigungu}
            disabled={true}
          ></Input>
        </div>
        <StepQuestion text={'동네'} step={3}></StepQuestion>
        <div className={'mt-[14px] mb-[30px]'}>
          <Select
            selectType={'Single'}
            fullWidth={true}
            options={['', ...dongneArr]}
            value={select}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  )
}

export default SelectCityStep3
