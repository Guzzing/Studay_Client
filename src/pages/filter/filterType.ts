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
