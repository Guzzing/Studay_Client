import { useEffect, useMemo, useRef } from 'react'
import Select from '@/components/common/inputbox/select/Select.tsx'
import StepQuestion from '@/components/common/stepquestion/StepQuestion.tsx'
import TextBox from '@/components/common/textBox/TextBox.tsx'
import { SelectCityProps } from '@/components/selectcity/selectCityType.ts'
import { SELECT_CITY } from '@/pages/selectcity/constants.ts'

const CityStep = ({
  onChange,
  selectList,
  currentStep = 1,
  selectProvince = '',
  selectCity = '',
  onClick
}: SelectCityProps) => {
  const selectRef = useRef<HTMLSelectElement>(null)
  const MainTitle = useMemo(() => {
    const {
      DEFAULT_TITLE,
      SELECT_TITLE,
      SUB_TITLE,
      SUB_TITLE_CITY,
      SUB_TITLE_TOWN
    } = SELECT_CITY.TITLE
    if (currentStep === 1) {
      return [DEFAULT_TITLE, SUB_TITLE]
    } else if (currentStep === 2) {
      return [`${selectProvince} ${SELECT_TITLE}`, SUB_TITLE_CITY]
    } else {
      return [`${selectCity} ${SELECT_TITLE}`, SUB_TITLE_TOWN]
    }
  }, [currentStep])

  const StepQuestionTitle = useMemo(() => {
    const { PROVINCE, CITY, TOWN } = SELECT_CITY
    return [PROVINCE, CITY, TOWN] as const
  }, [])

  const SelectPlaceHolder = useMemo(() => {
    const { PROVINCE_TEXT, CITY_TEXT, TOWN_TEXT } = SELECT_CITY.PLACE_HOLDER
    return [PROVINCE_TEXT, CITY_TEXT, TOWN_TEXT]
  }, [])

  useEffect(() => {
    if (selectRef.current) {
      selectRef.current.selectedIndex = 0
    }
  }, [currentStep])

  return (
    <>
      <span className={'headline-30 text-left mt-[60px] ml-[37px] leading-8'}>
        {MainTitle[0]}
      </span>
      <span className={'headline-30 text-left ml-[37px] mb-[44px]'}>
        {MainTitle[1]}
      </span>
      <div className={'flex flex-col ml-[37px]'}>
        {currentStep > 1 && (
          <>
            <StepQuestion text={StepQuestionTitle[0]} step={1} />
            <div className={'mt-[14px] mb-[30px]'}>
              <TextBox
                width={323}
                text={selectProvince}
                isCursor={true}
                onClick={() => onClick && onClick(1)}></TextBox>
            </div>
          </>
        )}
        {currentStep > 2 && (
          <>
            <StepQuestion text={StepQuestionTitle[1]} step={2} />
            <div className={'mt-[14px] mb-[30px]'}>
              <TextBox
                width={323}
                text={selectCity}
                isCursor={true}
                onClick={() => onClick && onClick(2)}
              />
            </div>
          </>
        )}
        <StepQuestion
          text={StepQuestionTitle[currentStep - 1]}
          step={currentStep}
        />
        <div className={'mt-[14px] w-[323px]'}>
          <Select
            selecttype={'Single'}
            fullWidth={true}
            options={selectList}
            placeholder={SelectPlaceHolder[currentStep - 1]}
            onChange={(e) => onChange(e.target.value)}
            ref={selectRef}
          />
        </div>
      </div>
    </>
  )
}

export default CityStep
