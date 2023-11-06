// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react'

import BottomSheet from './BottomSheet'

const meta: Meta<typeof BottomSheet> = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  argTypes: {
    title: {
      control: 'text'
    }
  }
}

export default meta
type Story = StoryObj<typeof BottomSheet>

export const Default: Story = {
  render: (args) => <BottomSheet title={args.title} />
}
