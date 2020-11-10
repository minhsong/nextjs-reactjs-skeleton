import * as S from './SideBar.styles'
import { SideBarProps } from './types'
import SidebarContent from './SidebarContent'

const SideBar = (props: SideBarProps) => {
  return (
    <S.DesktopWrapper>
      <SidebarContent {...props} />
    </S.DesktopWrapper>
  )
}

export default SideBar
