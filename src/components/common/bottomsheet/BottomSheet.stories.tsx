// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react'

import BottomSheet from './BottomSheet'

const meta: Meta<typeof BottomSheet> = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  argTypes: {
    title: {
      control: 'text'
    }
  }
}

export default meta
type Story = StoryObj<typeof BottomSheet>

export const Default: Story = {
  render: (args) => (
    <BottomSheet
      title={args.title}
      address={'주소'}
      number={'전화번호'}
      detailInfo={{
        academyName: 'test',
        contact: 'test',
        fullAddress: 'test',
        shuttleAvailability: 'test',
        expectedFee: 0,
        updatedDate: '2023-11-16',
        areaOfExpertise: 'test',
        lessonGetResponses: {
          lessons: [
            {
              lessonId: 0,
              subject: 'test',
              capacity: 0,
              duration: 'test',
              totalFee: 0
            }
          ]
        },
        reviewPercentGetResponse: {
          kindnessPercent: 0,
          goodFacilityPercent: 0,
          cheapFeePercent: 0,
          goodManagementPercent: 0,
          lovelyTeachingPercent: 0
        },
        isLiked: false
      }}
    />
  )
}
