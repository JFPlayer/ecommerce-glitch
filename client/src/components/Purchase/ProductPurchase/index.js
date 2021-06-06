import React from 'react'

import './ProductPurchase.scss'

import ButtonRemove from '../../ButtonRemove'

import notebook from '../../../assets/notebook.png'

const ProductPurchase = () => {
  return (
    <div className="product-purchase">
      <div className="product-purchase__image">
        <img src={notebook} alt=""/>
      </div>
      <div className="product-purchase__description">
        <div className="product-purchase__title">
          ASUS 255 G7 ATHLON 3150U 8GB 1TB 15.6"
        </div>
        <div className="product-purchase__cod">
            SKU: 2004271186157P
        </div>
      </div>

      <div className="product-purchase__section">
        <div className="product-purchase__row">
          <div className="product-purchase__row-item">
            Cantidad
          </div>
          <div className="product-purchase__row-item">
            <button className="product-purchase__quantity">-</button>
            <span className="product-purchase__quantity">5</span>
            <button className="product-purchase__quantity">+</button>
          </div>
        </div>
        
        <div className="product-purchase__row">
          <div className="product-purchase__row-item">
            Precio unidad:
          </div>
          <div className="product-purchase__row-item">
            $ 90.000
          </div>
        </div>

        <div className="product-purchase__row">
          <div className="product-purchase__row-item">
            <span className="product-purchase__price-total">
              Precio Total:
            </span>
          </div>
          <div className="product-purchase__row-item">
            <span className="product-purchase__price-total">
              $ 90.000
            </span>
          </div>
        </div>

      </div>
      <ButtonRemove/>
    </div>
  )
}

export default ProductPurchase
