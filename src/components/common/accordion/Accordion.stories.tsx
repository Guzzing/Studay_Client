import type { Meta, StoryObj } from '@storybook/react'
import { ArrowDown } from '@/assets/icon'
import { Accordion } from '@/components/common/accordion/Accordion'
import ListRow from '@/components/common/listRow/ListRow'

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  tags: ['autodocs'],
  title: 'components/Accordion',
  argTypes: {
    title: {
      control: 'text',
      required: true
    }
  },
  render: ({ ...args }) => (
    <Accordion
      title={args.title}
      contentHeight={106}
      initialState={args.initialState}
      content={
        <div className={'flex flex-col gap-0'}>
          <ListRow
            leftElement={
              <div className={'font-nsk text-body-18'}>{'체르니 마스터반'}</div>
            }
            rightElement={
              <div className={'font-nsk text-body-16 text-blue-500'}>
                {'50명 정원'}
              </div>
            }
            hasBorder={true}
            className={'bg-white-100'}
          />
          <ListRow
            leftElement={
              <div className={'font-nsk text-body-18'}>{'금액'}</div>
            }
            rightElement={
              <div className={'font-nsk text-body-16 text-blue-500'}>
                {'300,000원'}
              </div>
            }
            hasBorder={true}
            className={'bg-white-100'}
          />
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
