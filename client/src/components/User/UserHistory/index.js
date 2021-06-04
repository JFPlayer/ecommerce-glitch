import React from 'react'

import './UserHistory.scss'

import ProductUserHistory from '../ProductUserHistory'

const UserHistory = () => {
  return (
    <main className="user__section">
      <div className="user__container">
        <div className="user__title">
          Compras realizadas
        </div>
        <div className="user__content">

          <div className="user-history__list-container">
            <div className="user__inner-title">
              30/05/2021
            </div>
            <div className="user-history__list-items">
              <ProductUserHistory/>
              <ProductUserHistory/>
              <ProductUserHistory/>
              <ProductUserHistory/>
              <ProductUserHistory/>
            </div>
          </div>
          
          <div className="user-history__list-container">
            <div className="user__inner-title">
              30/05/2021
            </div>
            <div className="user-history__list-items">
              <ProductUserHistory/>
              <ProductUserHistory/>
              <ProductUserHistory/>
              <ProductUserHistory/>
              <ProductUserHistory/>
            </div>
          </div>

        </div>
      </div>
    </main>
      
  )
}

export default UserHistory
