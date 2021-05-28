import React from 'react'
import { useRouteMatch } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Layout = ({ children }) => {
  const onPurchase = useRouteMatch('/purchase-process')

  return (
    <>
      {onPurchase ? 
      <>
        <main>
          { children }
        </main>
      </>
      :
      <>
        <Header/>
          <main>
            { children }
          </main>
        <Footer/>
      </>
      }
    </>
  )
}

export default Layout
