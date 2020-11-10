import styled, { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'

export const GlobalStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
  }
  html {
    height: 100%;
    scroll-behavior: smooth;
  }
`

const AppStyles = styled.div`
  ${tw`font-body w-full h-screen flex flex-col items-start justify-start bg-gray-100`}
`

export const Space = styled.div<{ height?: number }>`
  height: ${({ height }) => (height ? `${height}em` : '3rem')};
`

export const Link = styled.a`
  ${tw`hover:text-orange-700 hover:underline cursor-pointer`}
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
