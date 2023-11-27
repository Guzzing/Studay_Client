export type ReviewRequestType = {
  academyId: number
  KINDNESS: boolean
  GOOD_FACILITY: boolean
  CHEAP_FEE: boolean
  GOOD_MANAGEMENT: boolean
  LOVELY_TEACHING: boolean
  SHUTTLE_AVAILABILITY: boolean
}

export const AcademyReview = [
  { serverData: 'KINDNESS', clientData: '선생님이 친절해요 👨‍🏫' },
  { serverData: 'GOOD_FACILITY', clientData: '시설이 좋아요 🏫' },
  {
    serverData: 'CHEAP_FEE',
    clientData: '교육비가 저렴해요 💰'
  },
  { serverData: 'GOOD_MANAGEMENT', clientData: '교육 관리가 철저해요 📝' },
  { serverData: 'LOVELY_TEACHING', clientData: '학생에 대한 애정 가득 💓' },
  { serverData: 'SHUTTLE_AVAILABILITY', clientData: '등하원이 편리해요 🚌' }
] as const
