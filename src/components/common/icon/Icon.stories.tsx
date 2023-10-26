import type { Meta, StoryObj } from '@storybook/react'
import Abacus from '../../../assets/icon/Abacus.svg'
import Icon from './Icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'Atom/Icon',
  tags: ['autodocs'],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Icon>

export const Default: Story = {
  args: {
    children: (
      <>
        <Abacus />
      </>
    )
  }
}
