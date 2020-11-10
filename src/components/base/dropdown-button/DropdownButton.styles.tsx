import styled from 'styled-components'
import tw from 'twin.macro'

export const DropdownWrapper = styled.div`
  ${tw`inline-block`}
`
export const DropdownItemGroup = styled.ul`
  ${tw`absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md`}
`

export const DropdownItem = styled.li`
  ${tw`flex`}
`
