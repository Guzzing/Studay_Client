import type { Meta, StoryObj } from '@storybook/react'
import InputModal from './InputModal'
import Modal from './Modal'

const meta = {
  title: 'Components/modal',
  component: Modal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: '모달에서 사용할 템플릿을 넣어주세요!',
      control: false,
      type: { name: 'string', required: true }
    }
  }
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: (
      <InputModal
        onConfirm={() => alert('onConfirm!')}
        onCancel={() => alert('onCancel!')}
        title={'TEST!'}
      ></InputModal>
    )
  }
}
