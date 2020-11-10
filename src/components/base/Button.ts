import styled from 'styled-components'
import tw from 'twin.macro'

export const Button = styled.button<{ color?: 'primary' | 'secondary' }>`
  // base
  ${tw`flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 transition-colors duration-150 border border-transparent rounded-lg`}
  ${({ color }) => {
    switch (color) {
      // primary
      case 'primary':
        return tw`text-white bg-purple-600 active:bg-purple-600 hover:bg-purple-700  focus:shadow-outline`
      // secondary
      case 'secondary':
        return tw`text-white bg-purple-600 active:bg-purple-600 hover:bg-purple-700  focus:shadow-outline`
      default:
        return tw`text-gray-900 active:bg-purple-700 hover:bg-purple-700  focus:shadow-outline`
    }
  }}
`

export const ButtonLink = styled.a<{
  color?: 'primary' | 'secondary'
}>`
  ${tw`flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 transition-colors duration-150 border border-transparent rounded-lg`}
  ${({ color }) => {
    switch (color) {
      // primary
      case 'primary':
        return tw`text-white bg-purple-600 active:bg-purple-600 hover:bg-purple-700  focus:shadow-outline`
      // secondary
      case 'secondary':
        return tw`text-white bg-purple-600 active:bg-purple-600 hover:bg-purple-700  focus:shadow-outline`
      default:
        return tw`text-white bg-purple-600 active:bg-purple-600 hover:bg-purple-700  focus:shadow-outline`
    }
  }}
`

export default Button
