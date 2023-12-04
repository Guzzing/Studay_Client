const ReviewGraph = ({ value, review }: { value: string; review: number }) => {
  return (
    <div
      className={'relative flex flex-row h-[37px] w-[323px] ml-[7px] mb-[7px]'}>
      <div
        className={'h-full bg-blue-200'}
        style={{
          width: review + '%'
        }}
      />
      <div
        className={'h-full bg-gray-200'}
        style={{
          width: `${100 - review}%`
        }}
      />
      <div
        className={'absolute text-center subHead-16 z-50 ml-[13px] mt-[7px]'}>
        {value}
      </div>
      <div
        className={
          'absolute text-right left-[90%] subHead-16 z-50 ml-[13px] mt-[7px]'
        }>
        {review}
      </div>
    </div>
  )
}

export default ReviewGraph
