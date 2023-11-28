export const DUMMY_DATA = {
  date: '2023-11-06 (월)',
  academyInfo: {
    academyName: '메이저베타수학학원',
    address: '경기도 성남시 분당구 내정로166번길 43 / 401호 일부 (수내동)'
  },
  lessonInfo: {
    lessonName: '보습',
    capacity: 10, // 정원
    totalFee: 468_000, // 금액
    lessonTimes: [
      {
        startTime: '20:00',
        endTime: '23:00'
      }
    ],
    periodicity: 'WEEKLY'
  },
  childrenInfos: [
    {
      childId: 1,
      childName: '유원우 아들',
      imageUrl:
        'https://team09-resources-bucket.s3.ap-northeast-1.amazonaws.com/icon_0_0.png',
      memo: '아이에 대한 memo dummyData',
      dashBoardId: 2
    }
  ]
}
