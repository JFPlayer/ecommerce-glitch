import React from 'react'

import './PanelCartFooter.scss'

import Button from '../../Button'

const PanelCartFooter = () => {
  return (
    <>
      <div className="cart-footer__summary">
        <div className="cart-footer__summary-row">
          <div>Subtotal</div>
          <div>$ 80.500</div>
        </div>
        <div className="cart-footer__summary-row">
          <div>Descuento</div>
          <div>- $ 5.500</div>
        </div>
        <div className="cart-footer__summary-row">
          <div>Total</div>
          <div>$ 75.000</div>
        </div>
      </div>
      <div className="cart-footer__actions">
        <Button >Cerrar</Button>
        <Button primary>Ir al carrito</Button>
      </div>
    </>
  )
}

export default PanelCartFooter
