import type { Meta, StoryObj } from '@storybook/react'
import Input from '@/components/common/inputbox/input/Input'

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ['autodocs'],
  title: 'components/Input',
  argTypes: {
    inputType: {
      control: 'select',
      options: ['Default', 'Select']
    },
    fullWidth: {
      control: 'boolean'
    },
    value: { control: 'text' },
    placeholder: { control: 'text' }
  }
}

export default meta
type Story = StoryObj<typeof Input>

export const DefaultInput: Story = {
  args: {
    inputType: 'Default',
    fullWidth: true,
    placeholder: '값을 입력해주세요'
  }
}

export const SearchInput: Story = {
  args: {
    inputType: 'Search',
    fullWidth: true,
    placeholder: '값을 입력해주세요'
  }
}
