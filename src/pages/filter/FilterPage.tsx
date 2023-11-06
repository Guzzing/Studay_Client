import Button from '@/components/common/button/Button.tsx'
import Label from '@/components/common/label/Label.tsx'
import Spacing from '@/components/common/spacing/Spacing.tsx'
const FilterPage = () => {
  return (
    <div className={'flex flex-col w-[390px] h-full bg-white-100'}>
      <Spacing size={80} />
      <div
        className={
          'flex flex-col w-full h-[200px] bg-white-0 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mb-[10px] '
        }
      >
        <span
          className={'text-left font-nsk body-18-black-lg ml-[17px] mt-[13px]'}
        >
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
          ></Button>
        </div>
      </div>
      <div
        className={
          'flex flex-col w-full h-[242px] bg-white-0 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mb-[10px] justify-center items-center'
        }
      >
        <div className={'w-full flex flex-row justify-between mt-[12px]'}>
          <span className={'ml-[30px] font-nsk subHead-18'}>{'과목'}</span>
          <span className={'mr-[21px] font-nsk body-18-black'}>
            {'중복 선택 가능'}
          </span>
        </div>
        <div
          className={
            'w-[324px] h-full grid grid-cols-4 justify-center justify-items-center mt-[37px] mb-[46px] gap-4'
          }
        >
          <Label variant={'medium'} label={'국어'} icon={'Korean'}></Label>
          <Label variant={'medium'} label={'국어'} icon={'Korean'}></Label>
          <Label variant={'medium'} label={'국어'} icon={'Korean'}></Label>
          <Label variant={'medium'} label={'국어'} icon={'Korean'}></Label>
          <Label variant={'medium'} label={'국어'} icon={'Korean'}></Label>
          <Label variant={'medium'} label={'국어'} icon={'Korean'}></Label>
          <Label variant={'medium'} label={'국어'} icon={'Korean'}></Label>
          <Label variant={'medium'} label={'국어'} icon={'Korean'}></Label>
          <Label variant={'medium'} label={'국어'} icon={'Korean'}></Label>
          <Label variant={'medium'} label={'국어'} icon={'Korean'}></Label>
          <Label variant={'medium'} label={'국어'} icon={'Korean'}></Label>
          <Label variant={'medium'} label={'국어'} icon={'Korean'}></Label>
        </div>
      </div>
      <div
        className={
          'flex flex-col w-full h-[260px] bg-white-0 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mb-[10px] justify-center items-center'
        }
      >
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
