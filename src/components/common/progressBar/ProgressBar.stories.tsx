import type { Meta, StoryObj } from '@storybook/react'
import ProgressBar from '@/components/common/progressBar/ProgressBar'

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  tags: ['autodocs'],
  title: 'components/ProgressBar',
  argTypes: {
    step: {
      control: 'number'
    },
    fullStepNum: {
      control: 'number'
    }
  },
  render: ({ ...args }) => <ProgressBar {...args} />
}

export default meta
type Story = StoryObj<typeof ProgressBar>

export const Default: Story = {
  args: {
    step: 3,
    fullStepNum: 4
  }
}
