import React from 'react'

import './Category.scss'

import CatalogOrder from '../../components/CatalogOrder'
import CatalogFilter from '../../components/CatalogFilter'
import CatalogList from '../../components/CatalogList'

import banner from '../../assets/banner1.png'

const Category = () => {
  return (
    <>
      <div>
        <div className="layout__container">
          <div className="category__banner">
            <img src={banner} alt=""/>
          </div>
        </div>
      </div>

      <div>
        <div className="layout__container">
          <div className="category__nav">
            Videojuegos
          </div>
        </div>
      </div>

      <div>
        <div className="layout__container">
          <div className="category__catalog">
            <div className="catalog__filters">
              <CatalogOrder/>
              <CatalogFilter/>
            </div>

            <div className="catalog__products">
              <CatalogList/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Category
