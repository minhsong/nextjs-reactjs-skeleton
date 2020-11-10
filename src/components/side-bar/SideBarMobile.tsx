import * as S from './SideBar.styles'
import { SideBarProps } from './types'
import SidebarContent from './SidebarContent'

const SideBarMobile = (props: SideBarProps) => {
  return (
    <>
      <S.MobileBackdrop />
      <S.MobileWrapper>
        <SidebarContent {...props} />
      </S.MobileWrapper>
    </>
  )
}

export default SideBarMobile
