import React, { useState } from 'react'

import './PurchaseSummary.scss'
import { IoIosArrowDown } from 'react-icons/io'

import PurchaseActions from '../PurchaseActions'
import ProductPurchaseSummary from '../ProductPurchaseSummary'

const PurchaseSummary = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <aside className="purchase-summary">
      <div className={`purchase-summary__container ${isActive && 'active'}`}>
        <div 
          className="purchase-summary__drop-down-button"
          onClick={() => setIsActive(!isActive)}
        >
          Resumen de la compra
          <IoIosArrowDown/>
        </div>
        <div className="purchase-summary__drop-down-list">
          <ProductPurchaseSummary/>
          <ProductPurchaseSummary/>
          <ProductPurchaseSummary/>
          <ProductPurchaseSummary/>
          <div className="purchase-summary__price">
            <div className="ps-item left">
              Subtotal
            </div>
            <div className="ps-item right">
              $ 90.000
            </div>
          </div>
          <div className="purchase-summary__price total">
            <div className="ps-item left">
              Total
            </div>
            <div className="ps-item right">
              $ 100.000
            </div>
          </div>
        </div>
      </div>
      <PurchaseActions/>
    </aside>
  )
}

export default PurchaseSummary
