import React from 'react'
import SEO from './seo'

const Layout = ({children}) => (
  <div>
    <SEO />
    {children}
  </div>
)

export default Layout;