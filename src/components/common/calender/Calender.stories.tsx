import type { Meta, StoryObj } from '@storybook/react'
import Calender from './Calender.tsx'

const meta: Meta<typeof Calender> = {
  component: Calender,
  title: 'Components/Calender',
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      description: '일자를 클릭했을때 실행할 함수를 넣어주세요!',
      control: { type: 'function' }
    }
  }
}

export default meta
type Story = StoryObj<typeof Calender>
export const Default: Story = {
  ...meta
}
