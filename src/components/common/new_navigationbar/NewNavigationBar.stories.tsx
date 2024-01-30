import { Meta, StoryObj } from '@storybook/react'
import NewNavigationBar from '@/components/common/new_navigationbar/NewNavigationBar.tsx'

const meta: Meta<typeof NewNavigationBar> = {
  component: NewNavigationBar,
  tags: ['autodocs'],
  title: 'components/NewNavigationBar',
  argTypes: {
    selectIcon: {
      control: 'select'
    }
  }
}

export default meta
type NewStory = StoryObj<typeof NewNavigationBar>

export const Default: NewStory = {
  args: {
    selectIcon: 'Home'
  }
}
