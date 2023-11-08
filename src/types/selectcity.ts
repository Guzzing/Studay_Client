export interface SidoType {
  sidoArr: string[]
  select: string
}
export interface SigunguType {
  sigunguArr: string[]
  select: string
}

export interface DongneType {
  dongneArr: string[]
  select: string
}

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
  setState: (selectData: string) => void
}

export interface ResetSelectedParam {
  step: number
}
