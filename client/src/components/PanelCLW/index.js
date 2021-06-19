import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

import './PanelCLW.scss'
import { FaHeart } from 'react-icons/fa'
import { RiShoppingCartFill } from "react-icons/ri";

import PanelCartProduct from './PanelCartProduct'
import PanelWishListProduct from './PanelWishListProduct'
import Button from '../Button'

import { updateWishListCart } from '../../redux/userDucks'
import { toMoney } from '../../utils/toMoney'

const PanelCLW = ({ toClose }) => {
  const [isSelectedCart, setIsSelectedCart] = useState(true)

  const dispatch = useDispatch()
  const {cart, wishList, subTotal, discount, total} = useSelector(state => state.user)

  const { register, handleSubmit, watch, reset } = useForm()
  const form = {register, watch}

  const addToCart = data => {
    const productsIdToWishList = Object.keys(data).filter((key) => !data[key])
    const productsIdToCart = []
    wishList.forEach((product) => {
      if(!productsIdToWishList.includes(product._id)) {
        productsIdToCart.push(product._id)
      }
    })
    
    if(productsIdToCart.length) {
      dispatch(updateWishListCart(productsIdToWishList, productsIdToCart))
    }
    reset()
  }

  return (
    <div className="panel-clw" onClick={e => e.stopPropagation()}>

      <div className="panel-clw__header">
        <div className="panel-clw__tabs">
          <button className="panel-clw__tabs-btn" onClick={() => setIsSelectedCart(true)} >
            <RiShoppingCartFill/>
            Carrito
          </button>
          <button className="panel-clw__tabs-btn" onClick={() => setIsSelectedCart(false)}>
            <FaHeart/>
            Favoritos
          </button>
        </div>
        <div className={`panel-clw__tabs-line ${!isSelectedCart ? 'right' : ''}`}></div>
      </div>

      <div className="panel-clw__body">
        {isSelectedCart ?
          <>
            {cart.map(({ quantity, productId }) => 
              <PanelCartProduct
                key={productId._id}
                product={{quantity, ...productId}}
              />
            )}
          </>
        :
          <>
            {wishList.map((product) => (
              <PanelWishListProduct
                key={product._id}
                product={product}
                useForm={form}
              />
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
                <span>
                  {toMoney(subTotal)}
                </span>
              </div>
              <div className="panel-footer__summary-row">
                <span>Descuento</span>
                <span>
                  {`- ${toMoney(discount)}`}
                </span>
              </div>
              <div className="panel-footer__summary-row">
                <span>Total</span>
                <span>
                  {toMoney(total)}
                </span>
              </div>
            </div>

            <div className="panel-footer__actions">
              <Button 
                onClick={toClose}
              >
                Cerrar
              </Button>
              <Button 
                primary
              >
                Ir al carrito
              </Button>
            </div>
          </>

        :

          <div className="panel-footer__actions">
            <Button 
              onClick={toClose}
            >
              Cerrar
            </Button>
            <Button
              onClick={handleSubmit(addToCart)}
              primary
            >
              Agregar al carrito
            </Button>
          </div>
        }
      </div>

    </div>
  )
}

export default PanelCLW
