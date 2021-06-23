import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import './PurchaseSummary.scss'
import { IoIosArrowDown } from 'react-icons/io'

import ProductPurchaseSummary from '../ProductPurchaseSummary'
import { toMoney } from '../../../utils/toMoney'

const PurchaseSummary = () => {
  const [isActive, setIsActive] = useState(false)

  const { cart, subTotal, discount, total } = useSelector(state => state.user)

  return (
    <aside className={`purchase-summary ${isActive && 'active'}`}>
      <div 
        className="purchase-summary__drop-down-btn"
        onClick={() => setIsActive(!isActive)}
      >
        Resumen de la compra
        <IoIosArrowDown/>
      </div>
      <div className="purchase-summary__drop-down-menu">
        <div className="purchase-summary__drop-down-list">
          {cart.map(({quantity, productId}) => 
            <ProductPurchaseSummary
              key={productId._id}
              title={productId.title}
              image={productId.images[0].URL}
              quantity={quantity}
              price={productId.price}
            />
          )}

        </div>

        <div className="purchase-summary__row">
          <div className="purchase-summary__row-item">
            Subtotal
          </div>
          <div className="purchase-summary__row-item">
            {toMoney(subTotal)}
          </div>
        </div>
        <div className="purchase-summary__row">
          <div className="purchase-summary__row-item">
            Descuento
          </div>
          <div className="purchase-summary__row-item">
            {"- " + toMoney(discount)}
          </div>
        </div>
        <div className="purchase-summary__row">
          <div className="purchase-summary__row-item">
            Total
          </div>
          <div className="purchase-summary__row-item">
            {toMoney(total)}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default PurchaseSummary
