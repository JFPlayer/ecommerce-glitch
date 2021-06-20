import React from 'react'

import './ProductUserHistory.scss'

import notebook from '../../../assets/categories_1.png'

const ProductUserHistory = () => {
  return (
    <div className="product-uh__container">
      <div className="product-uh__image">
        <img src={notebook} alt=""/>
      </div>
      <div className="product-uh__description">
        <div className="product-uh__title">
          TITULO
        </div>
        <div className="product-uh__sku-quantity">
          SKU: 000000
          <br/>
          Cantidad: 0
        </div>
      </div>
    </div>
  )
}

export default ProductUserHistory
