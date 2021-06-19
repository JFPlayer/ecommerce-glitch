import React from 'react'

import './ProductPurchaseSummary.scss'

import { toMoney } from '../../../utils/toMoney'

const ProductPurchaseSummary = ({ title, image, quantity, price }) => {
  return (
    <div className="product-purchase-summary">
      <div className="product-purchase-summary__image">
        <img src={image} alt=""/>
      </div>
      <div className="product-purchase-summary__description">
        <div className="product-purchase-summary__title">
          {title}
        </div>
        <div className="product-purchase-summary__section">
          <p className="pps-item left">
            Cantidad
            <br/>
            Precio unidad
          </p>
          <p className="pps-item right">
            {quantity}
            <br/>
            {toMoney(price)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductPurchaseSummary
