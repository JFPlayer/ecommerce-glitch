import React from 'react'

import './ProductListHome.scss'

import Carousel from '../Carousel'

const ProductListHome = ({ title }) => {
  return (
    <div className="home-list__container">
      {title && (
        <div className="home-list__title">
          {title}
        </div>
      )}
      <Carousel/>
    </div>
  )
}

export default ProductListHome
