import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './User.scss'

import UserPerfil from '../../components/User/UserPerfil'
import UserHistory from '../../components/User/UserHistory'
import UserAds from '../../components/User/UserAds'
import UserProducts from '../../components/User/UserProducts'
import UserCategories from '../../components/User/UserCategories'


const User = () => {
  const { userRole } = useSelector(state => state.user)

  return (
    <div className="user">
      <Switch>
        <Route exact path="/user" component={UserPerfil}/>
        <Route exact path="/user/history" component={UserHistory}/>
        <Route exact path="/user/ads" render={() => userRole === 'admin' ? <UserAds/> : <Redirect to="/"/>}/>
        <Route exact path="/user/products" render={() => <UserProducts/>}/>
        {/* <Route exact path="/user/products" render={() => userRole === 'admin' ? <UserProducts/> : <Redirect to="/"/>}/> */}
        <Route exact path="/user/categories" render={() => userRole === 'admin' ? <UserCategories/> : <Redirect to="/"/>}/>
        <Route component={() => <Redirect to="/"/>}/>
      </Switch>
    </div>
  )
}

export default User
