import { useState } from 'react'
import { LikeBlank, LikeFilled } from '@/assets/icon'
const BottomSheetHeader = ({ title }: { title: string }) => {
  const [liked, setLiked] = useState<boolean>(false)
  //TODO: 좋아요 API 로직 추가
  return (
    <div className={'flex flex-row justify-between w-full mb-[17px]'}>
      <h1 className={'font-nsk headline-25 text-black-800'}>{title}</h1>
      {liked ? (
        <LikeFilled
          className={'cursor-pointer'}
          onClick={() => setLiked(!liked)}
        />
      ) : (
        <LikeBlank
          className={'cursor-pointer'}
          onClick={() => setLiked(!liked)}
        />
      )}
    </div>
  )
}

export default BottomSheetHeader
