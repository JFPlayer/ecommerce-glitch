import React from 'react'
import { Link } from 'react-router-dom'

import './PurchaseSteps.scss'
import { RiShoppingCartFill } from 'react-icons/ri'

// const steps = [ <RiShoppingCartFill/>, 1, 2, 3 ]
const steps = {
  ['Carrito']: <RiShoppingCartFill/>,
  ['Datos personales y entrega']: 1,
  ['Pago']: 2,
  ['Confirmación']: 3,
}

const PurchaseSteps = ({ stepActive }) => {
  return (
    <div className="steps">
      {Object.entries(steps).map(([name, icon], index, arr) => (
        <>
        <Link>
          <div className={`steps__item ${stepActive >= index && 'active'}`}>
            <div className="steps__icon">
              {icon}
            </div>
            <div className="steps__title">
              {name}
            </div>
          </div>
        </Link>
          {index !== arr.length - 1 &&
          <div className="steps__line"></div>
          }
        </>
      ))}
    </div>
  )
}

export default PurchaseSteps
