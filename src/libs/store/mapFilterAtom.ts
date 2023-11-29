import { atom } from 'jotai'

const initMapFilter: SubjectList = {
  subjectList: [
    { title: '수학', filter: '수학', color: 'default' },
    { title: '과학', filter: '과학', color: 'default' },
    { title: '국어', filter: '국어', color: 'default' },
    { title: '영어', filter: '영어', color: 'default' },
    { title: '컴퓨터', filter: '컴퓨터', color: 'default' },
    { title: '예체능', filter: '예체능', color: 'default' },
    { title: '외국어', filter: '외국어', color: 'default' },
    { title: '보습', filter: '보습', color: 'default' },
    { title: '기타', filter: '기타', color: 'default' }
  ],
  maxMoney: 500_000,
  minMoney: 1
}

export const mapFilterState = atom(initMapFilter)
