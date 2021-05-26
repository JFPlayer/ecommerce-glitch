import React from 'react'

import './ProductCarousel.scss'
import { FaHeart } from 'react-icons/fa'

import notebook from '../../assets/notebook.png'

const ProductCarousel = () => {
  return (
    <div className="product-carousel">
      <div className="product-carousel__image">
        <div className="product-carousel__image-container">
          <img src={notebook} alt="" className=""/>
          <div className="product-carousel__image-info price-off">
            15% OFF
          </div>
          <div className="product-carousel__image-info favorite">
            <FaHeart/>
          </div>
        </div>
      </div>
      <div className="product-carousel__title">
        <div className="product-carousel__title-content">
          Hp 255 G7 Athlon 3150U 8Gb 1Tb 15.6"
        </div>
      </div>
      <div className="product-carousel__price-section">
        <div className="product-carousel__price price-off">$ 90.500</div>
        <div className="product-carousel__price normal">$ 85.500</div>
      </div>
    </div>
  )
}

export default ProductCarousel
