import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import './PanelCartProduct.scss'

import ButtonRemove from '../../ButtonRemove'

import { toMoney } from '../../../utils/toMoney'

import { updateItemFromCart } from '../../../redux/userDucks'

const PanelCartProduct = ({ product }) => {
  const dispatch = useDispatch()
  const { cartUpdateLoading } = useSelector(state => state.user)

  const updateProductFromCart = (value) => {
    if(!cartUpdateLoading) {
      dispatch(updateItemFromCart(product._id, value))
    }
  }
  

  return (
    <div className="panel-cart-product">
      
      <div className="panel-cart-product__count">
        <button
          onClick={() => updateProductFromCart(product.quantity + 1)}
        >
          +
        </button>
        <span>
          {product.quantity}
        </span>
        <button
          onClick={() => updateProductFromCart(product.quantity - 1)}
        >
          -
        </button>
      </div>

      <Link 
        to={`/products/${product._id}`}
        className="panel-cart-product__description"
      >
        <div className="panel-cart-product__image">
          <img src={product.images[0].URL} alt={product.title}/>
        </div>

        <div className="panel-cart-product__info">
          <span className="panel-cart-product__title">
            {product.title}
          </span>
          <span>
            {toMoney(product.price)}
          </span>
          <span>
          {product.discount ? `Descuento ${product.discount}%` : ''}
          </span>
        </div>
      </Link>

      <div className="panel-cart-product__remove">
        <ButtonRemove
          onClick={() => updateProductFromCart(0)}
        />
      </div>
      
    </div>
  )
}

export default PanelCartProduct
