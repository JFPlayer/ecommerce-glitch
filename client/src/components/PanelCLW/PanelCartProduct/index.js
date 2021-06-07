import React from 'react'
import { Link } from 'react-router-dom'

import './PanelCartProduct.scss'

import image from '../../../assets/notebook.png'

import ButtonRemove from '../../ButtonRemove'

const PanelCartProduct = () => {
  return (
    <div className="panel-cart-product">
      
      <div className="panel-cart-product__count">
        <button>+</button>
        <span>2</span>
        <button>-</button>
      </div>

      <Link to='' className="panel-cart-product__description">
        <div className="panel-cart-product__image">
          <img src={image} alt="imagen"/>
        </div>

        <div className="panel-cart-product__info">
          <span>
          ASUS 255 G7 ATHLON 3150U 8GB 1TB 15.6"
          <br/>
          $85.499
          <br/>
          Descuento 15%
          </span>
        </div>
      </Link>

      <div className="panel-cart-product__remove">
        <ButtonRemove/>
      </div>
      
    </div>
  )
}

export default PanelCartProduct
