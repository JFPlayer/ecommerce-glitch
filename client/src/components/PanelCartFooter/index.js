import React from 'react'

import './PanelCartFooter.scss'

const PanelCartFooter = () => {
  return (
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
  )
}

import './PanelCartFooter.scss'

export default PanelCartFooter
