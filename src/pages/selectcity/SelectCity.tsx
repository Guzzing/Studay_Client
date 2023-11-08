import { ReactNode, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import useSteps from '../../hooks/useSteps.ts'
import {
  HandleChangeParam,
  ResetSelectedParam
} from '../../types/selectcity.ts'
import Spacing from '@/components/common/spacing/Spacing.tsx'
import SelectCityStep1 from '@/components/selectcity/SelectCityStep1.tsx'
import SelectCityStep2 from '@/components/selectcity/SelectCityStep2.tsx'
import SelectCityStep3 from '@/components/selectcity/SelectCityStep3.tsx'
import {
  getBeopjungdong,
  getSigungu,
  getDongne
} from '@/libs/api/mapapi/mapApi.ts'

const SelectCity = () => {
  const navigate = useNavigate()
  const [selectSido, setSelectSido] = useState('')
  const [selectSigungu, setSelectSigungu] = useState('')
  const [selectDongne, setSelectDongne] = useState('')
  const { currentStep, nextStep, setCurrentStep } = useSteps()
  const [prevRision, setPrevRision] = useState<string[]>([])

  const { data: sido } = useQuery({
    queryKey: ['sido'],
    queryFn: () => getBeopjungdong()
  })
  const { data: sigungu } = useQuery({
    queryKey: ['sigungu', selectSido],
    queryFn: () => getSigungu(selectSido),
    enabled: selectSido !== ''
  })
  const { data: dongne } = useQuery({
    queryKey: ['dongne', selectSido, selectSigungu],
    queryFn: () => getDongne({ sido: selectSido, sigungu: selectSigungu }),
    enabled: selectSigungu !== ''
  })

  const resetSelectValues = (step: number) => {
    if (step <= 1) {
      setSelectSido('')
    }
    if (step <= 2) {
      setSelectSigungu('')
    }
    setSelectDongne('')
  }

  const resetSelected = ({ step }: ResetSelectedParam) => {
    setCurrentStep(step)
    resetSelectValues(step)
  }

  const stepComponents: { [key: number]: ReactNode } = {
    1: sido && (
      <SelectCityStep1
        sidoArr={sido?.subRegion || []}
        select={selectSido}
        onChange={(selectSido) =>
          handleChange({ selectData: selectSido, setState: setSelectSido })
        }
      />
    ),
    2: (
      <SelectCityStep2
        sido={selectSido}
        sigunguArr={sigungu?.subRegion || []}
        select={selectSigungu}
        onChange={(selectDongne) =>
          handleChange({ selectData: selectDongne, setState: setSelectSigungu })
        }
        onClick={(step) => resetSelected({ step })}
      />
    ),
    3: (
      <SelectCityStep3
        sido={selectSido}
        sigungu={selectSigungu}
        onChange={(selectDongne) => {
          handleChange({ selectData: selectDongne, setState: setSelectDongne })
        }}
        dongneArr={dongne?.subRegion || []}
        select={selectDongne}
        onClick={(step) => resetSelected({ step })}
      />
    )
  }

  const isLast = () => {
    return currentStep === 3
  }

  const handleChange = useCallback(
    ({ selectData, setState }: HandleChangeParam) => {
      if (selectData === '') return
      setPrevRision((prevState) => [...prevState, selectData])
      console.log(prevRision)
      setState(selectData)
      if (isLast()) {
        navigate('/map')
      } else {
        nextStep()
      }
    },
    [selectSido, selectSigungu, nextStep]
  )

  return (
    <div className={'flex flex-col w-full h-full'}>
      <Spacing size={80}></Spacing>
      {stepComponents[currentStep]}
    </div>
  )
}

export default SelectCity
