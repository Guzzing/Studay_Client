import { useAtom } from 'jotai'
import Label from '@/components/common/label/Label'
import { AcademyMemo } from '@/libs/api/academy/AcademyType'
import { academyInfoAtom } from '@/libs/store/academyInfo'
const AddMemo = () => {
  const [academyInfo, setAcademyInfo] = useAtom(academyInfoAtom)
  const handleMemo = (index: number) => {
    if (academyInfo.simpleMemo[AcademyMemo[index].serverData]) {
      setAcademyInfo({
        ...academyInfo,
        simpleMemo: {
          ...academyInfo.simpleMemo,
          [AcademyMemo[index].serverData]: false
        }
      })
    } else {
      setAcademyInfo({
        ...academyInfo,
        simpleMemo: {
          ...academyInfo.simpleMemo,
          [AcademyMemo[index].serverData]: true
        }
      })
    }
  }
  return (
    <div
      className={
        'grid grid-rows-3 grid-cols-2 justify-items-stretch px-[20px] gap-2'
      }>
      {AcademyMemo.map((data, index) => {
        return (
          <Label
            key={index}
            color={
              academyInfo.simpleMemo[AcademyMemo[index].serverData]
                ? 'selected'
                : 'default'
            }
            variant={'medium'}
            label={data.clientData}
            onClick={() => handleMemo(index)}
          />
        )
      })}
    </div>
  )
}

export default AddMemo
