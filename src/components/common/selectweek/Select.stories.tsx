import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'
import SelectWeek from './SelectWeek'

const meta: Meta<typeof SelectWeek> = {
  component: SelectWeek,
  title: 'Atom/SelectWeek',
  tags: ['autodocs'],
  argTypes: {
    fixedDate: {
      control: 'multi-select',
      options: [0, 1, 2, 3, 4, 5, 6]
    },
    selectedDate: {
      control: 'multi-select',
      options: [0, 1, 2, 3, 4, 5, 6]
    },
    setSelectedDate: {
      control: { type: 'function' }
    }
  },
  render: function Render(args) {
    const [selectedDate, setSelectedDate] = useState<number[]>([])
    useEffect(() => {
      setSelectedDate([...args.selectedDate])
    }, [args.selectedDate])
    return (
      <SelectWeek
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
        fixedDate={args.fixedDate}
      />
    )
  }
}

export default meta
type Story = StoryObj<typeof SelectWeek>

export const Default: Story = {
  ...meta,
  args: {
    fixedDate: [0],
    selectedDate: [1]
  }
}
