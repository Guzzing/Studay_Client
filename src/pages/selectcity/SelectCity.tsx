import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import useSteps from '../../libs/hooks/useSteps.ts'
import {
  HandleChangeParam,
  ResetSelectedParam
} from '../../types/selectcity.ts'
import Spacing from '@/components/common/spacing/Spacing.tsx'
import CityStep from '@/components/selectcity/CityStep.tsx'
import SelectCityStep from '@/components/selectcity/SelectCityStep.tsx'
import {
  getLocation,
  getProvince,
  getCity,
  getTown
} from '@/libs/api/mapapi/mapApi.ts'
import { mapInfoAtom } from '@/libs/store/mapInfoAtom.ts'
import { LAST_STEP } from '@/pages/selectcity/constants.ts'

const SelectCity = () => {
  const navigate = useNavigate()
  const [mapInfo, setMapInfo] = useAtom(mapInfoAtom)
  const { currentStep, nextStep, setCurrentStep } = useSteps()

  const { data: province } = useQuery({
    queryKey: ['province'],
    queryFn: () => getProvince()
  })
  const { data: city } = useQuery({
    queryKey: ['city', mapInfo.selectProvince],
    queryFn: () => getCity({ province: mapInfo.selectProvince }),
    enabled: mapInfo.selectProvince !== ''
  })
  const { data: town } = useQuery({
    queryKey: ['town', mapInfo.selectProvince, mapInfo.selectCity],
    queryFn: () =>
      getTown({ province: mapInfo.selectProvince, city: mapInfo.selectCity }),
    enabled: mapInfo.selectProvince !== '' && mapInfo.selectCity !== ''
  })
  const { data: location } = useQuery({
    queryKey: [
      'location',
      mapInfo.selectProvince,
      mapInfo.selectCity,
      mapInfo.selectTown
    ],
    queryFn: () =>
      getLocation({
        province: mapInfo.selectProvince,
        city: mapInfo.selectCity,
        town: mapInfo.selectTown
      }),
    enabled:
      mapInfo.selectTown !== '' &&
      mapInfo.selectProvince !== '' &&
      mapInfo.selectCity !== ''
  })

  const resetSelectValues = (step: number) => {
    setMapInfo((prev) => ({
      ...prev,
      selectProvince: step <= 1 ? '' : prev.selectProvince,
      selectCity: step <= 2 ? '' : prev.selectCity,
      selectTown: ''
    }))
  }

  const resetSelected = ({ step }: ResetSelectedParam) => {
    setCurrentStep(step)
    resetSelectValues(step)
  }

  const handleChange = useCallback(
    ({ selectData, key }: HandleChangeParam) => {
      if (selectData === '') return
      setMapInfo((prev) => ({ ...prev, [key]: selectData }))

      if (currentStep < LAST_STEP) {
        nextStep()
      }
    },
    [mapInfo, nextStep]
  )

  useEffect(() => {
    if (currentStep === LAST_STEP && location && location.longitude > 0) {
      setMapInfo((prev) => ({
        ...prev,
        latitude: location.latitude,
        longitude: location.longitude
      }))
      navigate('/map')
    }
  }, [location])

  return (
    <div className={'flex flex-col w-full h-full'}>
      <Spacing size={80}></Spacing>
      <SelectCityStep currentStep={currentStep}>
        <SelectCityStep.Step>
          <CityStep
            selectList={province?.subRegion || []}
            onChange={(selectProvince) =>
              handleChange({
                selectData: selectProvince,
                key: 'selectProvince'
              })
            }
            currentStep={currentStep}
          />
        </SelectCityStep.Step>
        <SelectCityStep.Step>
          <CityStep
            selectProvince={mapInfo.selectProvince}
            selectList={city?.subRegion || []}
            onChange={(selectCity) =>
              handleChange({ selectData: selectCity, key: 'selectCity' })
            }
            currentStep={currentStep}
            onClick={(step) => resetSelected({ step })}
          />
        </SelectCityStep.Step>
        <SelectCityStep.Step>
          <CityStep
            selectList={town?.subRegion || []}
            onChange={(selectTown) =>
              handleChange({ selectData: selectTown, key: 'selectTown' })
            }
            selectProvince={mapInfo.selectProvince}
            selectCity={mapInfo.selectCity}
            currentStep={currentStep}
            onClick={(step) => resetSelected({ step })}
          />
        </SelectCityStep.Step>
      </SelectCityStep>
    </div>
  )
}

export default SelectCity
