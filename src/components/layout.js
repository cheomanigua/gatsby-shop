import React from 'react'
import SEO from './seo'
import Header from './header'

const Layout = ({children}) => (
  <div>
    <SEO />
    <Header />
    {children}
  </div>
)

export default Layout;