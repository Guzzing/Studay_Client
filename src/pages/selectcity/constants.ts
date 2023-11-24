export const LAST_STEP = 3 as const
export const SELECT_CITY = {
  LAST_STEP: 3 as const,
  PROVINCE: '도시' as const,
  CITY: '지역구' as const,
  TOWN: '동네' as const,
  PLACE_HOLDER: {
    PROVINCE_TEXT: '도시를 선택해 주세요',
    CITY_TEXT: '지역구를 선택해 주세요',
    TOWN_TEXT: '동네를 선택해 주세요'
  } as const,
  TITLE: {
    DEFAULT_TITLE: '검색하고자 하는',
    SELECT_TITLE: '선택하셨군요!',
    SUB_TITLE: '학원에 위치를 알려주세요',
    SUB_TITLE_CITY: '어떤 지역구인가요?',
    SUB_TITLE_TOWN: `어떤 동네인지 알려주세요!`
  }
}
