import React from 'react'

import './CatalogOrder.scss'

const CatalogOrder = () => {
  return (
    <div className="order__container">
      <div>
        Ordenar por:
      </div>
      <select name="orderBy" id="" className="order__select">
        <option value="priceAsc">Menor Precio</option>
        <option value="priceDesc">Mayor Precio</option>
        <option value="sequence">Recomendado</option>
      </select>
    </div>
  )
}

export default CatalogOrder
