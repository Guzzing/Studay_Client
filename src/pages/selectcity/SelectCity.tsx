import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import useSteps from '../../hooks/useSteps.ts'
import {
  HandleChangeParam,
  ResetSelectedParam
} from '../../types/selectcity.ts'
import Spacing from '@/components/common/spacing/Spacing.tsx'
import SelectCityStep from '@/components/selectcity/SelectCityStep.tsx'
import SelectCityStep1 from '@/components/selectcity/SelectCityStep1.tsx'
import SelectCityStep2 from '@/components/selectcity/SelectCityStep2.tsx'
import SelectCityStep3 from '@/components/selectcity/SelectCityStep3.tsx'
import {
  getBeopjungdong,
  getSigungu,
  getDongne,
  getLocation
} from '@/libs/api/mapapi/mapApi.ts'

const SelectCity = () => {
  const navigate = useNavigate()
  const [selectSido, setSelectSido] = useState('')
  const [selectSigungu, setSelectSigungu] = useState('')
  const [selectDongne, setSelectDongne] = useState('')
  const { currentStep, nextStep, setCurrentStep } = useSteps()

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
  const { data: location } = useQuery({
    queryKey: ['location', selectSido, selectSigungu, selectDongne],
    queryFn: () =>
      getLocation({
        sido: selectSido,
        sigungu: selectSigungu,
        dongne: selectDongne
      }),
    enabled: selectDongne !== ''
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

  const isLast = () => {
    return currentStep === 3
  }

  const handleChange = useCallback(
    ({ selectData, setState }: HandleChangeParam) => {
      if (selectData === '') return
      setState(selectData)
      if (isLast()) {
        navigate('/map')
      } else {
        nextStep()
      }
    },
    [selectSido, selectSigungu, selectDongne, nextStep]
  )

  useEffect(() => {
    if (isLast()) {
      console.log(location)
    }
  }, [location])

  return (
    <div className={'flex flex-col w-full h-full'}>
      <Spacing size={80}></Spacing>
      <SelectCityStep currentStep={currentStep}>
        <SelectCityStep.Step>
          <SelectCityStep1
            onChange={(selectSido) =>
              handleChange({ selectData: selectSido, setState: setSelectSido })
            }
            sidoArr={sido?.subRegion || []}
            select={selectSido}
          />
        </SelectCityStep.Step>
        <SelectCityStep.Step>
          <SelectCityStep2
            sido={selectSido}
            onChange={(selectDongne) =>
              handleChange({
                selectData: selectDongne,
                setState: setSelectSigungu
              })
            }
            onClick={(step) => resetSelected({ step })}
            sigunguArr={sigungu?.subRegion || []}
            select={selectSigungu}
          />
        </SelectCityStep.Step>
        <SelectCityStep.Step>
          <SelectCityStep3
            sido={selectSido}
            sigungu={selectSigungu}
            onChange={(selectDongne) => {
              handleChange({
                selectData: selectDongne,
                setState: setSelectDongne
              })
            }}
            onClick={(step) => resetSelected({ step })}
            dongneArr={dongne?.subRegion || []}
            select={selectDongne}
          />
        </SelectCityStep.Step>
      </SelectCityStep>
    </div>
  )
}

export default SelectCity
