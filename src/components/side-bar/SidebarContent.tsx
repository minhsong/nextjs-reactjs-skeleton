import { CSSTransition } from 'react-transition-group'
import { MenuLink } from '../../styles/global.styles'
import * as S from './SideBar.styles'
import { Button, Narrow } from '../base'
import { MenuItemProps, SideBarProps } from './types'

const SidebarContent = (props: SideBarProps) => {
  const { items, brand } = props

  return (
    <S.MenuContentWrapper>
      <S.BrandMenu href={brand.link}>{brand.brandTitle}</S.BrandMenu>
      <ul>
        {items &&
          items.map((item: MenuItemProps) => (
            <S.MenuItem>
              <MenuLink
                href={item.link}
                active={item.active}
                hasSub={!!item.subs}
              >
                <S.MenuContent>
                  {item.icon}
                  <S.MenuLabel>{item.label}</S.MenuLabel>
                </S.MenuContent>
                {!!item.subs && <Narrow />}
              </MenuLink>
              {item.subs && item.active && (
                <CSSTransition
                  timeout={300}
                  in={item.active}
                  classNames={{
                    appear: 'transition-all ease-in-out duration-300',
                    appearActive: 'transition-all ease-in-out duration-300',
                    appearDone: 'opacity-100 max-h-xl',
                    enter: 'transition-all ease-in-out duration-300',
                    enterActive: 'my-active-enter',
                    enterDone: 'opacity-100 max-h-xl',
                    exit: 'opacity-0 max-h-0',
                    exitActive: 'opacity-100 max-h-xl',
                    exitDone: 'opacity-0 max-h-0'
                  }}
                >
                  <S.SubMenuWrapper aria-label='submenu'>
                    {item.subs &&
                      item.subs.map((sub: MenuItemProps) => (
                        <S.SubMenuItem>
                          <a className='w-full' href={sub.link}>
                            {sub.label}
                          </a>
                        </S.SubMenuItem>
                      ))}
                  </S.SubMenuWrapper>
                </CSSTransition>
              )}
            </S.MenuItem>
          ))}
      </ul>
      <div className='px-6 my-6'>
        <Button color='primary'>
          Create account
          <span className='ml-2' aria-hidden='true'>
            +
          </span>
        </Button>
      </div>
    </S.MenuContentWrapper>
  )
}

export default SidebarContent
