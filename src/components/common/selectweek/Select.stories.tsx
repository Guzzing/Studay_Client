import type { Meta, StoryObj } from '@storybook/react'
import SelectWeek from './SelectWeek'

const meta: Meta<typeof SelectWeek> = {
  component: SelectWeek,
  title: 'components/SelectWeek',
  tags: ['autodocs'],
  argTypes: {
    fixedDate: {
      control: 'multi-select',
      options: [0, 1, 2, 3, 4, 5, 6]
    }
  },
  render: function Render(args) {
    return <SelectWeek fixedDate={args.fixedDate} />
  }
}

export default meta
type Story = StoryObj<typeof SelectWeek>

export const Default: Story = {
  ...meta,
  args: {
    fixedDate: [0]
  }
}
