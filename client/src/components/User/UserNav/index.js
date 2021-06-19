import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import './UserNav.scss'

import { signOut } from '../../../redux/userDucks'

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

const UserNav = ({  }) => {
  const { userRole } = useSelector(state => state.user)
  
  const [currentPage, setCurrentPage] = useState('')

  const dispatch = useDispatch()

  const handleSignOut = () => {
    dispatch(signOut())
  }

  return (
    <nav className="user-nav">
      {/* <div className="user-nav__greeting">
        Hola Admin!
      </div> */}
      <div className="user-nav__list">
        {list[userRole].map(route => (
          <Link 
            className={`user-nav__list-item ${currentPage === route.name ? 'active' : ''}`}
            to={route.link}
            key={route.name}
            onClick={() => setCurrentPage(route.name)}
          >
            {route.name}
          </Link>
        ))}
        <button 
          className="user-nav__list-item"
          onClick={handleSignOut}
        >
          Cerrar sesión
        </button>
      </div>
    </nav>
  )
}

export default UserNav
