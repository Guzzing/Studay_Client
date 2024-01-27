import { Meta, StoryObj } from '@storybook/react'
import SearchBar from '@/components/common/searchBar/SearchBar.tsx'

const meta: Meta<typeof SearchBar> = {
  component: SearchBar,
  title: 'Components/SearchBar',
  argTypes: {
    fullWidth: {
      control: 'boolean'
    },
    placeholder: { control: 'text' }
  }
}

export default meta
type Story = StoryObj<typeof SearchBar>

export const SearchInput: Story = {
  args: {
    fullWidth: true,
    placeholder: '값을 입력해주세요'
  }
}
