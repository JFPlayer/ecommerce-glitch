import React from 'react'

import './ProductCatalog.scss'
import { FaHeart } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'

import notebook from '../../assets/notebook.png'

const ProductCatalog = () => {
  return (
    <div className="product-catalog">
      <div className="product-catalog__content">

        <div className="product-catalog__image">
          <img src={notebook} alt=""/>
          <div className="product-catalog__image-price-off">
            15% OFF
          </div>
          <div className="product-catalog__favorite">
            <FaHeart/>
          </div>
        </div>

        <div className="product-catalog__description">
          <div className="product-catalog__brand">
            Asus
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
          <div className="product-catalog__price-section">
            <div className="product-catalog__price-off">
              $ 90.500
            </div>
            <div className="product-catalog__price">
              $ 80.499
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductCatalog
