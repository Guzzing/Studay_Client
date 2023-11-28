import type { Meta, StoryObj } from '@storybook/react'
import Calender from './Calender.tsx'
import { defaultDate } from '@/libs/utils/date.ts'

const [defaultYear, defaultMonth, defaultDays, days] = defaultDate()

const meta: Meta<typeof Calender> = {
  component: Calender,
  title: 'Components/Calender',
  tags: ['autodocs'],
  argTypes: {
    calenderState: {
      nowYear: defaultYear,
      nowMonth: defaultMonth,
      nowDays: defaultDays,
      toDay: days
    },
    setCalenderState: () => console.log('test'),
    existenceDays: [],
    holidays: []
  }
}

export default meta
type Story = StoryObj<typeof Calender>
export const Default: Story = {
  args: {
    calenderState: {
      nowYear: defaultYear,
      nowMonth: defaultMonth,
      nowDays: defaultDays,
      toDay: days
    },
    setCalenderState: () => console.log('test'),
    existenceDays: [],
    holidays: []
  }
}
