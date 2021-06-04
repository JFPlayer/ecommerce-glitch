import React, { useState } from 'react'

import './PanelCLW.scss'
import { FaHeart } from 'react-icons/fa'
import { RiShoppingCartFill } from "react-icons/ri";

import PanelCartProduct from './PanelCartProduct'
import PanelWishListProduct from './PanelWishListProduct'
import Button from '../Button'

const PanelCLW = ({ toClose }) => {
  const [isSelectedCart, setIsSelectedCart] = useState(true)

  return (
    <div className="panel-clw" onClick={e => e.stopPropagation()}>

      <div className="panel-clw__header">
        <div className="panel-clw__tabs">
          <button className="panel-clw__tabs-btn" onClick={() => setIsSelectedCart(true)}>
            <FaHeart/>
            Favoritos
          </button>
          <button className="panel-clw__tabs-btn" onClick={() => setIsSelectedCart(false)} >
            <RiShoppingCartFill/>
            Carrito
          </button>
        </div>
        <div className={`panel-clw__tabs-line ${!isSelectedCart ? 'right' : ''}`}></div>
      </div>

      <div className="panel-clw__body">
        {isSelectedCart ?
          <>
            {[...new Array(7)].map(() => (
              <PanelCartProduct/>
            ))}
          </>
        :
          <>
            {[...new Array(7)].map(() => (
              <PanelWishListProduct/>
            ))}
          </>
        }
      </div>

      <div className="panel-clw__footer">
        {isSelectedCart ?
          <>
            <div className="panel-footer__summary">
              <div className="panel-footer__summary-row">
                <span>Subtotal</span>
                <span>$ 80.500</span>
              </div>
              <div className="panel-footer__summary-row">
                <span>Descuento</span>
                <span>- $ 5.500</span>
              </div>
              <div className="panel-footer__summary-row">
                <span>Total</span>
                <span>$ 75.000</span>
              </div>
            </div>

            <div className="panel-footer__actions">
              <Button onClick={toClose} >Cerrar</Button>
              <Button primary>Ir al carrito</Button>
            </div>
          </>

        :

          <div className="panel-footer__actions">
            <Button onClick={toClose} >Cerrar</Button>
            <Button primary>Agregar al carrito</Button>
          </div>
        }
      </div>

    </div>
  )
}

export default PanelCLW
