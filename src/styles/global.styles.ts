import styled, { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'
import { Colors, TextProps } from '../services/api/types'

export const GlobalStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
  }
  html {
    height: 100%;
    scroll-behavior: smooth;
  }

  .mapboxgl-popup > .mapboxgl-popup-content {
    ${tw`bg-gray-300 flex flex-row items-stretch p-0`}
  }
`

export const Section = styled.section<{
  bgImgURL?: string
  bgColor?: Colors
  position?: 'absolute' | 'relative'
  spacing?: 4 | 8 | 12 | 16 | 24 | 32 | 48
}>`

  ${tw`w-full`}

  ${({ position }) => {
    switch (position) {
      case 'absolute':
        return tw`absolute`
      case 'relative':
        return tw`relative`
      default:
        return null
    }
  }}
  
  ${({ bgColor }) => {
    switch (bgColor) {
      case 'black':
        return tw`bg-black`
      case 'white':
        return tw`bg-white`
      case 'blue':
        return tw`bg-blue-700`
      case 'orange':
        return tw`bg-orange-700`
      case 'green':
        return tw`bg-green-700`
      case 'grey':
        return tw`bg-gray-300`
      case 'silver':
        return tw`bg-gray-500`
      default:
        return null
    }
  }}

  ${({ spacing }) => {
    switch (spacing) {
      case 4:
        return tw`py-4`
      case 8:
        return tw`py-8`
      case 12:
        return tw`py-12`
      case 16:
        return tw`py-16`
      case 24:
        return tw`py-24`
      case 32:
        return tw`py-32`
      case 48:
        return tw`py-48`
      default:
        return null
    }
  }}

  ${({ bgImgURL }) =>
    bgImgURL && `background:url('${bgImgURL}') center/cover no-repeat;`}
`

const AppStyles = styled.div`
  ${tw`font-body w-full h-screen flex flex-col items-start justify-start bg-gray-100`}
`

export const FlexContainer = styled.div<{
  position?: 'absolute' | 'relative'
  flow?: 'row' | 'col'
  verticalAlign?: 'center' | 'start' | 'end' | 'stretch'
  horizontalAlign?: 'center' | 'start' | 'end' | 'between'
  textAlign?: 'left' | 'center' | 'right'
  contentSize?: 'sm' | 'md' | 'lg' | 'xl'
}>`
  ${tw`mx-auto flex`}
  ${({ contentSize }) => {
    switch (contentSize) {
      case 'sm':
        return tw`w-full sm:max-w-screen-sm`
      case 'md':
        return tw`w-full sm:max-w-screen-md`
      case 'lg':
        return tw`w-full sm:max-w-screen-lg`
      case 'xl':
        return tw`w-full sm:max-w-screen-xl`
      default:
        return tw`container`
    }
  }}
  ${({ position }) => {
    switch (position) {
      case 'absolute':
        return tw`absolute`
      case 'relative':
        return tw`relative`
      default:
        return tw``
    }
  }}

  ${({ flow }) => {
    return flow === 'row' ? tw`flex-row` : tw`flex-col`
  }}

  ${({ verticalAlign }) => {
    switch (verticalAlign) {
      case 'center':
        return tw`items-center`
      case 'end':
        return tw`items-end`
      case 'start':
        return tw`items-start`
      case 'stretch':
        return tw`items-stretch`
    }
  }}

  ${({ horizontalAlign }) => {
    switch (horizontalAlign) {
      case 'center':
        return tw`justify-center content-center`
      case 'end':
        return tw`justify-end`
      case 'start':
        return tw`justify-start`
      case 'between':
        return tw`justify-between`
    }
  }}

  ${({ textAlign }) => {
    switch (textAlign) {
      case 'center':
        return tw`text-center`
      case 'left':
        return tw`text-left`
      case 'right':
        return tw`text-right`
    }
  }}
`

export const Container = styled.div<{
  contentSize?: 'sm' | 'md' | 'lg' | 'xl'
  position?: 'absolute' | 'relative'
}>`
  ${tw`w-full mx-auto px-2 xl:px-0`}
  ${({ contentSize }) => {
    switch (contentSize) {
      case 'sm':
        return tw`w-full sm:max-w-screen-sm`
      case 'md':
        return tw`w-full sm:max-w-screen-md`
      case 'lg':
        return tw`w-full sm:max-w-screen-lg`
      case 'xl':
        return tw`w-full sm:max-w-screen-xl`
      default:
        return tw`w-full container`
    }
  }}

  ${({ position }) => {
    switch (position) {
      case 'absolute':
        return tw`absolute`
      case 'relative':
        return tw`relative`
      default:
        return null
    }
  }}

  img, svg, video, canvas, audio, iframe, embed, object {
    display: inline-block;
  }
`

export const CenteredContainer = styled(Container)`
  ${tw`flex justify-center content-center text-center flex-col items-center py-8`}
`
export const FullWidthWrapper = styled.div`
  ${tw`w-full`}
`

export const FullWidthImg = styled.img`
  ${tw`w-full`}
`

export const Space = styled.div<{ height?: number }>`
  height: ${({ height }) => (height ? `${height}em` : '3rem')};
`

export const Link = styled.a`
  ${tw`hover:text-orange-700 hover:underline cursor-pointer`}
`

export const Text = styled.div<TextProps>`
  ${({ size }) => {
    switch (size) {
      case 'sm':
        return tw`text-sm`
      case 'md':
        return tw`text-base`
      case 'lg':
        return tw`text-lg`
      case 'xl':
        return tw`text-xl`
      case '2xl':
        return tw`text-2xl`
      case '4xl':
        return tw`text-4xl`
      case '6xl':
        return tw`text-4xl lg:text-6xl`
      default:
        return tw`text-base`
    }
  }}
   ${({ color }) => {
     switch (color) {
       case 'black':
         return tw`text-black`
       case 'white':
         return tw`text-white`
       case 'blue':
         return tw`text-blue-700`
       case 'orange':
         return tw`text-orange-700`
       case 'green':
         return tw`text-green-700`
       case 'grey':
         return tw`text-gray-700`
       case 'silver':
         return tw`text-gray-500`
       default:
         return null
     }
   }}
  ${({ fontWeight }) => {
    switch (fontWeight) {
      case 'thin':
        return tw`font-thin`
      case 'bold':
        return tw`font-bold`
      case 'semibold':
        return tw`font-semibold`
      case 'extrabold':
        return tw`font-extrabold`
      default:
        return null
    }
  }}
  ${({ textCase }) => {
    switch (textCase) {
      case 'upper':
        return tw`uppercase`
      case 'lower':
        return tw`lowercase`
      default:
        return null
    }
  }}
  ${({ lineHeight }) => {
    switch (lineHeight) {
      case 'none':
        return tw`leading-none`
      case 'tight':
        return tw`leading-tight`
      case 'snug':
        return tw`leading-snug`
      case 'normal':
        return tw`leading-normal`
      case 'relaxed':
        return tw`leading-relaxed`
      case 'loose':
        return tw`leading-loose`
      default:
        return null
    }
  }}

  ${({ textDecoration }) => {
    switch (textDecoration) {
      case 'underline':
        return tw`underline`
      case 'line-through':
        return tw`line-through`
      default:
        return null
    }
  }}

  ${({ fontStyle }) => {
    switch (fontStyle) {
      case 'italic':
        return tw`italic`
      default:
        return null
    }
  }}

`

export const SpinnerWrap = styled.div`
  ${tw`flex justify-center w-full mt-16`};
`

export const Spinner = styled.div`
  ${tw`ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16 m-5`}
  border-top-color: #3498db;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
  @-webkit-keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const OverlayWrapper = styled.div<{
  overlay?: boolean
  color?: 'blue' | 'black' | 'grey'
}>`
  ${tw`w-full h-full`}

  ${({ overlay, color }) => {
    if (overlay) {
      switch (color) {
        case 'blue':
          return tw`bg-blue-700`
        case 'grey':
          return tw`bg-gray-300`
        default:
          return tw`bg-black`
      }
    }
    return null
  }}
`

export const SpinnerOverlayWrap = styled.div`
  ${tw`z-alwaysTop absolute h-full w-full bg-blue-600 justify-center items-start flex content-center top-0 left-0`};
`

// -----------
export const MenuLink = styled.a<{ active?: boolean; hasSub?: boolean }>`
  ${tw`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800`}
  ${({ active }) => active && tw`text-gray-800 hover:text-gray-800`}
  ${({ hasSub }) => hasSub && tw`justify-between`}
`

export default AppStyles
