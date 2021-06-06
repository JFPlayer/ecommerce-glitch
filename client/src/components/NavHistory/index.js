import React from 'react'
import { Link } from 'react-router-dom'

import './NavHistory.scss'
import { IoIosArrowForward } from 'react-icons/io'


const NavHistory = () => {
  return (
    <div className="nav-history">
      <div className="nav-history__container">
        <Link to='/'>
          Videojuegos
        </Link>
        <IoIosArrowForward/>
        <Link to='/'>
          Videojuegos
        </Link>
        <IoIosArrowForward/>
      </div>
    </div>
  )
}

export default NavHistory
