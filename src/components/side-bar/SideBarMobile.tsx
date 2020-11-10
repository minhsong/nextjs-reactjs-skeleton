import * as S from './SideBar.styles'
import { SideBarProps } from './types'
import SidebarContent from './SidebarContent'

const SideBarMobile = (props: SideBarProps) => {
  return (
    <S.MobileWrapper
    // x-show="isSideMenuOpen"
    // x-transition:enter="transition ease-in-out duration-150"
    // x-transition:enter-start="opacity-0 transform -translate-x-20"
    // x-transition:enter-end="opacity-100"
    // x-transition:leave="transition ease-in-out duration-150"
    // x-transition:leave-start="opacity-100"
    // x-transition:leave-end="opacity-0 transform -translate-x-20"
    // @click.away="closeSideMenu"
    // @keydown.escape="closeSideMenu"
    >
      <SidebarContent {...props} />
    </S.MobileWrapper>
  )
}

export default SideBarMobile
