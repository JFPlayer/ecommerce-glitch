import React from 'react'

import './CatalogFilter.scss'
import { IoOptions } from 'react-icons/io5'

import FilterBox from '../FilterBox'
import Button from '../Button'

const CatalogFilter = () => {
  return (
    <div className="filter__container">
      <div className="filter__title">
        <IoOptions/>
        <span>
          FILTROS
        </span>
      </div>
      <FilterBox title="Marca">
        
      </FilterBox>
      <FilterBox title="Precio">
        
      </FilterBox>

      <div className="filter__button">
        <Button
          primary
        >
          Aplicar filtro
        </Button>
      </div>
    </div>
  )
}

export default CatalogFilter
