import React from 'react'
import { FaCreditCard, FaTruck } from 'react-icons/fa'
import { BsArrowRepeat, BsClockHistory } from 'react-icons/bs'

import './Home.scss'
import categories1 from '../../assets/categories_1.png'
import categories2 from '../../assets/categories_2.png'
import categories3 from '../../assets/categories_3.png'
import categories4 from '../../assets/categories_4.png'

import Slider from '../../components/Slider'
import ProductListHome from '../../components/ProductListHome'

const Home = () => {
  return (
    <>
      <Slider />
      <div className="home__section banner">
        <div className="home__container space-around">
          <div className="banner-info__item">
            <div className="banner-info__item-icon">
              <FaCreditCard/>
            </div>
            <div className="banner-info__item-description">
              <h2>HASTA 6 CUOTAS SIN INTERES</h2>
              <span>En todos los productos</span>
            </div>
          </div>
          <div className="banner-info__item">
            <div className="banner-info__item-icon">
              <BsArrowRepeat/>
            </div>
            <div className="banner-info__item-description">
              <h2>DEVOLUCIONES GRATUITAS</h2>
              <span>Hasta 30 dias después de recibir la compra</span>
            </div>
          </div>
          <div className="banner-info__item">
            <div className="banner-info__item-icon">
              <FaTruck/>
            </div>
            <div className="banner-info__item-description">
              <h2>ENVIO GRATIS A TODO EL PAÍS</h2>
              <span>En compras superiores a los $6.000</span>
            </div>
          </div>
        </div>
      </div>

      <div className="home__section">
        <div className="home__container center">
          <div className="categories__item">
            <div className="categories__item-image">
              <img src={categories1} alt=""/>
            </div>
            <div className="categories__item-title">
              Notebooks
            </div>
          </div>
          <div className="categories__item">
            <div className="categories__item-image">
              <img src={categories2} alt=""/>
            </div>
            <div className="categories__item-title">
              Accesorios
            </div>
          </div>
          <div className="categories__item">
            <div className="categories__item-image">
              <img src={categories3} alt=""/>
            </div>
            <div className="categories__item-title">
              Monitores
            </div>
          </div>
          <div className="categories__item">
            <div className="categories__item-image">
              <img src={categories4} alt=""/>
            </div>
            <div className="categories__item-title">
              Consolas
            </div>
          </div>
        </div>
      </div>

      <div className="home__section hot-sale">
        <div className="home__container flex-start">
          <div className="hot-sale__title">
            <span>HOT SALE</span>
          </div>
          <BsClockHistory className="hot-sale__icon"/>
          <div className="hot-sale__count-down">
            2 d 13 : 25 : 40
          </div>
        </div>
      </div>

      <ProductListHome/>
      <ProductListHome title="lo mas vendido"/>
      <ProductListHome title="recomendado"/>

    </>
  )
}

export default Home
