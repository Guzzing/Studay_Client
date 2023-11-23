import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { PAGE_CONTENT, CHILD_GRADE } from './constants'
import { validate } from './validate'
import Button from '@/components/common/button/Button'
import Header from '@/components/common/header/Header'
import Input from '@/components/common/inputbox/input/Input'
import Select from '@/components/common/inputbox/select/Select'
import Spacing from '@/components/common/spacing/Spacing'
import StepQuestion from '@/components/common/stepquestion/StepQuestion'
import { getChildrenInfo } from '@/libs/api/children/ChildrenApi'
import {
  createChildApi,
  onboardingApi
} from '@/libs/api/onboarding/onboardingApi'
import { PostOnboardingRequest } from '@/libs/api/onboarding/onboardingType'
import { onboardingPageDataAtom } from '@/libs/store/onboardingAtom'
import { getItem, setItem } from '@/libs/utils/storage'

const Onboarding = () => {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(0)
  const [isError, setIsError] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const selectRef = useRef<HTMLSelectElement | null>(null)
  const [inputValue, setInputValue] = useState(inputRef.current?.value)
  const [selectValue, setSelectValue] = useState(selectRef.current?.value)
  const [storeStorage, setStoreStorage] = useState<string[]>([])
  const [pageData, setPageData] = useAtom(onboardingPageDataAtom)
  const [isDone, setIsDone] = useState(false)
  const handleInputChange = () => {
    setInputValue(inputRef.current?.value)
    validate(
      currentPage === 0
        ? 'nickname'
        : currentPage === 1
        ? 'email'
        : 'childname',
      inputValue as string
    )
      ? setIsError(false)
      : setIsError(true)
  }
  const handleSelectChange = () => {
    setSelectValue(selectRef.current?.value)
  }

  useEffect(() => {
    const req = async (pageData: PostOnboardingRequest) => {
      setItem('onboarding', JSON.stringify(storeStorage))
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
      if (getItem('onboarding').length === 0) req(pageData)
      else makeChild()
    }
  }, [isDone])

  useEffect(() => {
    const cntOfChild = async () => {
      const children = await getChildrenInfo()
      if (children.length === 5) {
        alert('5명이 다 차있습니다!')
        navigate('/')
      }
      setCurrentPage(children.length + 2)
    }
    if (getItem('onboarding').length > 0) {
      cntOfChild()
    }
  }, [])

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

  useEffect(() => {
    if (!Array.isArray(getItem('onboarding'))) {
      const getMyChildren = async () => {
        const numbers = await getChildrenInfo()
        setCurrentPage(numbers.length + 2)
      }
      getMyChildren()
    }
  }, [])
  return (
    <div className={'px-[36px]'}>
      <Header
        headerType={'BackPush'}
        pageTitle={'onboarding'}
        onClick={() => {
          if (getItem('onboarding').length === 0) {
            setCurrentPage(0)
            setPageData({
              children: [{ nickname: '', grade: '' }],
              email: '',
              nickname: ''
            })
          } else navigate(-1)
        }}
      />
      <Spacing size={124} />
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
      <ul className={'absolute bottom-[15px]'}>
        {PAGE_CONTENT[currentPage].buttonType.map(
          (buttonLabel, i) =>
            buttonLabel && (
              <li key={i}>
                {i === 0 && getItem('onboarding').length > 0 ? (
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
                      if (
                        inputRef.current?.value === '' ||
                        selectRef.current?.value === ''
                      )
                        alert('값을 입력해주세요!')
                      else {
                        if (i === 0) {
                          if (currentPage <= 1) {
                            setStoreStorage([
                              ...storeStorage,
                              inputValue as string
                            ])
                            if (currentPage === 0) {
                              setPageData({
                                ...pageData,
                                nickname: inputValue as string
                              })
                            } else {
                              setPageData({
                                ...pageData,
                                email: inputValue as string
                              })
                            }
                            setCurrentPage(currentPage + 1)
                          } else {
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
                            setCurrentPage(currentPage + 1)
                          }
                        } else {
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
                          setIsDone(true)
                        }
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
