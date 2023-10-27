import type { Meta, StoryObj } from '@storybook/react'
import StepQuestion from './StepQuestion.tsx'

const meta: Meta<typeof StepQuestion> = {
  component: StepQuestion,
  title: 'Components/StepQuestion',
  tags: ['autodocs'],
  argTypes: {
    step: {
      description: '컴포넌트에서 사용할 넘버링을 넣어주세요'
    },
    text: {
      description: '컴포넌트에서 사용할 텍스트를 넣어주세요'
    }
  }
}
export default meta
type Story = StoryObj<typeof StepQuestion>

export const Default: Story = {
  ...meta,
  args: {
    step: 0,
    text: 'StepQuestion 컴포넌트 입니다.'
  }
}
