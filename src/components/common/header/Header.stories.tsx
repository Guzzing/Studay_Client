import type { Meta, StoryObj } from '@storybook/react'
import Header from './Header'
const meta = {
  title: 'Component/Header',
  component: Header,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    headerType: {
      control: 'select',
      options: ['BackPush', 'Logo', 'Close', 'CloseWithTitle']
    },
    pageTitle: {
      control: 'text'
    },
    rightElement: {
      control: 'text'
    }
  }
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const BackPushHeader: Story = {
  args: {
    headerType: 'BackPush'
  }
}

export const LogoHeader: Story = {
  args: {
    headerType: 'Logo',
    pageTitle: 'pageName',
    rightElement: (
      <>
        <span className={'mx-[6px]'}>{'👏'}</span>
        <span>{'👏'}</span>
      </>
    )
  }
}

export const CloseHeader: Story = {
  args: {
    headerType: 'Close'
  }
}

export const CloseWithTitleHeader: Story = {
  args: {
    headerType: 'CloseWithTitle',
    pageTitle: 'pageName'
  }
}
