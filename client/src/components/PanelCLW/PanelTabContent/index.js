import React from 'react'

import './PanelTabContent.scss'

import PanelCartItems from '../PanelCartItems'
import PanelWishlistItems from '../PanelWishlistItems'
import PanelCartFooter from '../PanelCartFooter'
import PanelWishlistFooter from '../PanelWishlistFooter'

const PanelTabContent = ({ selected }) => {
  return (
    <div className="tabs-content__container">
      

      <div className="tabs-content__cart-body">
        {selected === 'cart' ?
          <PanelCartItems/>
          :
          <PanelWishlistItems/>
        }
      </div>

      <div className="tabs-content__cart-footer">
        
        {selected === 'cart' ?
          <PanelCartFooter/>
          :
          <PanelWishlistFooter/>
        }
      </div>

        {/* <div className="cart-footer__summary">
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
          <Button onClick={toClose}>Cerrar</Button>
          <Button primary>Ir al carrito</Button>
        </div>

      <div className="tabs-content__cart-body">
        <PanelWishListProduct/>
        <PanelWishListProduct/>
        <PanelWishListProduct/>
      </div>

      <div className="tabs-content__cart-footer">
        <div className="cart-footer__actions">
          <Button >Cerrar</Button>
          <Button primary>Ir al carrito</Button>
        </div>
      </div> */}

    </div>
  )
}

export default PanelTabContent
