import type { Meta, StoryObj } from '@storybook/react'
import Icon from './Icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ['autodocs'],
  title: 'components/Icon',
  argTypes: {
    icon: {
      control: 'select'
    },
    classStyle: {
      control: 'text'
    }
  }
}

export default meta
type Story = StoryObj<typeof Icon>

export const Abacus: Story = {
  args: {
    icon: 'Abacus'
  }
}

export const Alarm: Story = {
  args: {
    icon: 'Alarm'
  }
}

export const ArrowDown: Story = {
  args: {
    icon: 'ArrowDown',
    classStyle: ''
  },
  parameters: {
    docs: {
      description: {
        story: `stroke 값을 지정하면 색이 변합니다. ex. className={'stroke-black'}`
      }
    }
  }
}

export const Add: Story = {
  args: {
    icon: 'Add'
  }
}

export const BackPush: Story = {
  args: {
    icon: 'BackPush'
  }
}

export const Close: Story = {
  args: {
    icon: 'Close'
  }
}

export const Computer: Story = {
  args: {
    icon: 'Computer',
    classStyle: 'fill-blue-500'
  },
  parameters: {
    docs: {
      description: {
        story: `fill 값을 지정하면 색이 변합니다. ex. className={'fill-blue-500'}`
      }
    }
  }
}
export const Delete: Story = {
  args: {
    icon: 'Delete'
  }
}
export const Edit: Story = {
  args: {
    icon: 'Edit'
  }
}
export const English: Story = {
  args: {
    icon: 'English'
  }
}
export const Etc: Story = {
  args: {
    icon: 'Etc'
  }
}
export const Filter: Story = {
  args: {
    icon: 'Filter'
  }
}
export const Gps: Story = {
  args: {
    icon: 'Gps'
  }
}
export const Home: Story = {
  args: {
    icon: 'Home'
  },
  parameters: {
    docs: {
      description: {
        story: 'fill 값을 지정하면 색이 변합니다.'
      }
    }
  }
}
export const Info: Story = {
  args: {
    icon: 'Info'
  },
  parameters: {
    docs: {
      description: {
        story: 'fill, stroke 값을 지정하면 색이 변합니다.'
      }
    }
  }
}
export const LikeBlank: Story = {
  args: {
    icon: 'LikeBlank'
  }
}
export const Korean: Story = {
  args: {
    icon: 'Korean'
  },
  parameters: {
    docs: {
      description: {
        story: 'stroke 값을 지정하면 색이 변합니다.'
      }
    }
  }
}
export const LikeFilled: Story = {
  args: {
    icon: 'LikeFilled'
  }
}
export const Logout: Story = {
  args: {
    icon: 'Logout'
  }
}
export const MapPin: Story = {
  args: {
    icon: 'MapPin'
  }
}
export const Music: Story = {
  args: {
    icon: 'Music'
  },
  parameters: {
    docs: {
      description: {
        story: 'stroke 값을 지정하면 색이 변합니다.'
      }
    }
  }
}
export const MyList: Story = {
  args: {
    icon: 'MyList'
  }
}
export const Science: Story = {
  args: {
    icon: 'Science'
  },
  parameters: {
    docs: {
      description: {
        story: 'stroke 값을 지정하면 색이 변합니다.'
      }
    }
  }
}
export const Search: Story = {
  args: {
    icon: 'Search'
  },
  parameters: {
    docs: {
      description: {
        story: 'stroke 값을 지정하면 색이 변합니다.'
      }
    }
  }
}
export const Math: Story = {
  args: {
    icon: 'Math'
  },
  parameters: {
    docs: {
      description: {
        story: 'stroke 값을 지정하면 색이 변합니다.'
      }
    }
  }
}
export const SearchMap: Story = {
  args: {
    icon: 'SearchMap'
  },
  parameters: {
    docs: {
      description: {
        story: 'fill 값을 지정하면 색이 변합니다.'
      }
    }
  }
}
export const SideBar: Story = {
  args: {
    icon: 'SideBar'
  }
}

export const Social: Story = {
  args: {
    icon: 'Social'
  },
  parameters: {
    docs: {
      description: {
        story: 'fill 값을 지정하면 색이 변합니다.'
      }
    }
  }
}
export const Synthesis: Story = {
  args: {
    icon: 'Synthesis'
  },
  parameters: {
    docs: {
      description: {
        story: 'fill 값을 지정하면 색이 변합니다.'
      }
    }
  }
}
export const Timetable: Story = {
  args: {
    icon: 'Timetable'
  },
  parameters: {
    docs: {
      description: {
        story: 'fill, stroke 값을 지정하면 색이 변합니다.'
      }
    }
  }
}
export const Write: Story = {
  args: {
    icon: 'Write'
  },
  parameters: {
    docs: {
      description: {
        story: 'fill 값을 지정하면 색이 변합니다.'
      }
    }
  }
}
export const Time: Story = {
  args: {
    icon: 'Time'
  }
}

export const User: Story = {
  args: {
    icon: 'User'
  }
}
