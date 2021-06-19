import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './NavHistory.scss'
import { IoIosArrowForward } from 'react-icons/io'

const mainPath = ['categories', 'subcategories']

const NavHistory = () => {
  const { historyNav } = useSelector(state => state.global)

  return (
    <div className="nav-history">
      <div className="nav-history__container">
        {historyNav.map((route, index) => 
          <div key={route._id} className="nav-history__item">
            <Link to={`/${mainPath[index]}/${route._id}`}>
              {route.title}
            </Link>
            {historyNav.length - 1 !== index && <IoIosArrowForward/>}
          </div>
        )}
      </div>
    </div>
  )
}

export default NavHistory
