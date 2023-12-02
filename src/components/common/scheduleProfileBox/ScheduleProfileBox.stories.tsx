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
    }
  }
}

export default meta
type Story = StoryObj<typeof ScheduleProfileBox>

export const ProfileScheduleBox: Story = {
  args: {
    mainTitle: '메인 타이틀 입니다.',
    subTitle: '서브 타이틀 입니다.',
    handleDetail: () => console.log('test')
  }
}
