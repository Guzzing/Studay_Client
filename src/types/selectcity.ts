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
  key: keyof MapInfoAtomType
}

export interface MapInfoAtomType {
  selectSido: string
  selectSigungu: string
  selectDongne: string
  latitude: number
  longitude: number
}

export interface ResetSelectedParam {
  step: number
}
