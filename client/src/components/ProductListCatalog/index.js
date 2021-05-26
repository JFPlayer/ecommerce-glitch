import React from 'react'

import './ProductListCatalog.scss'
import { FaHeart } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'

import notebook from '../../assets/notebook.png'

const ProductListCatalog = () => {
  return (
    <div className="product-catalog">
      <div className="product-catalog__image">
        <img src={notebook} alt=""/>
        <div className="product-catalog__price-off">
          15% OFF
        </div>
        <div className="product-catalog__favorite">
          <FaHeart/>
        </div>
      </div>

      <div className="product-catalog__description">
        <div className="product-catalog__brand">
          <span>Asus</span>
          {/* Asus */}
        </div>
        <div className="product-catalog__title">
          <span>
            ASUS 255 G7 ATHLON 3150U 8GB 1TB 15.6"
          </span>
        </div>
        <div className="product-catalog__rating">
          <div className="rating-stars">
            {[0,1,2,3,4].map(() => (
              <AiFillStar/>
            ))}
          </div>
          <span>
            (2 Calificaciones)
          </span>
        </div>
        <div className="product-catalog__price">
          <div className="product-catalog__price--off">
            $ 90.500
          </div>
          <div className="product-catalog__price--total">
            $ 80.499
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListCatalog
