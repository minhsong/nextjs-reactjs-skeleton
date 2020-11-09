import { DropdownButton } from '../base'
import * as Icons from '../base/Icons'
import * as S from './Header.styles'

export const Header = () => {
  const toggleSideMenu = () => {}

  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        {/* Mobile hamburger */}
        <S.HamburgerButton onClick={() => toggleSideMenu()} aria-label='Menu'>
          <Icons.Hamburger />
        </S.HamburgerButton>
        {/* Search input */}
        <S.SearchWrapper>
          <S.SearchContent>
            <S.InputIconWrapper>
              <Icons.Search />
            </S.InputIconWrapper>
            <S.SearchInput
              type='text'
              placeholder='Search for projects'
              aria-label='Search'
            />
          </S.SearchContent>
        </S.SearchWrapper>
        <S.MenuActionWrapper>
          {/* Notifications menu */}
          <li className='relative'>
            <DropdownButton />
          </li>
          {/* Profile menu */}
          <li className='relative'>
            <DropdownButton />
          </li>
        </S.MenuActionWrapper>
      </S.HeaderContent>
    </S.HeaderWrapper>
  )
}

export default Header
