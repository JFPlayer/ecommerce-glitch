import React, { useState } from 'react'

import './Product.scss'
import { AiFillStar } from 'react-icons/ai'
import { FaHeart } from 'react-icons/fa'

import ProductPreview from '../../components/ProductPreview'
import Button from '../../components/Button'
import NavHistory from '../../components/NavHistory'

const specs = {
  ['Marca']: "Asus",
  ['Modelo']: "M433UA-EB045T",
  ['Procesador']: "AMD Ryzen 5",
  ['Memoria RAM']: "8GB",
  ['Disco duro']: "512GB",
  ['Peso (kg)']: "1.4",
  ['Tarjeta grafica']: "AMD Radeon",
  ['Sistema operativo']: "Windows 10",
}

const Product = () => {
  const [tabSpecsActive, setTabSpecsActive] = useState(false)

  return (
    <>
      <NavHistory/>

      <div className="product">
        <div className="product__container">
          <div className="product__main">

            <div className="product__short">
              <div className="product__brand">
                ASUS
              </div>
              <div className="product__title">
                ASUS 255 G7 ATHLON 3150U 8GB 1TB 15.6"
              </div>
              <div className="product__sku">
                SKU: 2004271186157P
              </div>
              <div className="product__rating">
                <div className="rating-stars">
                  {[0,1,2,3,4].map(() => (
                    <AiFillStar/>
                  ))}
                </div>
                <span>
                  (2 Calificaciones)
                </span>
              </div>
              <div className="product__stock ">
                EN STOCK
              </div>
            </div>
            
            <div className="product-preview">
              <ProductPreview/>
            </div>
            
            <div className="product__price">
              <div className="product__price-off">
                <span className="product__price-normal">
                  $ 90.500
                </span>
                <span className="product__price-discount">
                  15% OFF
                </span>
              </div>
              <span className="product__price-total">
                $ 80.490
              </span>
            </div>

            <div className="product__action">
              <Button
                className="product__action-favorite"
                primary
                >
                <FaHeart/>
              </Button>
              <Button
                className="product__action-cart"
                primary
              >
                Agregar al carrito
              </Button>
            </div>

          </div>

          <div className="product__info">
            <div className="product__tabs">
              <button 
                className={`product__tabs-btn ${tabSpecsActive ? '' : 'active'}`}
                onClick={() => setTabSpecsActive(false)}
              >
                DESCRIPCIÓN
              </button>
              <button 
                className={`product__tabs-btn ${tabSpecsActive ? 'active' : ''}`}
                onClick={() => setTabSpecsActive(true)}
              >
                ESPECIFICACIONES
              </button>
              <div className={`product-tabs-line ${tabSpecsActive ? 'right' : ''}`}>
              </div>
            </div>

            <div className="product__tab-content">
              {!tabSpecsActive ? 
                <div className="product__description">
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  <br/>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                  <br/>
                  <br/>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                  </p>
                </div>
              :
                <div className="product__specs">
                  {Object.entries(specs).map(([name, value]) => (
                    <div className="product__specs-row">
                      <div className="product__specs-row-section">
                        {name}
                      </div>
                      <div className="product__specs-row-section">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              }
            </div>

          </div>

        </div>
      </div>

    </>
  )
}

export default Product
