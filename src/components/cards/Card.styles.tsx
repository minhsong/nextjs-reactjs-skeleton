import styled from 'styled-components'
import tw from 'twin.macro'

export const Card = styled.div`
  ${tw`flex items-center p-4 bg-white rounded-lg shadow-xs`}
`
export const IconWrap = styled.div`
  ${tw`p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500`}
`
export const CardTitle = styled.p`
  ${tw`mb-2 text-sm font-medium text-gray-600`}
`
export const CountNumber = styled.p`
  ${tw`text-lg font-semibold text-gray-700`}
`
export const Cards = styled.div`
  ${tw`grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4`}
`
