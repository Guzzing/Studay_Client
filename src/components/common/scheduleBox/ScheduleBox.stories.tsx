import type { Meta, StoryObj } from '@storybook/react'
import Icon from '../icon/Icon'
import ScheduleBox from '@/components/common/scheduleBox/ScheduleBox'

const meta: Meta<typeof ScheduleBox> = {
  component: ScheduleBox,
  tags: ['autodocs'],
  title: 'components/ScheduleBox',
  argTypes: {
    scheduleType: {
      control: 'select',
      options: ['profile', 'toggle']
    },
    mainTitle: {
      control: 'text'
    },
    subElement: {
      control: 'text'
    },
    rightBottomElement: {
      control: 'text'
    },
    isRegister: {
      control: 'boolean'
    }
  }
}

export default meta
type Story = StoryObj<typeof ScheduleBox>

export const ProfileScheduleBox: Story = {
  args: {
    scheduleType: 'profile',
    mainTitle: 'mainTitle',
    subElement: (
      <>
        <Icon icon={'Time'} />
        <p>{'오후 4시에 종료'}</p>
      </>
    ),
    rightBottomElement: (
      <>
        {/* 반복문 */}
        <div>
          <img
            src={'https://chanwookim.me/agumon-dday/agumon.png'}
            alt={'image'}
            className={'w-[28px] h-[28px] rounded-full'}
          />
        </div>
        <div>
          <img
            src={'https://chanwookim.me/agumon-dday/agumon.png'}
            alt={'image'}
            className={'w-[28px] h-[28px] rounded-full mx-[3px]'}
          />
        </div>
      </>
    )
  }
}

export const RegisteredScheduleBox: Story = {
  args: {
    isRegister: true,
    scheduleType: 'toggle',
    mainTitle: '학원 이름',
    subElement: (
      <>
        <div>
          <p>{'매주 월,화,수'}</p>
        </div>
        <div>{'tkghl'}</div>
      </>
    ),
    rightBottomElement: (
      <>
        {/* 반복문 */}
        <div>{'btn'}</div>
      </>
    )
  }
}

export const NotRegisteredScheduleBox: Story = {
  args: {
    scheduleType: 'toggle',
    mainTitle: '학원 이름',
    subElement: (
      <>
        <div>
          <p>{'매주 월,화,수'}</p>
        </div>
        <div>{'tkghl'}</div>
      </>
    ),
    rightBottomElement: (
      <>
        <div>{'btn'}</div>
      </>
    )
  }
}
