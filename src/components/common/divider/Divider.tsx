const Divider = ({ width }: { width: number }) => {
  return (
    <div
      className={
        'flex flex-row bg-[#E8E9EE] h-[1px] items-center justify-center '
      }
      style={{ width: `${width}px` }}></div>
  )
}

export default Divider
