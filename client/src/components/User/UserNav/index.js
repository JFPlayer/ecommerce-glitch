import React from 'react'
import { Link } from 'react-router-dom'

import './UserNav.scss'

const list = {
  user: [
    {
      name: 'Compras realizadas',
      link: '/user/history',
    },
    {
      name: 'Perfil',
      link: '/user',
    },
    {
      name: 'Cerrar sesión',
      link: '/user/logout',
    },
  ],
  admin: [
    {
      name: 'Anuncios',
      link: '/user/ads',
    },
    {
      name: 'Categorias',
      link: '/user/categories',
    },
    {
      name: 'Subcategorias',
      link: '/user/subcategories',
    },
    {
      name: 'productos',
      link: '/user/products',
    },
    {
      name: 'Perfil',
      link: '/user',
    },
    {
      name: 'Cerrar sesión',
      link: '/user/logout',
    },
  ],
}

const UserNav = ({ typeUser='user'}) => {
  return (
    <nav className="user-nav">
      <div className="user-nav__greeting">
        Hola Admin!
      </div>

      {list[typeUser].map(route => (
        <Link 
          className={`user-nav__page-item ${''}`}
          to={route.link}
          key={route.name} 
        >
          {route.name}
        </Link>
      ))}
    </nav>
  )
}

export default UserNav
