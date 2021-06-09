import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Layout from './containers/Layout'
import Home from './containers/Home'
import Catalog from './containers/Catalog'
import Product from './containers/Product'
import Purchase from './containers/Purchase'
import User from './containers/User'

import { getCategories } from './redux/categoriesDucks'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories/:id" component={Catalog} />
          <Route exact path="/products/:id" component={Product} />
          <Route exact path="/purchase-process" component={Purchase} />
          <Route path="/user" component={User} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App