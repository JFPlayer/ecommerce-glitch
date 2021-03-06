import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './ProductCatalog.scss'
import { AiFillStar } from 'react-icons/ai'


import { toMoney } from '../../utils/toMoney'
import { setSelectedProduct, setEditState } from '../../redux/productsDucks'

const ProductCatalog = ({ product }) => {
  const history = useHistory()
  const location = useLocation()

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setSelectedProduct(product))
    history.push(`/products/${product._id}`)
  }

  const editProduct = (event) => {
    event.stopPropagation()
    dispatch(setSelectedProduct(product))
    dispatch(setEditState(true))
  }

  return (
    <div className="product-catalog" onClick={handleClick}>
      <div className="product-catalog__content">

        <div className="product-catalog__image">
          <img src={product.images[0].URL} alt={product.title}/>
          {product.discount && 
            <div className="product-catalog__image-price-off">
              {`${product.discount}% OFF`}
            </div>
          }
          {location.pathname === '/user/products' && 
            <div 
              onClick={editProduct}
              className="product-catalog__edit"
            >
              Editar
            </div>
          }
        </div>

        <div className="product-catalog__description">
          <div className="product-catalog__brand">
            {product.brand}
          </div>
          <div className="product-catalog__title">
            <span>
              {product.title}
            </span>
          </div>
          <div className="product-catalog__rating">
            <div className="rating-stars">
              {[0,1,2,3,4].map((_, index) => (
                <AiFillStar key={index}/>
              ))}
            </div>
            <span>
              (Sin Calificaciones)
            </span>
          </div>
          <div className="product-catalog__price-section">
            <div className="product-catalog__price-off">
            {product.discount ? toMoney(((100 - product.discount) / 100) * product.price) : ''}
            </div>
            <div className="product-catalog__price">
              {toMoney(product.price)}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductCatalog
