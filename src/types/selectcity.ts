export interface SelectCityStepParam {
  step: number
  selectArr: string[]
  select: string
  prevRegion: string[]
  onChange: (selectedSido: string) => void
  onClick?: (number: number) => void
}

export interface HandleChangeParam {
  selectData: string
  key: keyof MapInfoAtomType
}

export interface MapInfoAtomType {
  selectProvince: string
  selectCity: string
  selectTown: string
  latitude: number
  longitude: number
}

export interface ResetSelectedParam {
  step: number
}
