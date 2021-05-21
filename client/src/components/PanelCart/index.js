import React from 'react'

import './PanelCart.scss'
import EmptyCartIcon from '../../assets/emptyCartIcon.svg'
import HeartIcon from '../../assets/heartIcon.svg'

const PanelCart = () => {
  return (
    <div className="panel-cart" onClick={e => e.stopPropagation()}>
      <div className="panel-cart__container">
        <div className="panel-cart__tabs">
          <div className="panel-cart__tabs--title">
            <EmptyCartIcon className="panel-cart__icon"/>
            <span>Carrito</span>
          </div>
          <div className="panel-cart__tabs--title">
            <HeartIcon className="panel-cart__icon"/>
            <span>Favoritos</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PanelCart
