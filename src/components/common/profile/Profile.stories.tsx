import type { Meta, StoryObj } from '@storybook/react'
import Profile from './Profile'
const meta = {
  title: 'Components/Profile',
  component: Profile,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    imageSize: {
      control: 'select',
      options: ['w-[150px] h-[150px]', 'w-[92px] h-[92px]', 'w-[70px] h-[70px]']
    }
  }
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof meta>

export const LargeProfile: Story = {
  args: {
    imageSize: 'L',
    canEdit: true,
    onClick: () => alert('l size 프로필 변경')
  }
}

export const MediumProfile: Story = {
  args: {
    imageSize: 'M',
    canEdit: false,
    onClick: () => alert('l size 프로필 변경')
  }
}

export const SmallProfile: Story = {
  args: {
    imageSize: 'S',
    canEdit: true,
    onClick: () => alert('s size 프로필 변경')
  }
}
