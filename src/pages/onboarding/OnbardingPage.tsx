import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { PAGE_CONTENT, CHILD_GRADE } from './constants'
import { validate } from './validate'
import Button from '@/components/common/button/Button'
import Header from '@/components/common/header/Header'
import Input from '@/components/common/inputbox/input/Input'
import Select from '@/components/common/inputbox/select/Select'
import ProgressBar from '@/components/common/progressBar/ProgressBar'
import Spacing from '@/components/common/spacing/Spacing'
import StepQuestion from '@/components/common/stepquestion/StepQuestion'
import { getAllUserInfo } from '@/libs/api/mypage/myPageApi'
import { GetMyPageResponse } from '@/libs/api/mypage/myPageType'
import {
  createChildApi,
  onboardingApi
} from '@/libs/api/onboarding/onboardingApi'
import { PostOnboardingRequest } from '@/libs/api/onboarding/onboardingType'
import useToastify from '@/libs/hooks/useToastify'
import { onboardingPageDataAtom } from '@/libs/store/onboardingAtom'

const Onboarding = () => {
  const navigate = useNavigate()
  const { setToast } = useToastify()
  const [currentPage, setCurrentPage] = useState(0)
  const [isError, setIsError] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const selectRef = useRef<HTMLSelectElement | null>(null)
  const [inputValue, setInputValue] = useState(inputRef.current?.value)
  const [selectValue, setSelectValue] = useState(selectRef.current?.value)
  const [storeStorage, setStoreStorage] = useState<string[]>([])
  const [pageData, setPageData] = useAtom(onboardingPageDataAtom)
  const [isDone, setIsDone] = useState(false)
  const [myPageData, setMyPageData] = useState<GetMyPageResponse>()

  const handleInputChange = () => {
    setInputValue(inputRef.current?.value)
    validate(
      currentPage === 0
        ? 'nickname'
        : currentPage === 1
        ? 'email'
        : 'childname',
      inputRef.current?.value || ''
    )
      ? setIsError(false)
      : setIsError(true)
  }
  const handleSelectChange = () => {
    setSelectValue(selectRef.current?.value)
  }
  useEffect(() => {
    if (myPageData) {
      const { nickname, email, childInformationResponses } = myPageData
      if (!nickname || !email) {
        setCurrentPage(0)
        return
      }
      if (childInformationResponses.length === 5) {
        setToast({
          comment: '아이는 최대 5명까지만 등록이 가능해요.',
          type: 'warning'
        })
        navigate('/')
      } else setCurrentPage(childInformationResponses.length + 2)
    }
  }, [myPageData])

  useEffect(() => {
    const user = async () => {
      const myPage = await getAllUserInfo()
      setMyPageData(myPage)
    }
    user()
  }, [])

  useEffect(() => {
    const req = async (pageData: PostOnboardingRequest) => {
      const onboardingData = await onboardingApi(pageData)
      onboardingData && navigate('/')
    }
    const makeChild = async () => {
      const data = await createChildApi({
        nickname: inputRef.current?.value as string,
        grade: selectRef.current?.value as string
      })
      data && navigate('/')
    }
    if (isDone) {
      const { nickname, email } = myPageData as GetMyPageResponse
      if (!nickname || !email) req(pageData)
      else makeChild()
    }
  }, [isDone])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = ''
      setInputValue('')
    }
    if (selectRef.current) {
      selectRef.current.value = ''
      setSelectValue('')
    }
  }, [currentPage])

  return (
    <div>
      <Header
        headerType={'BackPush'}
        pageTitle={'onboarding'}
        onClick={() => {
          myPageData?.email === '' || myPageData?.nickname === ''
            ? navigate('/')
            : navigate(-1)
        }}
      />
      <Spacing size={80} />
      <ProgressBar
        step={currentPage <= 2 ? currentPage + 1 : 3}
        fullStepNum={3}
      />
      <Spacing size={45} />
      <div className={'px-[36px]'}>
        {PAGE_CONTENT[currentPage].mainTitle.map((mainTitle) => (
          <h2 className={'headline-25 leading-[40px]'}>{mainTitle}</h2>
        ))}
        {PAGE_CONTENT[currentPage].subTitle.map((subTitle) => (
          <p className={'body-15-gray leading-[20px]'}>{subTitle}</p>
        ))}
        <Spacing size={30} />
        {PAGE_CONTENT[currentPage].inputTitle.map((v, i) => (
          <div>
            <StepQuestion step={PAGE_CONTENT[currentPage].step[i]} text={v} />
            {i === 1 ? (
              <Select
                selecttype={'Single'}
                options={CHILD_GRADE}
                ref={selectRef}
                onChange={handleSelectChange}
                value={selectValue}
                placeholder={'아이 학년을 선택해주세요'}
              />
            ) : (
              <Input
                inputType={'Default'}
                ref={inputRef}
                onChange={handleInputChange}
                value={inputValue}
                field={
                  currentPage === 0
                    ? 'nickname'
                    : currentPage === 1
                    ? 'email'
                    : 'childname'
                }
              />
            )}
            <Spacing size={20} />
          </div>
        ))}
      </div>
      <ul className={'absolute bottom-[15px] w-full text-center'}>
        {PAGE_CONTENT[currentPage].buttonType.map(
          (buttonLabel, i) =>
            buttonLabel && (
              <li key={i}>
                {i === 0 &&
                myPageData?.email !== '' &&
                myPageData?.nickname !== '' ? (
                  ''
                ) : (
                  <Button
                    label={buttonLabel}
                    buttonType={
                      isError
                        ? 'Plain-disabled'
                        : i === 0
                        ? 'Round-blue-700'
                        : 'Round-blue-500'
                    }
                    onClick={() => {
                      // 아무것도 입력을 하지 않았을 때!
                      if (
                        inputRef.current?.value === '' ||
                        selectRef.current?.value === ''
                      ) {
                        setToast({
                          comment: '값을 빠짐없이 입력해주세요.',
                          type: 'warning'
                        })
                        return
                      }
                      if (PAGE_CONTENT[currentPage].type === 'child') {
                        setPageData({
                          ...pageData,
                          children: [
                            {
                              ...pageData.children[0],
                              nickname:
                                currentPage === 2
                                  ? inputRef.current?.value ||
                                    pageData.children[0].nickname
                                  : (inputRef.current?.value as string),
                              grade:
                                currentPage === 2
                                  ? selectRef.current?.value ||
                                    pageData.children[0].grade
                                  : (selectRef.current?.value as string)
                            },
                            ...pageData.children.slice(
                              currentPage === 2 ? 1 : 0
                            )
                          ]
                        })
                        i === 0
                          ? setCurrentPage(currentPage + 1)
                          : setIsDone(true)
                      } else {
                        setStoreStorage([...storeStorage, inputValue as string])
                        setPageData({
                          ...pageData,
                          [PAGE_CONTENT[currentPage].type]: inputValue as string
                        })
                        setCurrentPage(currentPage + 1)
                      }
                    }}
                  />
                )}
                <Spacing size={10} />
              </li>
            )
        )}
      </ul>
    </div>
  )
}

export default Onboarding
