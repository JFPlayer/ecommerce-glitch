import React from 'react'

import './PurchaseCart.scss'

import ProductPurchase from '../ProductPurchase'

const PurchaseCart = () => {
  return (
    <div className="purchase-cart">
      <div className="purchase-cart__list">
        <ProductPurchase/>
        <ProductPurchase/>
        <ProductPurchase/>
        <ProductPurchase/>
      </div>
      <div className="purchase-cart__actions"></div>
    </div>
  )
}

export default PurchaseCart
