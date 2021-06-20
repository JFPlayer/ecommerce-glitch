import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './ProductCarousel.scss'

import { toMoney } from '../../utils/toMoney'

import { setSelectedProduct } from '../../redux/productsDucks'

const ProductCarousel = ({ product }) => {
  const history = useHistory()

  const dispatch = useDispatch()

  const goToProduct = () => {
    dispatch(setSelectedProduct(product))
    history.push(`/products/${product._id}`)
  }

  return (
    <div className="product-carousel">
      <div 
        className="product-carousel-content"
        onClick={goToProduct}
      >
        <div className="product-carousel__image">
          <img src={product.images[0].URL} alt="" className=""/>
          {/* <button className="product-carousel__image-favorite">
            <FaHeart/>
          </button> */}
        </div>

        {product.discount &&
          <div className="product-carousel__image-price-off">
            {`${product.discount}% OFF`}
          </div>
        }

        <div className="product-carousel__title">
          <div className="product-carousel__title-content">
            {product.title}
          </div>
        </div>
        <div className="product-carousel__price-section">
          <div className="product-carousel__price-off">
            {toMoney(((100 - product.discount) / 100) * product.price)}
          </div>
          <div className="product-carousel__price">
            {toMoney(product.price)}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductCarousel
