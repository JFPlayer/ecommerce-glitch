import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './containers/Layout'
import Home from './containers/Home'
import Category from './containers/Category'
import Product from './containers/Product'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Product} />
          <Route exact path="/categories/:category" component={Category} />
          {/* <Route exact path="/subcategories/:subcategory" component={Subcategory} /> */}
          <Route exact path="/products/:product" component={Product} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App