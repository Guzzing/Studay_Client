import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text'
    },
    buttonType: {
      control: 'select',
      options: [
        'Plain-blue',
        'Plain-red',
        'Round-blue-500',
        'Round-blue-700',
        'Square',
        'Floating'
      ]
    },
    width: {
      control: 'select',
      options: ['SW', 'MW', 'LW', 'XLW']
    }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const FloatButton: Story = {
  args: {
    label: '+',
    buttonType: 'Floating'
  }
}

export const PlainBlueButton: Story = {
  args: {
    label: 'Plain',
    buttonType: 'Plain-blue',
    fullWidth: true,
    onClick: () => alert('plain clicked!')
  }
}

export const PlainRedButton: Story = {
  args: {
    label: 'Plain',
    buttonType: 'Plain-red',
    onClick: () => alert('plain clicked!')
  }
}
export const RoundBlue500Button: Story = {
  args: {
    label: 'Round',
    buttonType: 'Round-blue-500',
    onClick: () => alert('round clicked!')
  }
}

export const RoundBlue700Button: Story = {
  args: {
    label: 'Round',
    buttonType: 'Round-blue-700',
    onClick: () => alert('round clicked!')
  }
}

export const SquareButton: Story = {
  args: {
    label: 'Square',
    buttonType: 'Square',
    onClick: () => alert('square clicked!')
  }
}
