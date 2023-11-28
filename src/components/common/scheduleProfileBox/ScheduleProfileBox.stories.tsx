import type { Meta, StoryObj } from '@storybook/react'
import ScheduleProfileBox from '@/components/common/scheduleProfileBox/ScheduleProfileBox.tsx'

const meta: Meta<typeof ScheduleProfileBox> = {
  component: ScheduleProfileBox,
  title: 'Components/ScheduleProfileBox',
  argTypes: {
    mainTitle: {
      description: '메인 타이틀을 입력해주세요!!',
      control: { type: 'text' },
      required: true
    },
    handleEdit: {
      description: '에디트 함수를 입력해주세요',
      control: { type: 'function' },
      required: true
    },
    handleDelete: {
      description: '삭제 함수를 입력해주세요',
      control: { type: 'function' },
      required: true
    }
  }
}

export default meta
type Story = StoryObj<typeof ScheduleProfileBox>

export const ProfileScheduleBox: Story = {
  args: {
    mainTitle: '메인 타이틀 입니다.',
    handleEdit: () => alert('에디트 함수를 넣어주세요'),
    handleDelete: () => alert('삭제 함수를 넣어주새요')
  }
}
