interface Subject {
  title: string
  filter: string
  color: string
}

interface SubjectList {
  subjectList: Subject[]
  maxMoney: number
  minMoney: number
}

interface FilterData {
  latitude: number
  longitude: number
  categories: string
  minMoney: number
  maxMoney: number
}
