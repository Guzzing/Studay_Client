import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  initDongne,
  initSido,
  initSigungu
} from '../../constants/selectCity.ts'
import useSteps from '../../libs/hooks/useSteps.ts'
import { SigunguType, SidoType, DongneType } from '../../types/selectcity.ts'
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
import { mapInfoAtom } from '@/libs/store/mapInfoAtom.ts'

const LAST_STEP = 3

const SelectCity = () => {
  const navigate = useNavigate()
  const [mapInfo, setMapInfo] = useAtom(mapInfoAtom)
  const { currentStep, nextStep, setCurrentStep } = useSteps()

  const { data: sido } = useQuery({
    queryKey: ['sido'],
    queryFn: () => getBeopjungdong()
  })
  const { data: sigungu } = useQuery({
    queryKey: ['sigungu', mapInfo.selectSido],
    queryFn: () => getSigungu(mapInfo.selectSido),
    enabled: mapInfo.selectSido !== ''
  })
  const { data: dongne } = useQuery({
    queryKey: ['dongne', mapInfo.selectSido, mapInfo.selectSigungu],
    queryFn: () =>
      getDongne({ sido: mapInfo.selectSido, sigungu: mapInfo.selectSigungu }),
    enabled: mapInfo.selectSigungu !== ''
  })
  const { data: location } = useQuery({
    queryKey: [
      'location',
      mapInfo.selectSido,
      mapInfo.selectSigungu,
      mapInfo.selectDongne
    ],
    queryFn: () =>
      getLocation({
        sido: mapInfo.selectSido,
        sigungu: mapInfo.selectSigungu,
        dongne: mapInfo.selectDongne
      }),
    enabled: mapInfo.selectDongne !== ''
  })

  const resetSelectValues = (step: number) => {
    setMapInfo((prev) => ({
      ...prev,
      selectSido: step <= 1 ? '' : prev.selectSido,
      selectSigungu: step <= 2 ? '' : prev.selectSigungu,
      selectDongne: ''
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
      console.log(location)
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
          <SelectCityStep1
            onChange={(selectSido) =>
              handleChange({ selectData: selectSido, key: 'selectSido' })
            }
            sidoArr={sido?.subRegion || []}
            select={mapInfo.selectSido}
          />
        </SelectCityStep.Step>
        <SelectCityStep.Step>
          <SelectCityStep2
            sido={mapInfo.selectSido}
            onChange={(selectDongne) =>
              handleChange({
                selectData: selectDongne,
                key: 'selectSigungu'
              })
            }
            onClick={(step) => resetSelected({ step })}
            sigunguArr={sigungu?.subRegion || []}
            select={mapInfo.selectSigungu}
          />
        </SelectCityStep.Step>
        <SelectCityStep.Step>
          <SelectCityStep3
            sido={mapInfo.selectSido}
            sigungu={mapInfo.selectSigungu}
            onChange={(selectDongne) => {
              handleChange({
                selectData: selectDongne,
                key: 'selectDongne'
              })
            }}
            onClick={(step) => resetSelected({ step })}
            dongneArr={dongne?.subRegion || []}
            select={mapInfo.selectDongne}
          />
        </SelectCityStep.Step>
      </SelectCityStep>
    </div>
  )
}

export default SelectCity
