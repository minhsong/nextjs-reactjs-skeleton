import React from 'react'

export type Colors =
  | 'black'
  | 'white'
  | 'blue'
  | 'orange'
  | 'green'
  | 'grey'
  | 'grey-dark'
  | 'silver'

export type FontSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl'
export type FontWeight = 'thin' | 'semibold' | 'bold' | 'extrabold'
export type LineHeight =
  | 'none'
  | 'tight'
  | 'snug'
  | 'normal'
  | 'relaxed'
  | 'loose'

export type ButtonColors =
  | 'white'
  | 'blue'
  | 'orange'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | string
export interface Link {
  url?: string
  label?: string
  target?: string
}
export interface ImageLink {
  url: string
  imageUrl: string
}

export interface TextProps {
  text?: string
  color?: Colors
  size?: FontSize
  fontWeight?: FontWeight
  textCase?: 'upper' | 'lower'
  lineHeight?: LineHeight
  textDecoration?: 'line-through' | 'underline'
  fontStyle?: 'italic'
}

export interface ButtonProps {
  label?: string
  href?: string
  target?: '_blank' | string
  color: ButtonColors
  size?: FontSize
  fontWeight?: FontWeight
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

export interface ButtonWithIconProps extends ButtonProps {
  iconImgUrl?: string
}

export default {}
