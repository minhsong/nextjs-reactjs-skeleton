import styled from 'styled-components'
import tw from 'twin.macro'

export const HeaderWrapper = styled.header`
  ${tw`z-10 py-4 bg-white shadow-md dark:bg-gray-800`}
`

export const HeaderContent = styled.div`
  ${tw`container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300`}
`

export const HamburgerButton = styled.button`
  ${tw`p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none`}
`

export const SearchWrapper = styled.div`
  ${tw`flex justify-center flex-1 lg:mr-32`}
`

export const SearchContent = styled.div`
  ${tw`relative w-full max-w-xl mr-6 focus-within:text-purple-500`}
`
export const SearchInput = styled.input`
  ${tw`w-full pl-8 pr-2 py-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none`}
`
export const InputIconWrapper = styled.div`
  ${tw`absolute inset-y-0 flex items-center pl-2`}
`

export const MenuActionWrapper = styled.ul`
  ${tw`flex items-center flex-shrink-0 space-x-6`}
`

export const NotiButton = styled.button`
  ${tw`relative align-middle rounded-md focus:outline-none`}
`

export const NotificaitonActiveMarker = styled.span`
  ${tw`absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full`}
`
export const DropdownLink = styled.a<{ justify?: 'between' | 'start' | 'end' }>`
  ${tw`inline-flex items-center  w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800`}
  ${({ justify }) => {
    switch (justify) {
      case 'between':
        return tw`justify-between`
      case 'end':
        return tw`justify-end`
      case 'start':
        return tw`justify-start`
      default:
        return null
    }
  }}
`
export const NotificationActive = styled.span`
  ${tw`absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full`}
`
export const AlertCount = styled.span`
  ${tw`inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full`}
`
