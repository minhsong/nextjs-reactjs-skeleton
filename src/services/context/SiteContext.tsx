import React, { useState } from 'react'

export interface SiteProps {
  id: number
  hostname: string
  port: number
  site_name: string
  root_page: string
  root_url: string
  is_default_site: boolean
}

export const SiteContext = React.createContext<{
  siteInfor?: SiteProps
  setSiteInfor?: Function
}>({})

export const SiteContextProvider = (props: {
  Infor?: SiteProps
  children: any
}) => {
  const { children, Infor } = props
  const [siteInfor, setSiteInfor] = useState<SiteProps | undefined>(Infor)
  return (
    <SiteContext.Provider
      value={{ siteInfor: siteInfor, setSiteInfor: setSiteInfor }}
    >
      {children}
    </SiteContext.Provider>
  )
}
