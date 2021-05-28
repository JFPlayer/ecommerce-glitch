import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './containers/Layout'
import Home from './containers/Home'
import Category from './containers/Category'
import Product from './containers/Product'
import Purchase from './containers/Purchase'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories/:id" component={Category} />
          <Route exact path="/products/:id" component={Product} />
          <Route exact path="/purchase-process" component={Purchase} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App