import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { atom, useAtom } from 'jotai'
import { DATA, grade } from './constants'
import { getStorageLength, getItem } from './storage'
import Button from '@/components/common/button/Button'
import Header from '@/components/common/header/Header'
import Input from '@/components/common/inputbox/input/Input'
import Select from '@/components/common/inputbox/select/Select'
import Spacing from '@/components/common/spacing/Spacing'
import StepQuestion from '@/components/common/stepquestion/StepQuestion'
import { myPageApi } from '@/libs/api/mypage/myPageApi'
import { onboardingApi } from '@/libs/api/onboarding/onboardingApi'
import { PostOnboardingRequest } from '@/libs/api/onboarding/onboardingType'

const percentAtom = atom(50)
const pageContentAtom = atom(DATA[getStorageLength('onboarding')])
const pageValuesAtom = atom<PostOnboardingRequest>({
  nickname: '',
  email: '',
  children: [
    {
      nickname: '',
      grade: ''
    }
  ]
})
interface Obj {
  childName: string
  grade: string
}
const OnboardingPage = () => {
  const [onboardingProcess, setOnboardingProcess] = useState<
    Array<string | Obj>
  >([])
  const [curPage, setCurPage] = useState(0)
  // ❗️TODO : progressbar : 이걸로 참고하시면 됩니다!
  const navigate = useNavigate()
  const [pageContent, setPageContent] = useAtom(pageContentAtom)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const selectRef = useRef<HTMLSelectElement | null>(null)

  useEffect(() => {
    const values = []
    if (getStorageLength('onboarding') === 0) setOnboardingProcess([])
    else {
      setOnboardingProcess(getItem('onboarding'))
    }
  }, [])

  return (
    <div className={'px-[25px] pb-[25px] h-full relative border-x'}>
      <Header
        headerType={'BackPush'}
        pageTitle={''}
        onClick={() => {
          setPageContent(DATA[0])
          setOnboardingProcess([])
        }}
      />
      <Spacing size={125} />
      <p className={'headline-30 leading-[40px] my-[18px]'}>
        {pageContent.mainTitle}
      </p>
      <p className={'body-15-gray leading-[20px]'}>{pageContent.subTitle}</p>
      {pageContent.inputTitle.map((title, index) => (
        <div className={'mt-[30px]'}>
          {index === 0 ? (
            <>
              <StepQuestion
                step={pageContent.inputTitle.length === 1 ? 1 : 3 + index}
                text={title}
              />
              <div className={''}>
                <Input
                  inputType={'Default'}
                  ref={inputRef}
                  field={
                    curPage === 0
                      ? 'nickname'
                      : curPage === 1
                      ? 'email'
                      : curPage === 2
                      ? 'childname'
                      : ''
                  }
                  placeholder={
                    curPage === 0
                      ? '닉네임을 입력해주세요'
                      : curPage === 1
                      ? '이메일을 입력해주세요'
                      : curPage === 2
                      ? '자녀 닉네임을 입력해주세요'
                      : ''
                  }
                />
              </div>
            </>
          ) : (
            <>
              <StepQuestion
                step={pageContent.inputTitle.length === 1 ? 1 : 3 + index}
                text={title}
              />
              <Select selectType={'Single'} options={grade} ref={selectRef} />
            </>
          )}
        </div>
      ))}
      <div className={'absolute bottom-[25px] flex flex-col justify-start'}>
        {pageContent.buttonType.map((value, index) =>
          index === 0 ? (
            <div>
              <Button
                buttonType={'Round-blue-500'}
                label={
                  DATA.length - 1 === curPage
                    ? '입력 완료! 스터데이를 시작하러 가볼까요?'
                    : curPage === 0 || curPage === 1
                    ? '입력 완료'
                    : `저장! ${curPage}째 입력하러 가기`
                }
                width={'LW'}
                onClick={() => {
                  if (onboardingProcess.length <= 1) {
                    console.log('이번 페이지 >>', onboardingProcess.length)
                    setOnboardingProcess((prev) => [
                      ...prev,
                      inputRef.current?.value as string
                    ])
                    setPageContent(DATA[onboardingProcess.length + 1])
                  } else if (
                    onboardingProcess.length > 1 &&
                    onboardingProcess.length <= 6
                  ) {
                    setOnboardingProcess((prev) => [
                      ...prev,
                      {
                        childName: inputRef.current?.value as string,
                        grade: selectRef.current?.value as string
                      }
                    ])
                    setPageContent(DATA[onboardingProcess.length + 1])
                    navigate('/')
                  } else {
                    localStorage.setItem(
                      'onboarding',
                      JSON.stringify(onboardingProcess)
                    )
                    navigate('/')
                  }
                }}
              />
            </div>
          ) : (
            <div className={'mt-[10px]'}>
              <Button
                buttonType={'Round-blue-700'}
                label={'입력완료! 스터데이를 시작해볼까요?'}
                width={'LW'}
                onClick={() => {
                  localStorage.setItem(
                    'onboarding',
                    JSON.stringify(onboardingProcess)
                  )
                }}
              />
            </div>
          )
        )}
      </div>
    </div>
  )
}
export default OnboardingPage
