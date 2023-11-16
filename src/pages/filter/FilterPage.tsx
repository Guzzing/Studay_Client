import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/common/button/Button.tsx'
import Label from '@/components/common/label/Label.tsx'
import { LabelColorType } from '@/components/common/label/LabelType.ts'
import Spacing from '@/components/common/spacing/Spacing.tsx'
const FilterPage = () => {
  const navigate = useNavigate()
  const subjects = useMemo(
    () => [
      { title: '예능', filter: '예능(대)', color: 'default' },
      { title: '국제화', filter: '국제화', color: 'default' },
      { title: '입시', filter: '입시, 검정 및 보습', color: 'default' },
      { title: '직업기술', filter: '직업기술', color: 'default' },
      { title: '종합', filter: '종합(대)', color: 'default' },
      { title: '독서실', filter: '독서실', color: 'default' },
      { title: '기예', filter: '기예(대)', color: 'default' },
      { title: '기타', filter: '기타(대)', color: 'default' },
      { title: '인문사회', filter: '인문사회(대)', color: 'default' },
      { title: '정보', filter: '정보', color: 'default' }
    ],
    []
  )

  const moveSelectCity = () => {
    navigate('/selectcity')
  }
  return (
    <div className={'flex flex-col w-[390px] h-full bg-white-100'}>
      <Spacing size={80} />
      <div
        className={
          'flex flex-col w-full h-[200px] bg-white-0 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mb-[10px] '
        }>
        <span
          className={'text-left font-nsk body-18-black-lg ml-[17px] mt-[13px]'}>
          {'지역'}
        </span>
        <span className={'font-nsk headline-25 ml-[35px] mt-[19px]'}>
          {'서울, 강남구 대치동'}
        </span>
        <div className={'mt-[25px] ml-[32px]'}>
          <Button
            label={'지역을 다시 선택할래요'}
            buttonType={'Plain-blue'}
            width={'LW'}
            height={'SH'}
            onClick={moveSelectCity}></Button>
        </div>
      </div>
      <div
        className={
          'flex flex-col w-full h-[242px] bg-white-0 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mb-[10px] justify-center items-center'
        }>
        <div className={'w-full flex flex-row justify-between mt-[12px]'}>
          <span className={'ml-[30px] font-nsk subHead-18'}>{'과목'}</span>
          <span className={'mr-[21px] font-nsk body-18-black'}>
            {'중복 선택 가능'}
          </span>
        </div>
        <div
          className={
            'w-[324px] h-full grid grid-cols-4 justify-center justify-items-center mt-[37px] mb-[46px] gap-4'
          }>
          {subjects.map((subject, index) => (
            <div
              key={index}
              className={`w-full h-full`}
              style={{ cursor: 'pointer !important' }}>
              <Label
                variant={'medium'}
                label={subject.title}
                color={subject.color as LabelColorType}
              />
            </div>
          ))}
        </div>
      </div>
      <div
        className={
          'flex flex-col w-full h-[260px] bg-white-0 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mb-[10px] justify-center items-center'
        }>
        <span className={'w-full text-left font-nsk body-18-black ml-[14px]'}>
          {'희망 금액(추정치)'}
        </span>
        <Button
          label={'금액은 상관없어요'}
          buttonType={'Plain-blue'}
          width={'LW'}
          height={'SH'}
        />
      </div>
      <Button
        buttonType={'Square'}
        label={'입력 완료! 학원을 찾아볼까요?'}
        fullWidth={true}
      />
    </div>
  )
}

export default FilterPage
