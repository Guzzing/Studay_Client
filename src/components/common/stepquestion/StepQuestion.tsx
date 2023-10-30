import StepQuestionProps from './StepQuestionType.ts'
import { StepQuestionContainer, StepStyle, TextStyle } from './constants.ts'

const StepQuestion = ({ text, step }: StepQuestionProps) => {
  return (
    <div className={StepQuestionContainer}>
      <div className={StepStyle}>{step}</div>
      <div className={TextStyle}>{text}</div>
    </div>
  )
}

export default StepQuestion
