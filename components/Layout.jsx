import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from './Footer'

const Layout = ({children }) => {
  return (
    <div>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout
