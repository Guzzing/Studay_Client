import type { Meta, StoryObj } from '@storybook/react'
import Chips from './Chips'

const meta: Meta<typeof Chips> = {
  component: Chips,
  tags: ['autodocs'],
  title: 'components/Chips',
  argTypes: {
    label: {
      control: 'text'
    },
    isSelected: {
      control: 'select',
      options: [true, false]
    }
  }
}
export default meta
type Story = StoryObj<typeof Chips>

export const Default: Story = {
  render: (args) => <Chips label={args.label} isSelected={args.isSelected} />
}
