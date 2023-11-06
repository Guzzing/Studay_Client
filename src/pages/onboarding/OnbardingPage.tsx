import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { onboarding } from '../../api/onboarding'
import { DATA, grade } from './constants'
import { validate } from './validate'
import Button from '@/components/common/button/Button'
import Input from '@/components/common/inputbox/input/Input'
import Select from '@/components/common/inputbox/select/Select'
import Spacing from '@/components/common/spacing/Spacing'
import StepQuestion from '@/components/common/stepquestion/StepQuestion'

const OnboardingPage = () => {
  const [storage, setStorage] = useState<string[]>([])
  const [pageData, setPageData] = useState(DATA[storage.length])
  const inputRef = useRef<HTMLInputElement | null>(null)
  const selectRef = useRef<HTMLSelectElement | null>(null)
  const [inputValue, setInputValue] = useState('')
  const [requestValue, setRequestValue] = useState({
    nickname: '',
    email: '',
    children: [{ nickname: '', grade: '' }]
  })
  const [onboardingToggle, setOnboardingToggle] = useState(false)
  const navigate = useNavigate()

  const handleChange = () => {
    const inputElement = inputRef.current
    if (inputElement) {
      const inputValue: string = inputElement.value
      setInputValue(inputValue)
    }
  }
  useEffect(() => {
    setPageData(DATA[storage.length])
  }, [storage])
  useEffect(() => {
    const start = async () => {
      const res = await onboarding(requestValue)
      if (res) navigate('/')
    }
    start()
  }, [onboardingToggle])

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
                ref={inputRef}
                onChange={handleChange}
                errorMessage={
                  storage.length === 0
                    ? validate('nickname', inputValue)
                      ? '영어와 한글만 올 수 있습니다'
                      : undefined
                    : storage.length === 1
                    ? validate('email', inputValue)
                      ? '잘못된 email형식입니다!'
                      : undefined
                    : undefined
                }
              />
            ) : (
              <Select
                fullWidth={true}
                selectType={'Single'}
                options={grade}
                value={''}
                ref={selectRef}
              />
            )}
          </>
        ))}
      </div>
      <div
        className={'h-[50%] flex flex-col justify-end py-[25px] items-center'}>
        {pageData.buttonType.map((value, index) => (
          <div className={'my-[10px]'}>
            <Button
              className={
                storage.length === 0
                  ? validate('nickname', inputValue)
                    ? 'bg-gray-400 text-white-0 w-[343px] h-[56px] rounded-[10px] cursor-not-allowed'
                    : 'bg-blue-500 text-white-0 w-[343px] h-[56px] rounded-[10px]'
                  : storage.length === 1
                  ? validate('email', inputValue)
                    ? 'bg-gray-400 text-white-0 w-[343px] h-[56px] rounded-[10px] cursor-not-allowed'
                    : 'bg-blue-500 text-white-0 w-[343px] h-[56px] rounded-[10px]'
                  : ''
              }
              label={value}
              buttonType={index === 0 ? 'Round-blue-500' : 'Round-blue-700'}
              width={'LW'}
              disabled={
                storage.length === 0
                  ? validate('nickname', inputValue)
                    ? true
                    : false
                  : storage.length === 1
                  ? validate('email', inputValue)
                    ? true
                    : false
                  : false
              }
              onClick={
                index === 0
                  ? () => {
                      console.log(storage)
                      if (storage.length === 6) {
                        setOnboardingToggle((prev) => !prev)
                        return
                      }
                      const value = inputRef.current as { value: string } | null
                      const select = selectRef.current as {
                        value: string
                      } | null
                      setPageData(DATA[storage.length])
                      if (value !== null) {
                        console.log(value?.value)
                        console.log('select >>', select?.value)
                        setStorage((prev) => [...prev, value.value])
                        switch (storage.length) {
                          case 0: {
                            setRequestValue({
                              ...requestValue,
                              nickname: value.value
                            })

                            break
                          }
                          case 1: {
                            setRequestValue({
                              ...requestValue,
                              email: value.value
                            })

                            break
                          }
                          case 2: {
                            select !== null &&
                              setRequestValue({
                                ...requestValue,
                                children: [
                                  {
                                    ...requestValue.children,
                                    nickname: value.value,
                                    grade: select?.value
                                  }
                                ]
                              })

                            break
                          }
                          default: {
                            const newValue = {
                              nickname: value.value,
                              grade: select ? select.value : ''
                            }
                            setRequestValue({
                              ...requestValue,
                              children: [...requestValue.children, newValue]
                            })
                          }
                        }
                      }
                    }
                  : // 2번째 버튼도 일단 state에 넣고나서!!!
                    async () => {
                      const value = inputRef.current as { value: string } | null
                      const select = selectRef.current as {
                        value: string
                      } | null
                      if (value !== null) {
                        switch (
                          storage.length // 3번쨰 질문부터~
                        ) {
                          case 2: {
                            select !== null &&
                              setRequestValue({
                                ...requestValue,
                                children: [
                                  {
                                    ...requestValue.children,
                                    nickname: value.value,
                                    grade: select?.value
                                  }
                                ]
                              })
                            setOnboardingToggle((prev) => !prev)
                            break
                          }
                          default: {
                            const newValue = {
                              nickname: value.value,
                              grade: select ? select.value : ''
                            }
                            setRequestValue({
                              ...requestValue,
                              children: [...requestValue.children, newValue]
                            })
                            setOnboardingToggle((prev) => !prev)
                          }
                        }
                      }
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
