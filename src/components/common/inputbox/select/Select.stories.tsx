import type { Meta, StoryObj } from '@storybook/react'
import Select from '@/components/common/inputbox/select/Select'

const meta: Meta<typeof Select> = {
  component: Select,
  tags: ['autodocs'],
  title: 'components/Select',
  argTypes: {
    selecttype: {
      control: 'select',
      options: ['Box', 'Single']
    },
    fullWidth: {
      control: 'boolean'
    },
    value: { control: 'text' }
  }
}

export default meta
type Story = StoryObj<typeof Select>

export const SingleSelect: Story = {
  args: {
    selecttype: 'Single',
    fullWidth: true
  }
}
