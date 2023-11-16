import React, { PropsWithChildren, ReactNode } from 'react'

interface SelectCityStepProps {
  currentStep: number
}

const SelectCityStep = ({
  children,
  currentStep
}: PropsWithChildren<SelectCityStepProps>) => {
  const steps = React.Children.toArray(children)

  return <>{steps[currentStep - 1]} </>
}

interface StepProps {
  children: ReactNode
}

SelectCityStep.Step = ({ children }: StepProps) => {
  return <>{children}</>
}

export default SelectCityStep
