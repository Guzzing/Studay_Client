import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import Button from '@/components/common/button/Button.tsx'
import Label from '@/components/common/label/Label.tsx'
import { LabelColorType } from '@/components/common/label/LabelType.ts'
import Slider from '@/components/common/slider/Slider.tsx'
import Spacing from '@/components/common/spacing/Spacing.tsx'
import useModal from '@/libs/hooks/useModal.tsx'
import { initMapFilter, mapFilterState } from '@/libs/store/mapFilterAtom.ts'
import { mapInfoAtom } from '@/libs/store/mapInfoAtom.ts'
const FilterPage = () => {
  const navigate = useNavigate()
  const [mapInfo, _] = useAtom(mapInfoAtom)
  const [mapFilter, setMapFilter] = useAtom(mapFilterState)
  const { Modal, open, close } = useModal()

  const moveMap = () => {
    const subjectList = mapFilter.subjectList
      .filter((subject) => subject.color === 'selected')
      .map((subject) => subject.filter)

    if (subjectList.length === 0) {
      return open()
    }

    const url = `/map?&categories=${subjectList.join(',')}&desiredMinAmount=${
      mapFilter.minMoney
    }&desiredMaxAmount=${mapFilter.maxMoney}`
    setMapFilter(initMapFilter)
    navigate(url)
  }

  const selectSubjec = (index: number) => {
    const updatedSubjectList = [...mapFilter.subjectList]
    const color =
      updatedSubjectList[index].color === 'default' ? 'selected' : 'default'

    updatedSubjectList[index] = {
      title: updatedSubjectList[index].title,
      filter: updatedSubjectList[index].filter,
      color: color
    }

    setMapFilter((prev) => ({
      ...prev,
      subjectList: updatedSubjectList
    }))
  }

  const updateMoney = (money: number) => {
    setMapFilter((prev) => ({
      ...prev,
      maxMoney: money > 0 ? money + 100_000 : 0,
      minMoney: money > 0 ? money : 0
    }))
  }

  return (
    <div className={'flex flex-col w-[390px] h-full bg-white-100'}>
      <Spacing size={80} />
      <div
        className={
          'flex flex-col w-full h-[120px] bg-white-0 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mb-[10px] '
        }>
        <span
          className={'text-left font-nsk body-18-black-lg ml-[17px] mt-[13px]'}>
          {'지역'}
        </span>
        <span className={'font-nsk headline-25 ml-[35px] mt-[19px]'}>
          {`${mapInfo.selectProvince} ${mapInfo.selectCity} ${mapInfo.selectTown}`}
        </span>
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
          {mapFilter.subjectList.map((subject, index) => (
            <div
              key={index}
              className={`w-full h-full`}
              style={{ cursor: 'pointer !important' }}>
              <Label
                variant={'medium'}
                label={subject.title}
                color={subject.color as LabelColorType}
                isFullWidth={true}
                onClick={() => selectSubjec(index)}
              />
            </div>
          ))}
        </div>
      </div>
      <div
        className={
          'flex flex-col w-full h-[260px] bg-white-0 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mb-[10px] justify-center items-center'
        }>
        <span
          className={
            'w-full text-left font-nsk body-18-black ml-[14px] mb-[10px]'
          }>
          {'희망 금액(추정치)'}
        </span>
        <Slider onChange={(e) => updateMoney(e)} />
      </div>
      <Button
        buttonType={'Square'}
        label={'입력 완료! 학원을 찾아볼까요?'}
        fullWidth={true}
        onClick={moveMap}
      />
      <Modal>
        <div
          className={
            'w-[339px] h-[207px] flex flex-col justify-center items-center bg-white-0 rounded-[15px]'
          }>
          <span
            className={
              'subHead-18 w-full h-[20%] mt-[26px] ml-[36px] text-left mb-[10px]'
            }>
            {'과목은 최소 한개 선택해 주세요!'}
          </span>
          <Button
            label={'확인'}
            buttonType={'Plain-blue'}
            onClick={close}></Button>
        </div>
      </Modal>
    </div>
  )
}

export default FilterPage
