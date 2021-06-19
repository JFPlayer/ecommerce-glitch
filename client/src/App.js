import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import SwiperCore, {Pagination, Navigation, Autoplay, EffectFade, Zoom } from 'swiper';

SwiperCore.use([Pagination, Navigation, Autoplay, EffectFade, Zoom])

import Layout from './containers/Layout'
import Home from './containers/Home'
import Catalog from './containers/Catalog'
import Product from './containers/Product'
import Purchase from './containers/Purchase'
import User from './containers/User'
import Register from './containers/Register'

import { getCategories } from './redux/categoriesDucks'
import { whoAmI, getToken, calculateBill } from './redux/userDucks'
import axios from 'axios'

const App = () => {
  const dispatch = useDispatch()
  const { loggedIn, intervalId, accessToken, interceptorAxios, cart } = useSelector(state => state.user)
  
  useEffect(() => {
    dispatch(getCategories())
    dispatch(whoAmI())
  }, [])

  useEffect(() => {
    const refreshToken = () => {
      dispatch(getToken())
    }

    if(loggedIn) {
      const interval = setInterval(refreshToken, 1000 * 60 * 10) // 10m
      dispatch({
        type: 'SET_INTERVAL',
        payload: interval
      })
    }else {
      clearTimeout(intervalId)
    }
  }, [loggedIn])
  
  useEffect(() => {
    axios.interceptors.request.eject(interceptorAxios)
    if(accessToken) {
      const interceptor = axios.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${accessToken}`
        console.log(config)
        return config
      })
      dispatch({
        type: 'SET_INTERCEPTOR',
        payload: interceptor
      })
    }else {
      const interceptor = axios.interceptors.request.use(config => {
        config.headers.Authorization = ""
        console.log(config)
        return config
      })
      dispatch({
        type: 'SET_INTERCEPTOR',
        payload: interceptor
      })
    }
    
  }, [accessToken])

  useEffect(() => {
    dispatch(calculateBill())
  }, [cart])

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" render={() => loggedIn ? <Redirect to="/"/> : <Register/>} />
          <Route exact path="/categories/:id" render={() => <Catalog type="category"/>} />
          <Route exact path="/subcategories/:id" render={() => <Catalog type="subcategory"/>} />
          <Route exact path="/products/:productId" component={Product} />
          <Route exact path="/purchase-process" render={() => loggedIn ? <Purchase/> : <Redirect to="/"/>} />
          <Route path="/user" render={() => loggedIn ? <User/> : <Redirect to="/"/>}/>
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App