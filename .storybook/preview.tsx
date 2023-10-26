import type { Preview } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import '../src/styles/index.css'
import React from 'react'

const customViewports = {
  iPhone13: {
    name: 'iPhone 13',
    styles: {
      width: '390px',
      height: '844px'
    },
    type: 'mobile'
  },
  tablet: {
    name: 'iPad Pro 11',
    styles: {
      width: '834px',
      height: '1194px'
    },
    type: 'tablet'
  }
}

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    viewport: {
      viewports: customViewports,
      defaultViewport: 'iPhone13'
    }
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div>
          <Story />
        </div>
      </BrowserRouter>
    )
  ]
}

export default preview
