import type { Meta, StoryObj } from '@storybook/react'
import TextBox from '@/components/common/textBox/TextBox.tsx'

const meta: Meta<typeof TextBox> = {
  component: TextBox,
  title: 'Components/TextBox',
  tags: ['autodocs'],
  argTypes: {
    isFullWidth: {
      description: '너비를 100%할지 여부를 알려주세요'
    },
    width: {
      description: '너비를 입력해 주세요'
    },
    text: {
      description: '보여줄 텍스트를 넣어주세요'
    },
    onClick: {
      description: '클릭 이벤트 함수를 넣어주세요'
    },
    isCursor: {
      description: '커서 포인터 여부를 알려주세요'
    }
  }
}
export default meta
type Story = StoryObj<typeof TextBox>

export const Default: Story = {
  ...meta,
  args: {
    isFullWidth: false,
    width: 323,
    text: 'test box 컴포넌트 입니다.',
    onClick: () => console.log('test'),
    isCursor: true
  }
}
