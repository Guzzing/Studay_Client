import { Meta, StoryObj } from '@storybook/react'
import NavigationBar from '@/components/common/navigationbar/NavigationBar.tsx'

const meta: Meta<typeof NavigationBar> = {
  component: NavigationBar,
  tags: ['autodocs'],
  title: 'components/NavigationBar',
  argTypes: {
    selectIcon: {
      control: 'select'
    }
  }
}

export default meta
type Story = StoryObj<typeof NavigationBar>

export const Default: Story = {
  args: {
    selectIcon: 'Home'
  }
}
