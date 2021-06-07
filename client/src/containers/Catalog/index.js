import React, { useState } from 'react'

import './Catalog.scss'
import NavHistory from '../../components/NavHistory'
import CatalogContent from '../../components/CatalogContent'

import banner from '../../assets/banner1.png'

const Catalog = () => {

  return (
    <>
      <div className="catalog-ads">
        <div className="catalog-ads-container">
          <img src={banner} alt=""/>
        </div>
      </div>

      <NavHistory/>

      <div className="catalog">
        <CatalogContent/>
      </div>

    </>
  )
}

export default Catalog
