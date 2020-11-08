export interface MenuItemProps {
  icon?: any
  label: string
  link?: string
  active?: boolean
  subs?: MenuItemProps[]
}
export interface SideBarProps {
  items: MenuItemProps[]
  brand: {
    link?: string
    brandTitle: string
  }
}
