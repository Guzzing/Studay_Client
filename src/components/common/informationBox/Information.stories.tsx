import type { Meta, StoryObj } from '@storybook/react'
import InformationBox from './InformationBox'

const meta = {
  title: 'Components/InformationBox',
  component: InformationBox,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    imageUrl: {
      control: 'text'
    },
    mainTitle: {
      control: 'text'
    },
    subTitle: {
      control: 'text'
    },
    description: {
      control: 'text'
    }
  }
} satisfies Meta<typeof InformationBox>

export default meta
type Story = StoryObj<typeof meta>

export const defaultInformationBox: Story = {
  args: {
    mainTitle: '김길동',
    subTitle: '중학교 3학년',
    description: '안녕하세요! 제 아들 김길동입니다.'
  }
}

export const profileInformationBox: Story = {
  args: {
    imageUrl:
      'https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg',
    mainTitle: '홍길동',
    subTitle: '고등학교 1학년',
    description: '안녕하세요! 고1 홍길동입니다'
  }
}
