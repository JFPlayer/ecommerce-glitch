import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './ProductPurchase.scss'

import ButtonRemove from '../../ButtonRemove'

import { toMoney } from '../../../utils/toMoney'
import { updateItemFromCart } from '../../../redux/userDucks'

const ProductPurchase = ({ id, image, title, sku, quantity, priceUnid, priceTotal }) => {
  const dispatch = useDispatch()
  const { cartUpdateLoading } = useSelector(state => state.user)

  const updateProductFromCart = (value) => {
    if(!cartUpdateLoading) {
      dispatch(updateItemFromCart(id, value))
    }
  }

  return (
    <div className="product-purchase">
      <div className="product-purchase__image">
        <img src={image} alt={title}/>
      </div>
      <div className="product-purchase__description">
        <div className="product-purchase__title">
          {title}
        </div>
        <div className="product-purchase__cod">
          {`SKU: ${sku}`}
        </div>
      </div>

      <div className="product-purchase__section">
        <div className="product-purchase__row">
          <div className="product-purchase__row-item">
            Cantidad
          </div>
          <div className="product-purchase__row-item">
            <button 
              onClick={() => updateProductFromCart(quantity - 1)}
              className="product-purchase__quantity"
            >
              -
            </button>
            <span className="product-purchase__quantity">
              {quantity}
            </span>
            <button 
              onClick={() => updateProductFromCart(quantity + 1)}
              className="product-purchase__quantity"
            >
              +
            </button>
          </div>
        </div>
        
        <div className="product-purchase__row">
          <div className="product-purchase__row-item">
            Precio unidad:
          </div>
          <div className="product-purchase__row-item">
            {toMoney(priceUnid)}
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
              {toMoney(priceTotal * quantity)}
            </span>
          </div>
        </div>

      </div>
      <ButtonRemove
        onClick={() => updateProductFromCart(0)}
      />
    </div>
  )
}

export default ProductPurchase
