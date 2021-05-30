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
        <div className="purchase-cart__list-price">
          <div className="purchase-cart__list-price-container">
            <div className="purchase-cart__list-subtotal">
              <div className="list-name">
                Subtotal
                <br/>
                Subtotal
              </div>
              <div className="list-value">
                $ 90.000
                <br/>
                $ 90.000
              </div>
            </div>
            <div className="purchase-cart__list-total">
              <div className="list-name">
                Total
              </div>
              <div className="list-value">
                $ 90.000
              </div>
            </div>
          </div>
        </div>
      </div>
      <PurchaseActions className="purchase-cart__actions"/>
    </div>
  )
}

export default PurchaseCart
