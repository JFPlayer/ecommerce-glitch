import React, { useState } from 'react'

import './Product.scss'
import { AiFillStar } from 'react-icons/ai'
import { FaHeart } from 'react-icons/fa'

import ProductPreview from '../../components/ProductPreview'
import Button from '../../components/Button'

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
      <div>
        <div className="layout__container">
          <div className="category__nav">
            Videojuegos
          </div>
        </div>
      </div>

      <div className="layout__container">
        <div className="product__preview">
          <div className="product-grid__images">
            <ProductPreview/>
          </div>
          <div className="product-grid__info">
            <div className="product-grid__info-brand">
              ASUS
            </div>
            <div className="product-grid__info-title">
              ASUS 255 G7 ATHLON 3150U 8GB 1TB 15.6"
            </div>
            <div className="product-grid__info-sku">
              SKU: 2004271186157P
            </div>
            <div className="product-grid__info-rating">
              <div className="rating-stars">
                {[0,1,2,3,4].map(() => (
                  <AiFillStar/>
                ))}
              </div>
              (2 Calificaciones)
            </div>
            <div className="product-grid__info-stock ">
              EN STOCK
            </div>
            
          </div>

          <div className="product-grid__price ">
            <div className="product-grid__price-off">
              <div className="product-grid__price-off-item">
                $ 90.500
              </div>
              <div className="product-grid__price-off-item percent">
                15% OFF
              </div>
            </div>
            <div className="product-grid__price-total">
              $ 80.490
            </div>
          </div>

          <div className="product-grid__button">
            <div className="product-grid__button-container">
              <Button
                className="product-grid__button-favorite"
                primary
                >
                <FaHeart/>
              </Button>
              <Button
                className="product-grid__button-cart"
                primary
              >
                Agregar al carrito
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="layout__container">
        <div className="product__details">
          <div className="product__tabs">
            <div 
              className={`product__details-tab ${tabSpecsActive ? '' : 'active'}`}
              onClick={() => setTabSpecsActive(false)}
            >
              DESCRIPCIÓN
            </div>
            <div 
              className={`product__details-tab ${tabSpecsActive ? 'active' : ''}`}
              onClick={() => setTabSpecsActive(true)}
            >
              ESPECIFICACIONES
            </div>
          </div>
          <div className={`product-tabs-line ${tabSpecsActive ? 'right' : ''}`}>
          </div>

          <div className="product__tab-content">
            {!tabSpecsActive ? 
            (
              <div className="product__description">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            )
            :
            (
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
            )
            }
          </div>
          
        </div>
      </div>

    </>
  )
}

export default Product
