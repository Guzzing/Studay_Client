import type { Meta, StoryObj } from '@storybook/react'
import Silder from '@/components/common/slider/Slider'

const meta: Meta<typeof Silder> = {
  title: 'Components/Silder',
  component: Silder,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  render: function Render() {
    return (
      <div className={'w-full h-full'}>
        <Silder />
      </div>
    )
  }
}

export default meta

type Story = StoryObj<typeof Silder>

export const Primary: Story = {
  ...meta
}
