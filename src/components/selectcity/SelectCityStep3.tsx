import { DongneType } from '../../types/selectcity.ts'
import Select from '@/components/common/inputbox/select/Select.tsx'
import StepQuestion from '@/components/common/stepquestion/StepQuestion.tsx'
import TextBox from '@/components/common/textBox/TextBox.tsx'

interface SelectCityStepProps extends DongneType {
  sido: string
  sigungu: string
  onChange: (selectedSido: string) => void
  onClick: (number: number) => void
}

const SelectCityStep3 = ({
  dongneArr,
  select,
  sido,
  sigungu,
  onChange,
  onClick
}: SelectCityStepProps) => {
  return (
    <>
      <span className={'font-nsk headline-30 text-left mt-[60px] ml-[37px]'}>
        {`${sigungu}를 선택하셨군요!`}
      </span>
      <span
        className={
          'font-nsk headline-30 text-left mt-[15px] ml-[37px] mb-[44px]'
        }>
        {'어떤 동네인지 알려주세요'}
      </span>
      <div className={'flex flex-col ml-[37px]'}>
        <StepQuestion text={'도시'} step={1} />
        <div className={'mt-[14px] mb-[30px]'}>
          <TextBox
            width={323}
            text={sido}
            isCursor={true}
            onClick={() => onClick(1)}
          />
        </div>
        <StepQuestion text={'지역구'} step={2}></StepQuestion>
        <div className={'mt-[14px] mb-[30px]'}>
          <TextBox
            width={323}
            text={sigungu}
            isCursor={true}
            onClick={() => onClick(2)}
          />
        </div>
        <StepQuestion text={'동네'} step={3}></StepQuestion>
        <div className={'mt-[14px] mb-[30px]'}>
          <Select
            selectType={'Single'}
            fullWidth={true}
            options={['', ...dongneArr]}
            value={select}
            isPlace={true}
            placeholder={'동네를 선택해 주세요'}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      </div>
    </>
  )
}

export default SelectCityStep3
