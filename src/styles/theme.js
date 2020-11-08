// colors
export const colors = {
  black: '#000000',
  white: '#FFFFFF',
  blue: '#164cab',
  blue__dark: '#0c1e54',
  blue__grey: '#293448',
  orange: '#ee6c16',
  orange__dark: '#ac4400',
  green: '#35ab2f',
  grey: '#303846',
  grey__light: '#eef0f2',
  grey__medium: '#697283',
  grey__dark: '#010101',
}

// fonts
//-- Roboto Light Italic
//-- Roboto Regular
//-- Roboto Medium
//-- Roboto Black
//-- Ubuntu Bold
const BASE_FONT_SIZE = 16
export const FONT_WEIGHTS = {
  Light: 300,
  Regular: 400,
  Medium: 500,
  Black: 700,
}
export const FONT_FAMILIES = {
  display: 'Ubuntu',
  body: 'Roboto',
}

// set font size from px to rem
export const fontSize = (size) => `
  font-size: ${size ? size / BASE_FONT_SIZE + 'rem' : BASE_FONT_SIZE};
`

// set uniform font weight, style and size (optional)
export const font = (
  family = 'body',
  weight = FONT_WEIGHTS.Regular,
  style = 'normal',
  size
) =>
  weight &&
  `
  font-family: "${FONT_FAMILIES[family]}", sans-serif;
  font-weight: ${FONT_WEIGHTS[weight]};
  font-style: ${style};
  ${size ? fontSize(size) : null}
`
