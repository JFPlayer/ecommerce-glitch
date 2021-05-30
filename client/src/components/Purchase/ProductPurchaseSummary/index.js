import React from 'react'

import './ProductPurchaseSummary.scss'

import notebook from '../../../assets/notebook.png'

const ProductPurchaseSummary = () => {
  return (
    <div className="product-purchase-summary">
      <div className="product-purchase-summary__image">
        <img src={notebook} alt=""/>
      </div>
      <div className="product-purchase-summary__description">
        <div className="product-purchase-summary__title">
          ASUS 255 G7 ATHLON 3150U 8GB 1TB 15.6"
        </div>
        <div className="product-purchase-summary__section">
          <p className="pps-item left">
            Cantidad
            <br/>
            Precio unidad
          </p>
          <p className="pps-item right">
            2
            <br/>
            $ 90.000
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductPurchaseSummary
