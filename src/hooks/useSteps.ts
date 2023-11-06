import { useState } from 'react'

const useSteps = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  return { currentStep, nextStep, setCurrentStep }
}
export default useSteps
