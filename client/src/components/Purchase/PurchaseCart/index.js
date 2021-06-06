import React from 'react'
import { Link } from 'react-router-dom'

import './PurchaseCart.scss'

import ProductPurchase from '../ProductPurchase'
import PurchaseActions from '../PurchaseActions'

const PurchaseCart = () => {
  return (
    <div className="purchase-cart">
      <div className="purchase-cart__list">
        <ProductPurchase/>
        <ProductPurchase/>
        <ProductPurchase/>
        <ProductPurchase/>

        <div className="purchase-cart__summary">
          <div className="purchase-cart__summary-container">
            <div className="purchase-cart__row">
              <div className="purchase-cart__row-item">
                Subtotal
              </div>
              <div className="purchase-cart__row-item">
                $ 90.000
              </div>
            </div>
            <div className="purchase-cart__row">
              <div className="purchase-cart__row-item">
                Envio
              </div>
              <div className="purchase-cart__row-item">
                $ 0
              </div>
            </div>
            <div className="purchase-cart__row total">
              <div className="purchase-cart__row-item">
                <span className="purchase-cart__total">
                  Total
                </span>
              </div>
              <div className="purchase-cart__row-item">
                <span className="purchase-cart__total">
                  $ 90.000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="purchase-cart__actions">
        <PurchaseActions/>
      </div>
    </div>
  )
}

export default PurchaseCart
