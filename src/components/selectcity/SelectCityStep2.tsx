import { SigunguType } from '../../types/selectcity.ts'
import Select from '@/components/common/inputbox/select/Select.tsx'
import StepQuestion from '@/components/common/stepquestion/StepQuestion.tsx'
import TextBox from '@/components/common/textBox/TextBox.tsx'

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
  return (
    <>
      <span className={'font-nsk headline-30 text-left mt-[60px] ml-[37px]'}>
        {`${sido}를 선택하셨군요!`}
      </span>
      <span
        className={
          'font-nsk headline-30 text-left mt-[15px] ml-[37px] mb-[44px]'
        }>
        {'어떤 지역구인가요?'}
      </span>
      <div className={'flex flex-col ml-[37px]'}>
        <StepQuestion text={'도시'} step={1} />
        <div className={'mt-[14px] mb-[30px]'}>
          <TextBox
            width={323}
            text={sido}
            isCursor={true}
            onClick={() => onClick(1)}></TextBox>
        </div>
        <StepQuestion text={'지역구'} step={2}></StepQuestion>
        <div className={'mt-[14px]'}>
          <Select
            isPlace={true}
            placeholder={'지역구를 선택해 주세요'}
            selecttype={'Single'}
            fullWidth={true}
            options={sigunguArr}
            value={select}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      </div>
    </>
  )
}

export default SelectCityStep2
