import type { Meta, StoryObj } from '@storybook/react'
import { ArrowDown } from '@/assets/icon'
import { Accordion } from '@/components/common/accordion/Accordion'

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  tags: ['autodocs'],
  title: 'components/Accordion',
  argTypes: {
    title: {
      control: 'text',
      required: true
    },
    initialState: {
      control: 'boolean'
    }
  },
  render: ({ ...args }) => (
    <Accordion
      title={args.title}
      contentHeight={52}
      initialState={args.initialState}
      content={
        <div className={'flex flex-col gap-1 bg-blue-100'}>
          <div>{'안녕'}</div>
          <div>{'잘가'}</div>
        </div>
      }
      rightElement={<ArrowDown />}
    />
  )
}

export default meta
type Story = StoryObj<typeof Accordion>
export const Default: Story = {
  args: {
    title: '샤론음악학원',
    rightElement: <ArrowDown />,
    content: (
      <div className={'flex flex-column gap-2'}>
        <div>{'안녕'}</div>
        <div>{'잘가'}</div>
      </div>
    )
  }
}
