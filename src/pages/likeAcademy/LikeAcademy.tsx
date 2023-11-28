import { useEffect } from 'react'
import { useAtom } from 'jotai'
import Icon from '@/components/common/icon/Icon'
import Spacing from '@/components/common/spacing/Spacing'
import {
  getLikeAcademyApi,
  deleteLikeAcademyApi
} from '@/libs/api/likeacademy/LikeAcademyApi'
import {
  totalAtom,
  checkGroupAtom,
  likeAcademyAtom
} from '@/libs/store/likeacademyAtom'

const LikeAcademy = () => {
  const [total, setTotal] = useAtom(totalAtom)
  const [likeAcademies, setLikeAcademy] = useAtom(likeAcademyAtom)
  const [checkGroup, setCheckGroup] = useAtom(checkGroupAtom)

  const onClick = (index: number) => {
    setCheckGroup((prevCheckGroup) => {
      const newCheckGroup = [...prevCheckGroup]
      newCheckGroup[index] = !newCheckGroup[index]
      return newCheckGroup
    })
  }
  useEffect(() => {
    const res = async () => {
      const api = await getLikeAcademyApi()
      api && setCheckGroup(api.likeAcademyInfos.map(() => true))
      setLikeAcademy(api)
    }
    res()
  }, [])

  useEffect(() => {
    if (likeAcademies) {
      let sum = 0
      if (checkGroup) {
        for (const [i, element] of checkGroup.entries()) {
          if (element) {
            sum += likeAcademies.likeAcademyInfos[i].expectedFee
          }
        }
      }
      setTotal(sum)
    }
  }, [checkGroup])
  return (
    <div className={'relative w-full h-full'}>
      <Spacing size={90} />
      <div className={'overflow-auto h-[550px]'}>
        {likeAcademies.likeAcademyInfos.length > 0
          ? likeAcademies.likeAcademyInfos.map(
              ({ academyId, academyName, expectedFee }, index) => (
                <li
                  key={academyId}
                  className={
                    'relative list-none h-[100px] px-[12px] py-[20px] border-b-[1px]'
                  }>
                  <input
                    type={'checkbox'}
                    name={''}
                    id={''}
                    checked={checkGroup && checkGroup[index] ? true : false}
                    onClick={() => onClick(index)}
                    className={
                      'absolute top-[50%] translate-y-[-50%] cursor-pointer'
                    }
                  />
                  <div className={'ml-[50px] my-[5px]'}>
                    <p className={'subHead-18'}>{academyName}</p>
                    <p>
                      {'예상 교육비'}
                      <span className={'p-[10px]'}>
                        {expectedFee}
                        {'원'}
                      </span>
                    </p>
                  </div>
                </li>
              )
            )
          : ''}

        <div
          className={
            'h-[100px] w-full px-[25px] absolute bottom-0 flex justify-between items-center border-t-[1px]'
          }>
          <span>{'예상 교육금액'}</span>
          <span className={'headline-25'}>
            {total}
            {'원'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default LikeAcademy
