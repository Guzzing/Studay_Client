import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/common/button/Button'
import Input from '@/components/common/inputbox/input/Input'
import Select from '@/components/common/inputbox/select/Select'
import Spacing from '@/components/common/spacing/Spacing'
import StepQuestion from '@/components/common/stepquestion/StepQuestion'

const DATA = [
  {
    mainTitle: '안녕하세요 :) 스터데이에요',
    subTitle: '스터데이의 커뮤니티 문화를 위해 매너있는 이름을 써주세요',
    step: [1],
    inputTitle: ['사용할 닉네임을 입력해주세요'],
    buttonType: ['입력완료']
  },
  {
    mainTitle: '스터데이의 최근 소식을 알려드리고 싶어요.',
    subTitle: '작성해주신 이메일로 최신 정보를 보내드려요',
    step: [2],
    inputTitle: ['이메일을 입력해주세요'],
    buttonType: ['입력완료']
  },
  {
    mainTitle: '자녀에 대해서 알려주세요',
    subTitle: '자녀별로 시간표를 관리하고 맞춤 정보를 관리할 수 있어요',
    step: [3, 4],
    inputTitle: [
      '아이의 이름(애칭)을 알려주세요',
      '현재 재학중인 학년을 알려주세요'
    ],
    // 참고로 2번쨰 버튼을 누르면 무조건 homepage로 가기!
    buttonType: [
      '저장! 둘째 입력하러가기',
      '입력완료! 스터데이를 시작해볼까요?'
    ]
  },
  {
    mainTitle: '둘째는 어떤 아이인가요?',
    subTitle: '자녀별로 시간표를 관리하고 맞춤 정보를 관리할 수 있어요',
    step: [3, 4],
    inputTitle: [
      '아이의 이름(애칭)을 알려주세요',
      '현재 재학중인 학년을 알려주세요'
    ],
    // 참고로 2번쨰 버튼을 누르면 무조건 homepage로 가기!
    buttonType: [
      '저장! 셋째 입력하러가기',
      '입력완료! 스터데이를 시작해볼까요?'
    ]
  },
  {
    mainTitle: '귀염둥이 셋째! 정보를 입력해주세요',
    subTitle: '자녀별로 시간표를 관리하고 맞춤 정보를 관리할 수 있어요',
    step: [3, 4],
    inputTitle: [
      '아이의 이름(애칭)을 알려주세요',
      '현재 재학중인 학년을 알려주세요'
    ],
    // 참고로 2번쨰 버튼을 누르면 무조건 homepage로 가기!
    buttonType: [
      '저장! 넷째 입력하러가기',
      '입력완료! 스터데이를 시작해볼까요?'
    ]
  },
  {
    mainTitle: '우와, 벌써 넷째에요',
    subTitle: '자녀별로 시간표를 관리하고 맞춤 정보를 관리할 수 있어요',
    step: [3, 4],
    inputTitle: [
      '아이의 이름(애칭)을 알려주세요',
      '현재 재학중인 학년을 알려주세요'
    ],
    // 참고로 2번쨰 버튼을 누르면 무조건 homepage로 가기!
    buttonType: [
      '저장! 다섯째 입력하러가기',
      '입력완료! 스터데이를 시작해볼까요?'
    ]
  },
  {
    mainTitle: '마지막이에요! 다섯째는요?',
    subTitle: '자녀별로 시간표를 관리하고 맞춤 정보를 관리할 수 있어요',
    step: [3, 4],
    inputTitle: [
      '아이의 이름(애칭)을 알려주세요',
      '현재 재학중인 학년을 알려주세요'
    ],
    // 참고로 2번쨰 버튼을 누르면 무조건 homepage로 가기!
    buttonType: ['입력완료! 스터데이를 시작해볼까요?']
  }
]
const OnboardingPage = () => {
  const [storage, setStorage] = useState<string[]>([])
  const [pageData, setPageData] = useState(DATA[storage.length])
  const navigate = useNavigate()

  useEffect(() => {
    setPageData(DATA[storage.length])
  }, [storage])
  return (
    <div className={'w-full h-full pt-[125px] flex flex-col px-[25px] border'}>
      <div className={'h-[25%]'}>
        <p className={'headline-30 leading-[40px]'}>{pageData.mainTitle}</p>
        <p className={'body-15-gray py-[30px]'}>{pageData.subTitle}</p>
      </div>
      <Spacing size={30} />
      <div className={'h-[25%]'}>
        {pageData.inputTitle.map((title, index) => (
          <>
            <div className={'py-[15px]'}>
              <StepQuestion step={pageData.step[index]} text={title} />
            </div>
            {index === 0 ? (
              <Input
                inputType={'Default'}
                placeholder={'정보를 입력해주세요'}
                fullWidth={true}
              />
            ) : (
              <Select fullWidth={true} selectType={'Single'} value={''} />
            )}
          </>
        ))}
      </div>
      <div
        className={'h-[50%] flex flex-col justify-end py-[25px] items-center'}>
        {pageData.buttonType.map((value, index) => (
          <div className={'my-[10px]'}>
            <Button
              label={value}
              buttonType={index === 0 ? 'Round-blue-500' : 'Round-blue-700'}
              width={'LW'}
              onClick={
                index === 0
                  ? () => {
                      setStorage((prev) => [...prev, '값'])
                      setPageData(DATA[storage.length])
                    }
                  : () => {
                      navigate('/')
                    }
              }
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export default OnboardingPage
