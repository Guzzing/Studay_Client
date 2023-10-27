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
      options: ['Plain', 'Round', 'Square', 'Floating']
    },
    textColor: {
      control: 'select',
      options: ['blue500', 'white0', 'red600']
    },
    bgColor: {
      control: 'select',
      options: ['blue500', 'blue700', 'white0']
    },
    borderColor: {
      control: 'select',
      options: ['blue500', 'red600']
    },
    borderRadius: {
      control: 'select',
      options: ['min', 'middle', 'max']
    },
    width: {
      control: 'select',
      options: ['SW', 'MW', 'LW', 'XLW']
    },
    height: {
      control: 'select',
      options: ['SH', 'MH', 'LH']
    }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const FloatButton: Story = {
  args: {
    label: '+',
    width: 'SW',
    height: 'LH',
    bgColor: 'blue500',
    textColor: 'white0',
    onClick: () => alert('float clicked!')
  }
}

export const PlainButton: Story = {
  args: {
    label: 'Plain',
    width: 'LW',
    height: 'MH',
    bgColor: 'white0',
    textColor: 'blue500',
    onClick: () => alert('plain clicked!')
  }
}

export const RoundButton: Story = {
  args: {
    label: 'Round',
    width: 'MW',
    height: 'MH',
    bgColor: 'blue500',
    textColor: 'white0',
    onClick: () => alert('round clicked!')
  }
}

export const SquareButton: Story = {
  args: {
    label: 'Square',
    width: 'XLW',
    height: 'MH',
    bgColor: 'blue500',
    textColor: 'white0',
    borderRadius: 'min',
    onClick: () => alert('square clicked!')
  }
}
