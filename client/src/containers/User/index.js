import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import './User.scss'

import UserPerfil from '../../components/User/UserPerfil'
import UserHistory from '../../components/User/UserHistory'
import UserAds from '../../components/User/UserAds'
import UserProducts from '../../components/User/UserProducts'
import UserCategories from '../../components/User/UserCategories'


const User = () => {
  return (
    <div className="user">
      <Switch>
        <Route exact path="/user" component={UserPerfil}/>
        <Route exact path="/user/history" component={UserHistory}/>
        <Route exact path="/user/ads" component={UserAds}/>
        <Route exact path="/user/products" component={UserProducts}/>
        <Route exact path="/user/categories" component={UserCategories}/>
        <Route component={() => <Redirect to="/"/>}/>
      </Switch>
    </div>
  )
}

export default User
