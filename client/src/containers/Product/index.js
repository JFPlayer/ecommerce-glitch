import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import './Product.scss'
import { AiFillStar } from 'react-icons/ai'
import { FaHeart } from 'react-icons/fa'

import ProductPreview from '../../components/ProductPreview'
import Button from '../../components/Button'
import NavHistory from '../../components/NavHistory'
import Spinner from '../../components/Spinner'

import { getProductById } from '../../redux/productsDucks'
import { addProductWishList, addProductCart } from '../../redux/userDucks'

import { toMoney } from '../../utils/toMoney'

const Product = () => {
  const [tabSpecsActive, setTabSpecsActive] = useState(false)

  const { productId } = useParams()

  const dispatch = useDispatch()
  const { selectedProduct: product } = useSelector(state => state.products)
  const { wishList, loggedIn } = useSelector(state => state.user)

  useEffect(() => {
    scrollTo(0,0)
    
    if(product._id !== productId) {
      dispatch(getProductById(productId))
    }
  }, [productId])

  const addCart = () => {
    if(loggedIn) dispatch(addProductCart(product._id))
  }
  
  const addWishList = () => {
    if(loggedIn) dispatch(addProductWishList(product._id))
  }

  return (
    <>
      <NavHistory/>

      <div className="product">
        <div className="product__container">
          <div className="product__main">

            <div className="product__short">
              <div className="product__brand">
                {product.brand}
              </div>
              <div className="product__title">
                {product.title}
              </div>
              <div className="product__sku">
                {`SKU: ${product.sku}`}
              </div>
              <div className="product__rating">
                <div className="rating-stars">
                  {[...new Array(5)].map((_, index) => (
                    <AiFillStar 
                      key={index} 
                      className={`${product.rating?.length > index ? 'star' : ''}`}
                    />
                  ))}
                </div>
                <span>
                  (0 Calificaciones)
                </span>
              </div>
              {product.stock ? 
                <div className="product__stock ">
                  EN STOCK
                </div>
              :
                <div className="product__stock out">
                  SIN STOCK
                </div>
              }
            </div>
            
            <div className="product-preview">
              <ProductPreview images={product.images}/>
            </div>
            
            <div className="product__price">
              <div className="product__price-off">
                {product.discount && 
                  <>
                    <span className="product__price-normal">
                      {toMoney(product.price)}
                    </span>
                    <span className="product__price-discount">
                      {`${product.discount}% OFF`}
                    </span>
                  </>
                }
              </div>
              <span className="product__price-total">
                {product.discount ? toMoney(product.price * ((100 - product.discount) / 100)) : toMoney(product.price)}
              </span>
            </div>

            <div className="product__action">
              <Button
                onClick={addWishList}
                className={`product__action-favorite ${wishList.some(({ _id }) => _id === product._id) ? 'active' : ''}`}
                primary
                >
                <FaHeart/>
              </Button>
              <Button
                onClick={addCart}
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
                    {product.description}
                  </p>
                </div>
              :
                <div className="product__specs">
                  {product.specs.map(({ title, content }) => 
                    <div 
                      key={title}
                      className="product__specs-row"
                    >
                      <div className="product__specs-row-section">
                        {title}
                      </div>
                      <div className="product__specs-row-section">
                        {content}
                      </div>
                    </div>
                  )}
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
