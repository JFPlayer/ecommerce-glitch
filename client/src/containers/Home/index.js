import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import './Home.scss'
import { FaCreditCard, FaTruck } from 'react-icons/fa'
import { BsArrowRepeat, BsClockHistory } from 'react-icons/bs'

import HotSale from '../../assets/hotSale.svg'

import categories1 from '../../assets/categories_1.png'
import categories2 from '../../assets/categories_2.png'
import categories3 from '../../assets/categories_3.png'
import categories4 from '../../assets/categories_4.png'

import Slider from '../../components/Slider'
import ProductListHome from '../../components/ProductListHome'
import CountDown from '../../components/CountDown'

import { getBanners } from '../../redux/globalDucks'
import { getProductsHotSale, getProductsBestSeller, getProductsSuggested } from '../../redux/productsDucks'

const Home = () => {
  const dispatch = useDispatch()
  const { banners } = useSelector(state => state.global)
  const { productsHotSale, productsBestSeller, productsSuggested } = useSelector(state => state.products)

  useEffect(() => {
    if(!banners.length) dispatch(getBanners())
    
    if(!productsHotSale.length) dispatch(getProductsHotSale())
    if(!productsBestSeller.length) dispatch(getProductsBestSeller())
    if(!productsSuggested.length) dispatch(getProductsSuggested())

  }, [])

  return (
    <>
      <Slider />

      <div className="home__info">
        <div className="home__info-container">

          <div className="home__info-item-container">

            <div className="home__info-item">
              <div className="home__info-icon">
                <FaCreditCard/>
              </div>
              <div className="home__info-description">
                <p>HASTA 6 CUOTAS SIN INTERES</p>
                <span>En todos los productos</span>
              </div>
            </div>
            
          </div>
          <div className="home__info-item-container">
            <div className="home__info-item">
              <div className="home__info-icon">
                <BsArrowRepeat/>
              </div>
              <div className="home__info-description">
                <p>DEVOLUCIONES GRATUITAS</p>
                <span>Hasta 30 dias después de recibir la compra</span>
              </div>
            </div>
          </div>
          <div className="home__info-item-container">
            <div className="home__info-item">
              <div className="home__info-icon">
                <FaTruck/>
              </div>
              <div className="home__info-description">
                <p>ENVIO GRATIS A TODO EL PAÍS</p>
                <span>En compras superiores a los $6.000</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>


      <div className="home__categories">
        <div className="home__categories-container">

          <Link to="/" className="home__categories-item">
            <div className="home__categories-item-image">
              <img src={categories1} alt=""/>
            </div>
            <div className="home__categories-item-title">
              Notebooks
            </div>
          </Link>
          <Link to="/" className="home__categories-item">
            <div className="home__categories-item-image">
              <img src={categories2} alt=""/>
            </div>
            <div className="home__categories-item-title">
              Accesorios
            </div>
          </Link>
          <Link to="/" className="home__categories-item">
            <div className="home__categories-item-image">
              <img src={categories3} alt=""/>
            </div>
            <div className="home__categories-item-title">
              Monitores
            </div>
          </Link>
          <Link to="/" className="home__categories-item">
            <div className="home__categories-item-image">
              <img src={categories4} alt=""/>
            </div>
            <div className="home__categories-item-title">
              Consolas
            </div>
          </Link>

        </div>
      </div>

      <div className="home__hot-sale">
        <div className="home__hot-sale-container">
          <div className="home__hot-sale-title">
            <HotSale/>
          </div>
          <div className="home__hot-sale-count-down">
            <BsClockHistory/>
            <CountDown 
              // date={new Date('Jul 10, 2021 00:00:00').getTime()}
            />
          </div>
        </div>
      </div>

      <ProductListHome
        products={productsHotSale}
      />
      <ProductListHome 
        products={productsBestSeller}
        title="lo mas vendido"
      />
      <ProductListHome 
        products={productsSuggested}
        title="recomendado"
      />

    </>
  )
}

export default Home
