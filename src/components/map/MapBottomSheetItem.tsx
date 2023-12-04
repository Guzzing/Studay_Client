import { useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { LikeBlank, LikeFilled } from '@/assets/icon'
import Label from '@/components/common/label/Label.tsx'
import { deleteLike, postLike } from '@/libs/api/mapapi/mapApi.ts'
import { Academy } from '@/libs/api/mapapi/mapApiType.ts'

export type AcademyItemProps = Omit<
  Academy,
  'latitude' | 'longitude' | 'shuttleAvailable'
> & {
  onClick?: () => void
}

const MapBottomSheetItem = ({
  academyId,
  academyName,
  categories,
  address,
  contact,
  isLiked,
  onClick
}: AcademyItemProps) => {
  const likeMutation = useMutation({
    mutationFn: (academyId: number) => postLike({ academyId: academyId }),
    onSuccess: () => {},
    onSettled: () => {
      setLiked(true)
    }
  })
  const deleteLikeMutation = useMutation({
    mutationFn: (academyId: number) => deleteLike({ academyId: academyId }),
    onSuccess: () => {},
    onSettled: () => {
      setLiked(false)
    }
  })
  const [liked, setLiked] = useState<boolean>(isLiked)
  useEffect(() => {
    setLiked(isLiked)
  }, [isLiked])

  return (
    <div className={'flex flex-col mb-[10px]'}>
      <div className={'flex flex-row items-center justify-between'}>
        <span
          className={
            'font-nsk subHead-18 text-black-900 font-bold text-left cursor-pointer'
          }
          onClick={onClick}>
          {academyName}
        </span>
        {liked ? (
          <LikeFilled
            className={'cursor-pointer'}
            onClick={() => deleteLikeMutation.mutate(academyId)}
          />
        ) : (
          <LikeBlank
            className={'cursor-pointer'}
            onClick={() => likeMutation.mutate(academyId)}
          />
        )}
      </div>
      <div className={'flex flex-row items-center mb-[5px]'}>
        {categories?.map((data, index) => (
          <div
            className={'mr-[5px]'}
            key={index}
            style={{ cursor: 'none !important' }}>
            <Label variant={'small'} label={data} color={'default'} />
          </div>
        ))}
      </div>
      <span className={'font-nsk body-14 text-black-900'}>{address}</span>
      <span className={'font-nsk body-14 text-gray-400'}>
        {contact === ' ' ? '번호 등록이 안되었습니다.' : contact}
      </span>
    </div>
  )
}

export default MapBottomSheetItem
