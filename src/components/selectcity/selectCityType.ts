export interface SelectCityProps {
  onChange: (selectedSido: string) => void
  selectList: string[]
  currentStep: number
  selectProvince?: string
  selectCity?: string
  onClick?: (number: number) => void
}
