import React from 'react'
import { useSelector } from 'react-redux'

import './PurchaseCart.scss'

import ProductPurchase from '../ProductPurchase'
import PurchaseActions from '../PurchaseActions'

import { toMoney } from '../../../utils/toMoney'

const PurchaseCart = () => {
  const { cart, subTotal, discount, total } = useSelector(state => state.user)

  return (
    <div className="purchase-cart">
      <div className="purchase-cart__list">
        {cart.map(({ quantity, productId }) => 
          <ProductPurchase
            key={productId._id}
            id={productId._id}
            image={productId.images[0].URL}
            title={productId.title}
            sku={productId.sku}
            quantity={quantity}
            priceUnid={productId.price}
            priceTotal={productId.discount ? 
              ((100 - productId.discount) / 100) * productId.price 
              : 
              productId.price}
          />
        )}

        <div className="purchase-cart__summary">
          <div className="purchase-cart__summary-container">
            <div className="purchase-cart__row">
              <div className="purchase-cart__row-item">
                Subtotal
              </div>
              <div className="purchase-cart__row-item">
                {toMoney(subTotal)}
              </div>
            </div>
            <div className="purchase-cart__row">
              <div className="purchase-cart__row-item">
                Descuento
              </div>
              <div className="purchase-cart__row-item">
                {`- ${toMoney(discount)}`}
              </div>
            </div>
            <div className="purchase-cart__row total">
              <div className="purchase-cart__row-item">
                <span className="purchase-cart__total">
                  Total
                </span>
              </div>
              <div className="purchase-cart__row-item">
                <span className="purchase-cart__total">
                  {toMoney(total)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="purchase-cart__actions">
        <PurchaseActions
          active={true}
          goToStep={1}
        />
      </div>
    </div>
  )
}

export default PurchaseCart
