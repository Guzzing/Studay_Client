import type { Meta, StoryObj } from '@storybook/react'
import Badge from './Badge'

const meta: Meta<typeof Badge> = {
  component: Badge,
  tags: ['autodocs'],
  title: 'components/Badge',
  argTypes: {
    value: {
      control: 'text'
    },
    isSelected: {
      control: 'select',
      options: [true, false]
    }
  }
}
export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  render: (args) => <Badge value={args.value} isSelected={args.isSelected} />
}
