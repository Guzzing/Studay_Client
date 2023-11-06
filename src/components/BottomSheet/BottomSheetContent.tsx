interface BottomSheetContentProps {
  expanded: boolean
  number: string
  address: string
}
const BottomSheetContent = ({
  expanded,
  number,
  address
}: BottomSheetContentProps) => {
  return (
    <div>
      <div className={'font-nsk body-15 text-black-900 mb-[20px]'}>
        {address}
        <br />
        {number}
      </div>
      {expanded && <div>{'펼쳤을 때 나오는 어쩌구 '}</div>}
    </div>
  )
}

export default BottomSheetContent
