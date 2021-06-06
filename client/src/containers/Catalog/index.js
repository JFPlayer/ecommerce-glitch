import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Catalog.scss'
import { IoOptions } from 'react-icons/io5'
import { FiRewind, FiFastForward } from 'react-icons/fi'

import CatalogList from '../../components/CatalogList'
import FilterBox from '../../components/FilterBox'
import Button from '../../components/Button'
import NavHistory from '../../components/NavHistory'

import banner from '../../assets/banner1.png'

const Catalog = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)


  return (
    <>
      <div className="catalog-ads">
        <div className="catalog-ads-container">
          <img src={banner} alt=""/>
        </div>
      </div>

      <NavHistory/>

      <div className="catalog">
        <div className="catalog__container">

          <div className="catalog__filters">

            <button className="filter__btn" onClick={() => setIsMenuActive(!isMenuActive)}>
              <IoOptions/>
              Filtrar
            </button>

            <div className={`filter__container ${isMenuActive ? 'active' : ''}`}>
              
              <div className="filter__title">
                <IoOptions/>
                <span>
                  FILTROS
                </span>
              </div>

              <FilterBox title="Marca" />
              <FilterBox title="Marca" />
              <FilterBox title="Marca" />
              <FilterBox title="Precio" />

              <div className="filter__action">
                <Button
                  primary
                >
                  Aplicar filtro
                </Button>
              </div>
            </div>

            <div className="order">
              <div>
                Ordenar por:
              </div>
              <select name="orderBy" id="" className="order__select">
                <option value="priceAsc">Menor Precio</option>
                <option value="priceDesc">Mayor Precio</option>
                <option value="sequence">Recomendado</option>
              </select>
            </div>

          </div>

          <div className="catalog__list">
            <CatalogList/>

            <div className="catalog__pagination">
              <div className="catalog__pagination-item">
                <FiRewind/>
              </div>
              {[...new Array(5)].map((_, index) => 
                <div className="catalog__pagination-item">
                  {index +1}
                </div>
              )}
              <div className="catalog__pagination-item">
                <FiFastForward/>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Catalog
