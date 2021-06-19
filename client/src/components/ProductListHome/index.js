import React from 'react'

import './ProductListHome.scss'

import Carousel from '../Carousel'
import ProductCarousel from '../ProductCarousel'

const ProductListHome = ({ title, products }) => {
  return (
    <div className="home-list">
      {title && (
        <div className="home-list__title">
          {title}
        </div>
      )}
      <Carousel products={products}/>
    </div>
  )
}

export default ProductListHome
