/**
 * @param fullStepNum 프로그래스 바 전체 스텝 개수
 * @param step 현재 스텝 개수 (단, fullStepNum보다 작아야 함)
 */
const ProgressBar = ({
  fullStepNum,
  step
}: {
  fullStepNum: number
  step: number
}) => {
  const progressBarWidth = (step / fullStepNum) * 100
  return (
    <div className={'w-full h-[3px] bg-gray-200 relative'}>
      <div
        style={{
          width: `${progressBarWidth}%`,
          transition: 'width 0.5s ease'
        }}
        className={
          'h-[3px] bg-blue-500 absolute top-0 left-0 rounded-r-lg'
        }></div>
    </div>
  )
}

export default ProgressBar
