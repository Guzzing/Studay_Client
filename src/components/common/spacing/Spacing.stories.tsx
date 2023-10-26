import type { Meta, StoryObj } from '@storybook/react'
import Spacing from './Spacing'

const meta: Meta<typeof Spacing> = {
  title: 'Components/spacing',
  component: Spacing,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'Spacing에서 사용할 높이를 입력해 주세요',
      control: { type: 'number' },
      type: { name: 'number', required: true }
    },
    color: {
      description: 'Spacing에서 사용할 색상을 입력해 주세요',
      control: { type: 'text' },
      type: { name: 'string', required: true }
    }
  }
}

export default meta

type Story = StoryObj<typeof Spacing>

export const Primary: Story = {
  render: () => <Spacing size={32} color={'blue-500'} />
}
