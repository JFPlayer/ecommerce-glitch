import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import './User.scss'

import UserNav from '../../components/User/UserNav'
import UserPerfil from '../../components/User/UserPerfil'
import UserHistory from '../../components/User/UserHistory'
import UserLogout from '../../components/User/UserLogout'
import UserAds from '../../components/User/UserAds'
import UserProducts from '../../components/User/UserProducts'


const User = () => {
  return (
    <div className="layout__container">
      <div className="user">
        <UserNav typeUser="admin"/>
        <Switch>
          <Route exact path="/user" component={UserPerfil}/>
          <Route exact path="/user/history" component={UserHistory}/>
          <Route exact path="/user/logout" component={UserLogout}/>
          <Route exact path="/user/ads" component={UserAds}/>
          <Route exact path="/user/products" component={UserProducts}/>
          <Route component={() => <Redirect to="/"/>}/>
        </Switch>
      </div>
    </div>
  )
}

export default User
