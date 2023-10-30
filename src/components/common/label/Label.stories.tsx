import type { Meta, StoryObj } from '@storybook/react'

import Label from './Label'

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    label: {
      control: 'text'
    },
    color: {
      control: 'select',
      options: ['default', 'selected', 'disabled']
    },
    icon: {
      control: 'select',
      options: [
        'Abacus',
        'Computer',
        'English',
        'Etc',
        'Korean',
        'Math',
        'Music',
        'Science',
        'Music',
        'Social',
        'Synthesis',
        'Write'
      ]
    }
  }
}

export default meta
type Story = StoryObj<typeof Label>

export const Medium: Story = {
  render: (args) => (
    <Label
      icon={args.icon}
      label={args.label}
      color={args.color}
      variant={'medium'}
    />
  )
}

export const Small: Story = {
  render: (args) => (
    <Label label={args.label} color={args.color} variant={'small'} />
  )
}
