import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  getBeopjungdong,
  getDongne,
  getLocation,
  getSigungu
} from '../../api/mapapi/mapApi.ts'
import {
  initDongne,
  initSido,
  initSigungu
} from '../../constants/selectCity.ts'
import useSteps from '../../hooks/useSteps.ts'
import { SigunguType, SidoType, DongneType } from '../../types/selectcity.ts'
import Spacing from '@/components/common/spacing/Spacing.tsx'
import SelectCityStep1 from '@/components/selectcity/SelectCityStep1.tsx'
import SelectCityStep2 from '@/components/selectcity/SelectCityStep2.tsx'
import SelectCityStep3 from '@/components/selectcity/SelectCityStep3.tsx'

const SelectCity = () => {
  const navigate = useNavigate()
  const [sido, setSido] = useState<SidoType>(initSido)
  const [sigungu, setSigungu] = useState<SigunguType>(initSigungu)
  const [dongne, setDongne] = useState<DongneType>(initDongne)
  const { currentStep, nextStep, setCurrentStep } = useSteps()

  useEffect(() => {
    async function fetchData() {
      const data = await getBeopjungdong()
      setSido({
        sidoArr: data.subRegion,
        select: ''
      })
    }
    fetchData()
  }, [])

  const handleSidoChange = async (selectedSido: string) => {
    console.log(selectedSido)
    setSido((prevSido) => ({
      ...prevSido,
      select: selectedSido
    }))
    const res = await getSigungu(selectedSido)
    console.log(res)
    setSigungu({
      sigunguArr: res.subRegion,
      select: ''
    })
    nextStep()
  }

  const handleSiGunguChange = async (selectSigungu: string) => {
    setSigungu((prevState) => ({
      ...prevState,
      select: selectSigungu
    }))
    const res = await getDongne({ sido: sido.select, sigungu: selectSigungu })
    setDongne({
      dongneArr: res.subRegion,
      select: ''
    })
    nextStep()
  }

  const handleDongneChange = async (selectDongne: string) => {
    setDongne((prevState) => ({
      ...prevState,
      select: selectDongne
    }))
    const data = await getLocation({
      sido: sido.select,
      sigungu: sigungu.select,
      dongne: selectDongne
    })
    console.log(data)
    window.localStorage.setItem('location', JSON.stringify(data))
    navigate('/map')
  }

  useEffect(() => {
    console.log(sido)
  }, [sido])

  return (
    <div className={'flex flex-col w-full h-full'}>
      <Spacing size={80}></Spacing>

      {currentStep === 1 && (
        <SelectCityStep1
          sidoArr={sido.sidoArr}
          select={sido.select}
          onChange={handleSidoChange}
        />
      )}
      {currentStep === 2 && (
        <SelectCityStep2
          sido={sido.select}
          onChange={handleSiGunguChange}
          sigunguArr={sigungu.sigunguArr}
          select={sigungu.select}
          onClick={setCurrentStep}
        />
      )}
      {currentStep === 3 && (
        <SelectCityStep3
          sido={sido.select}
          sigungu={sigungu.select}
          dongneArr={dongne.dongneArr}
          select={dongne.select}
          onChange={handleDongneChange}
        />
      )}
    </div>
  )
}

export default SelectCity
