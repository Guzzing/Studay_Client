import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { LikeBlank, LikeFilled } from '@/assets/icon'
import { postLike } from '@/libs/api/mapapi/mapApi.ts'
const BottomSheetHeader = ({
  title,
  isLike,
  academyId
}: {
  title: string
  isLike: boolean
  academyId: number
}) => {
  const likeMutation = useMutation({
    mutationFn: (academyId: number) => postLike({ academyId: academyId }),
    onSuccess: () => {
      setLiked(!liked)
    }
  })

  const [liked, setLiked] = useState<boolean>(isLike)
  //TODO: 좋아요 API 로직 추가

  return (
    <div className={'flex flex-row justify-between w-full mb-[17px]'}>
      <h1 className={'font-nsk headline-25 text-black-800'}>{title}</h1>
      {liked ? (
        <LikeFilled
          className={'cursor-pointer'}
          onClick={() => likeMutation.mutate(academyId)}
        />
      ) : (
        <LikeBlank
          className={'cursor-pointer'}
          onClick={() => likeMutation.mutate(academyId)}
        />
      )}
    </div>
  )
}

export default BottomSheetHeader
