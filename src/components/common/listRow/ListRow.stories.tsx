import type { Meta, StoryObj } from '@storybook/react'
import ListRow from '@/components/common/listRow/ListRow'

const meta: Meta<typeof ListRow> = {
  component: ListRow,
  tags: ['autodocs'],
  title: 'components/ListRow',
  argTypes: {
    hasBorder: {
      control: 'boolean'
    },
    rightElement: {
      control: 'text'
    },
    leftElement: {
      control: 'text',
      required: true
    },
    paddingSize: {
      control: 'select',
      options: ['small', 'medium', 'large']
    }
  },
  render: ({ ...args }) => (
    <ListRow
      rightElement={<div>{args.rightElement}</div>}
      leftElement={<div>{args.leftElement}</div>}
      paddingSize={args.paddingSize}
      hasBorder={args.hasBorder}
    />
  )
}

export default meta
type Story = StoryObj<typeof ListRow>

export const Default: Story = {
  args: {
    rightElement: <div>{'학원명'}</div>,
    leftElement: <div>{'샤론음악학원'}</div>,
    paddingSize: 'medium',
    hasBorder: false
  }
}

export const ListRowBorder: Story = {
  args: {
    rightElement: <div>{'학원명'}</div>,
    leftElement: <div>{'샤론음악학원'}</div>,
    paddingSize: 'medium',
    hasBorder: true
  }
}
