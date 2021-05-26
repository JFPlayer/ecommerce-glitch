import React from 'react'

import './PanelWishlistFooter.scss'

import Button from '../../Button'

const PanelWishlistFooter = () => {
  return (
    <div className="cart-footer__actions">
      <Button >Cerrar</Button>
      <Button primary>Agregar al carrito</Button>
    </div>
  )
}

export default PanelWishlistFooter
