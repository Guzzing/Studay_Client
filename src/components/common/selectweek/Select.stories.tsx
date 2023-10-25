import type { Meta, StoryObj } from '@storybook/react'
import SelectWeek from './SelectWeek'

const meta: Meta<typeof SelectWeek> = {
  component: SelectWeek
}

export default meta
type Story = StoryObj<typeof SelectWeek>

export const Default: Story = {
  render: () => <SelectWeek />
}
