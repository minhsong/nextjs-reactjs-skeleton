import styled from 'styled-components'
import tw from 'twin.macro'

export const DesktopWrapper = styled.aside`
  ${tw`z-20 flex-shrink-0 hidden w-64 overflow-y-auto bg-white md:block`}
`

export const MobileWrapper = styled.aside`
  ${tw`fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white md:hidden`}
`

export const MenuContentWrapper = styled.div`
  ${tw`py-4 text-gray-500`}
`
export const MenuItem = styled.li`
  ${tw`relative px-6 py-3`}
`
export const BrandMenu = styled.a`
  ${tw`ml-6 text-lg font-bold text-gray-800`}
`
export const MenuContent = styled.span`
  ${tw`inline-flex items-center`}
`

export const MenuLabel = styled.span`
  ${tw`ml-4`}
`
export const ActiveMarked = styled.span`
  ${tw`absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg`}
`

export const SubMenuWrapper = styled.ul`
  ${tw`p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-100`}
`

export const SubMenuItem = styled.li`
  ${tw`px-2 py-1 transition-colors duration-150 hover:text-gray-800`}
`

export const MobileBackdrop = styled.div`
  ${tw`fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center`}
`
