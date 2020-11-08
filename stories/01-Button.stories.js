import React from 'react'
import { action } from '@storybook/addon-actions'
import * as G from '../src/styles/global.styles'

import { Button } from '../src/components'
// Fake the S import of styles
// this would normally be something like the below:
// import * as S from './compenent.styled.js`

// Button components
const Primary = () => (
  <Button color='primary' onClick={action('clicked')}>
    Primary Button
  </Button>
)
const Secondary = () => (
  <Button color='secondary' onClick={action('clicked')}>
    Secondary Button
  </Button>
)

export const Buttons = () => (
  <>
    <h5>Primary Blue button</h5>
    <Primary />
    <G.Space />
    <h5>Secondary Orange button</h5>
    <Secondary />
    <G.Space />
  </>
)

// story export
export default {
  title: '01-Buttons',
  component: Buttons
}
