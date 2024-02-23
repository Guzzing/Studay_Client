import type { Meta, StoryObj } from '@storybook/react'
import TopNavigation from './TopNavigation'
import Icons from '../icon/Icons'

const iconNames = [...Object.keys(Icons), undefined] as (
  | keyof typeof Icons
  | undefined
)[]

const meta: Meta<typeof TopNavigation> = {
  component: TopNavigation,
  tags: ['autodocs'],
  title: 'components/TopNavigation',
  argTypes: {
    title: {
      control: 'text'
    },
    type: {
      control: 'select',
      options: ['left', 'center']
    },
    icon1: {
      control: 'select',
      options: iconNames
    },
    icon2: {
      control: 'select',
      options: iconNames
    },
    icon3: {
      control: 'select',
      options: iconNames
    }
    // icon1: {
    //   control: 'select',
    //   options: ['SideBar', 'Alarm', undefined]
    // },
    // icon2: {
    //   control: 'select',
    //   options: ['SideBar', 'Alarm', undefined]
    // },
    // icon3: {
    //   control: 'select',
    //   options: ['SideBar', 'Alarm', undefined]
    // }
  }
}

export default meta
type Story = StoryObj<typeof TopNavigation>

export const Default: Story = {
  render: (args) => (
    <TopNavigation
      title={args.title}
      type={args.type}
      icon1={args.icon1}
      icon2={args.icon2}
      icon3={args.icon3}
    />
  )
}
