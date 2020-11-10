import { AppProps } from 'next/app'
// import { NextSeo } from 'next-seo'
import AppStyles, { GlobalStyle } from '../src/styles/global.styles'
import '../src/styles/tailwind.css'
import { SiteContextProvider } from '../src/services/context/SiteContext'

export const App = (props: AppProps) => {
  const { pageProps, Component } = props
  return (
    <>
      <AppStyles>
        <SiteContextProvider>
          {/* <NextSeo {...SEO} /> */}
          <Component {...pageProps} />
        </SiteContextProvider>
        <GlobalStyle />
      </AppStyles>
    </>
  )
}
App.getInitialProps = async (props: { Component: any; ctx: any }) => {
  const { Component, ctx } = props
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  return {
    pageProps
  }
}
export default App
