import { useEffect } from 'react'
import { useAtom } from 'jotai'
import Icon from '@/components/common/icon/Icon'
import Spacing from '@/components/common/spacing/Spacing'
import { likeAcademyApi } from '@/libs/api/likeacademy/LikeAcademyApi'
import { likeAcademyAtom } from '@/libs/store/likeacademyAtom'

const LikeAcademy = () => {
  const [data, setData] = useAtom(likeAcademyAtom)
  const ACADEMY_DATA = [
    { academyName: '샤론음악학원', expectedFee: 150_000 },
    { academyName: '피겨 스케이팅', expectedFee: 300_000 },
    { academyName: '지성 태권도학원', expectedFee: 100_000 }
  ]

  useEffect(() => {
    const res = async () => {
      const api = await likeAcademyApi()
      setData(api)
    }
    res()
  }, [])
  return (
    <div className={'relative w-full h-full'}>
      <Spacing size={90} />
      <div>
        {ACADEMY_DATA.map(({ academyName, expectedFee }, index) => (
          <li
            key={index}
            className={
              'relative list-none h-[100px] px-[12px] py-[20px] border-b-[1px]'
            }>
            <input
              type={'checkbox'}
              name={''}
              id={''}
              checked
              className={'absolute top-[50%] translate-y-[-50%]'}
            />
            <div className={'ml-[50px] my-[5px]'}>
              <p className={'subHead-18'}>{academyName}</p>
              <p>
                {'예상 교육비'}
                <span>{expectedFee}</span>
              </p>
            </div>
            <Icon
              icon={'Close'}
              classStyle={'absolute right-[20px] top-[14px] cursor-pointer'}
            />
          </li>
        ))}

        <div
          className={
            'h-[100px] w-full px-[25px] absolute bottom-0 flex justify-between items-center border-t-[1px]'
          }>
          <span>{'예상 교육금액'}</span>
          <span className={'headline-25'}>
            {450_000}
            {'원'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default LikeAcademy
