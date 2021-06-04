import React from 'react'

import './ProductCarousel.scss'
import { FaHeart } from 'react-icons/fa'

import notebook from '../../assets/notebook.png'

const ProductCarousel = () => {
  return (
    <div className="product-carousel">
      <div className="product-carousel-content">
        <div className="product-carousel__image">
          <img src={notebook} alt="" className=""/>
          <button className="product-carousel__image-favorite">
            <FaHeart/>
          </button>
        </div>

        <div className="product-carousel__image-price-off">
          15% OFF
        </div>

        <div className="product-carousel__title">
          <div className="product-carousel__title-content">
            Hp 255 G7 Athlon 3150U 8Gb 1Tb 15.6"
          </div>
        </div>
        <div className="product-carousel__price-section">
          <div className="product-carousel__price-off">$ 90.500</div>
          <div className="product-carousel__price">$ 85.500</div>
        </div>

      </div>
    </div>
  )
}

export default ProductCarousel
