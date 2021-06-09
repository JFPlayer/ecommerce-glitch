import React from 'react'

import './CatalogList.scss'

import ProductCatalog from '../ProductCatalog'

const arr = [0,1,2,3,4,5,6,7,8,9]

const CatalogList = () => {
  return (
    <div className="catalog-list__container">
      {arr.map((_, index) => (
        <ProductCatalog key={index}/>
      ))}
    </div>
  )
}

export default CatalogList
