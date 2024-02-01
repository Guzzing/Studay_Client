import type { Meta, StoryObj } from '@storybook/react'
import StandardButton from './StandardButton'

const meta: Meta<typeof StandardButton> = {
  component: StandardButton,
  tags: ['autodocs'],
  title: 'components/StandardButton',
  argTypes: {
    label: {
      control: 'text'
    },
    state: {
      control: 'select',
      options: ['disabled', 'enabled']
    },
    style: {
      control: 'select',
      options: ['outlined', 'filled']
    }
  }
}
export default meta
type Story = StoryObj<typeof StandardButton>

export const Default: Story = {
  render: (args) => (
    <StandardButton label={args.label} state={args.state} style={args.style} />
  )
}
