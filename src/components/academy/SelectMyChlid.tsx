import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import Icon from '@/components/common/icon/Icon'
import { GetChildrenInfoResponse } from '@/libs/api/children/ChildrenType'
import { childAtom } from '@/libs/store/childInfoAtom'

interface SelectMyChildProps {
  data: GetChildrenInfoResponse[]
}

const SelectMyChild = ({ data }: SelectMyChildProps) => {
  const [childInfo, setChildrenInfo] = useAtom(childAtom)
  const [istoggle, setToggle] = useState(false)

  useEffect(() => {
    setChildrenInfo(data[0])
  }, [])
  return (
    <div className={'relative'}>
      <button className={'subHead-18'} onClick={() => setToggle(!istoggle)}>
        <div className={'flex gap-1 items-center justify-center'}>
          <label>
            {childInfo.nickname}
            {'의 학원'}
          </label>
          <Icon
            icon={'ArrowDown'}
            classStyle={`${istoggle ? 'rotate-180' : ''}`}
          />
        </div>
      </button>
      {istoggle && (
        <ul className={'absolute bg-white-200 w-[150px] z-20 border'}>
          {data.map((data) => (
            <li
              key={data.childId}
              onClick={() => {
                setChildrenInfo(data)
                setToggle(!istoggle)
              }}>
              {data.nickname}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default SelectMyChild
