const BottomSheetContent = ({ expanded }: { expanded: boolean }) => {
  return (
    <div>
      <div className={'font-nsk body-15 text-black-800 mb-[20px]'}>
        {' 서울 강동구 상암로 12 202호 (우) 05242 02-426-3688 '}
      </div>
      {expanded && <div>{'펼쳤을 때 나오는 어쩌구 '}</div>}
    </div>
  )
}

export default BottomSheetContent
