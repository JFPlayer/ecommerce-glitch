import React from 'react'

import './UserHistory.scss'

import ProductUserHistory from '../ProductUserHistory'

const UserHistory = () => {
  return (
    <div className="user__history">
      <div className="user__section">
        <div className="user__title">
          Compras realizadas
        </div>
        <div className="user__section-content">

          <div className="user-history__list">

            {[...new Array(3)].map(() => 
              <div className="user-history__item">
                <div className="user-history__title">
                  30/05/2021
                </div>
                <div className="user-history__item-container">
                  <ProductUserHistory/>
                  <ProductUserHistory/>
                  <ProductUserHistory/>
                </div>
              </div>
            )}


          </div>

        </div>
      </div>
    </div>
      
  )
}

export default UserHistory
