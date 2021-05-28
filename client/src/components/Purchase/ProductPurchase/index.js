import React from 'react'

import './ProductPurchase.scss'
import { FaTrashAlt } from 'react-icons/fa'

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
        <div className="product-purchase__quantity">
          <div className="item-left">
            Cantidad
          </div>
          <div className="product-purchase__quantity-control">
            <div className="product-purchase__quantity-item">
              -
            </div>
            <div className="product-purchase__quantity-item value">
              5
            </div>
            <div className="product-purchase__quantity-item">
              +
            </div>
          </div>
        </div>

        <div className="product-purchase__price">
          <div className="item-left">
            <div className="product-purchase__price-unid">
              Precio unidad:
            </div>
            <div className="product-purchase__price-total">
              Precio Total:
            </div>
          </div>
          <div className="item-right">
            <div className="product-purchase__price-unid">
              $ 90.000
            </div>
            <div className="product-purchase__price-total">
              $ 90.000
            </div>
          </div>

        </div>
      </div>
      <div className="product-purchase__remove">
        <button>
          <FaTrashAlt/>
        </button>
      </div>
    </div>
  )
}

export default ProductPurchase
