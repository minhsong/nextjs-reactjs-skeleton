import { DropdownButton, DropdownItem, DropdownItemGroup } from '../base'
import * as Icons from '../base/Icons'
import * as S from './Header.styles'

export interface HeaderProps {}
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
            <DropdownButton
              label={
                <>
                  <Icons.Notification />
                  <S.NotificationActive />
                </>
              }
            >
              <DropdownItemGroup>
                <DropdownItem>
                  <S.DropdownLink href='#' justify='between'>
                    <span>Messages</span>
                    <S.AlertCount>13</S.AlertCount>
                  </S.DropdownLink>
                </DropdownItem>
                <DropdownItem>
                  <S.DropdownLink href='#' justify='between'>
                    <span>Sales</span>
                    <S.AlertCount>13</S.AlertCount>
                  </S.DropdownLink>
                </DropdownItem>
                <DropdownItem>
                  <S.DropdownLink href='#' justify='between'>
                    <span>Alerts</span>
                  </S.DropdownLink>
                </DropdownItem>
              </DropdownItemGroup>
            </DropdownButton>
          </li>
          {/* Profile menu */}
          <li className='relative'>
            <DropdownButton
              label={
                <img
                  className='object-cover w-8 h-8 rounded-full'
                  src='https://avatars1.githubusercontent.com/u/4974962?s=460&u=8317a61a92be2f502e91c0f5989fe26f61d4125b&v=4'
                  alt=''
                  aria-hidden='true'
                />
              }
            >
              <DropdownItemGroup>
                <DropdownItem>
                  <S.DropdownLink href='#'>
                    <Icons.Profile />
                    <span>Profile</span>
                  </S.DropdownLink>
                </DropdownItem>
                <DropdownItem>
                  <S.DropdownLink href='#'>
                    <Icons.Settings />
                    <span>Settings</span>
                  </S.DropdownLink>
                </DropdownItem>
                <DropdownItem>
                  <S.DropdownLink href='#'>
                    <Icons.Logout />
                    <span>Log out</span>
                  </S.DropdownLink>
                </DropdownItem>
              </DropdownItemGroup>
            </DropdownButton>
          </li>
        </S.MenuActionWrapper>
      </S.HeaderContent>
    </S.HeaderWrapper>
  )
}

export default Header
