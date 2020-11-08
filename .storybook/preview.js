import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import React from 'react'
import AppStyles from '../src/styles/global.styles'
import '../src/styles/index.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export const decorators = [
  Story => (
    <AppStyles>
      <Story />
    </AppStyles>
  )
]

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
}
