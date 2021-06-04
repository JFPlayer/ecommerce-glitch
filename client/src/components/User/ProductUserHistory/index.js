import React from 'react'

import './ProductUserHistory.scss'

import notebook from '../../../assets/notebook.png'
import banner from '../../../assets/banner1.png'

const ProductUserHistory = () => {
  return (
    <div className="product-uh__container">
      <div className="product-uh__image">
        <img src={notebook} alt=""/>
      </div>
      <div className="product-uh__description">
        <div className="product-uh__title">
          ASUS 255 G7 ATHLON 3150U 8GB 1TB 15.6"
        </div>
        <div className="product-uh__sku-quantity">
          SKU: 2004271186157P
          <br/>
          Cantidad: 2
        </div>
      </div>
    </div>
  )
}

export default ProductUserHistory
