import React, { useState } from 'react'
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
      name: 'Productos',
      link: '/user/products',
    },
    {
      name: 'Perfil',
      link: '/user',
    },
  ],
}

const UserNav = ({ typeUser='user'}) => {
  const [currentPage, setCurrentPage] = useState(0)

  return (
    <nav className="user-nav">
      {/* <div className="user-nav__greeting">
        Hola Admin!
      </div> */}
      <div className="user-nav__list">
        {list[typeUser].map(route => (
          <Link 
            className={`user-nav__list-item ${''}`}
            to={route.link}
            key={route.name} 
          >
            {route.name}
          </Link>
        ))}
        <button className="user-nav__list-item">Cerrar sesión</button>
      </div>
    </nav>
  )
}

export default UserNav
