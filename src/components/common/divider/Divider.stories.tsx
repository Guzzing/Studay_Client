import type { Meta, StoryObj } from '@storybook/react'
import Divider from '@/components/common/divider/Divider.tsx'

const meta: Meta<typeof Divider> = {
  component: Divider,
  tags: ['autodocs'],
  title: 'components/Divider',
  argTypes: {
    width: {
      control: 'text'
    }
  }
}
export default meta
type Story = StoryObj<typeof Divider>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: '100px', height: '100px', marginTop: '50px' }}>
      <Divider width={args.width} />
    </div>
  )
}
