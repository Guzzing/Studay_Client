import { atom } from 'jotai'

const initMapFilter: SubjectList = {
  subjectList: [
    { title: '예능', filter: '예능(대)', color: 'default' },
    { title: '국제화', filter: '국제화', color: 'default' },
    { title: '입시', filter: '입시, 검정 및 보습', color: 'default' },
    { title: '직업기술', filter: '직업기술', color: 'default' },
    { title: '종합', filter: '종합(대)', color: 'default' },
    { title: '독서실', filter: '독서실', color: 'default' },
    { title: '기예', filter: '기예(대)', color: 'default' },
    { title: '기타', filter: '기타(대)', color: 'default' },
    { title: '인문사회', filter: '인문사회(대)', color: 'default' },
    { title: '정보', filter: '정보', color: 'default' }
  ],
  maxMoney: 500_000,
  minMoney: 1
}

export const mapFilterState = atom(initMapFilter)
