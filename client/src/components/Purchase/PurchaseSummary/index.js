import React, { useState } from 'react'

import './PurchaseSummary.scss'
import { IoIosArrowDown } from 'react-icons/io'

import ProductPurchaseSummary from '../ProductPurchaseSummary'

const PurchaseSummary = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <aside className={`purchase-summary ${isActive && 'active'}`}>
      <div 
        className="purchase-summary__drop-down-btn"
        onClick={() => setIsActive(!isActive)}
      >
        Resumen de la compra
        <IoIosArrowDown/>
      </div>
      <div className="purchase-summary__drop-down-menu">
        <ProductPurchaseSummary/>
        <ProductPurchaseSummary/>
        <ProductPurchaseSummary/>
        <ProductPurchaseSummary/>
        <div className="purchase-summary__row">
          <div className="purchase-summary__row-item">
            Subtotal
          </div>
          <div className="purchase-summary__row-item">
            $ 90.000
          </div>
        </div>
        <div className="purchase-summary__row">
          <div className="purchase-summary__row-item">
            Envio
          </div>
          <div className="purchase-summary__row-item">
            $ 0
          </div>
        </div>
        <div className="purchase-summary__row">
          <div className="purchase-summary__row-item">
            Total
          </div>
          <div className="purchase-summary__row-item">
            $ 100.000
          </div>
        </div>
      </div>
    </aside>
  )
}

export default PurchaseSummary
