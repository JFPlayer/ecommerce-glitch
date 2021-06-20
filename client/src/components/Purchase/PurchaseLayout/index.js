import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './PurchaseLayout.scss'
import Logo from '../../../assets/logo-gray.svg'

import PurchaseSteps from '../PurchaseSteps'

const PurchaseLayout = ({ children }) => {
  const { purchaseProcessStep } = useSelector(state => state.user)

  return (
    <div className="purchase-process__body">
      <div className="purchase-process__container">
        <div className="purchase-process__header">
          <Link to='/' className="purchase-process__logo">
            <Logo/>
          </Link>
          <div className="purchase-process__header-steps">
            <PurchaseSteps
              stepActive={purchaseProcessStep}
            />
          </div>
        </div>

        <div className="purchase-process__main">
          {children}
        </div>

        <div className="purchase-process__footer">
          <Link to='/' className="purchase-process__logo">
            <Logo/>
          </Link>
          <div className="purchase-process__footer-copyright">
          Al comprar se aceptan los Términos y Condiciones
          <br/>
          <br/>
          Copyright 2021 | Todos los derechos reservados Glitch.com 
          <br/>
          Av. Calle Falsa 1234 | Capital Federal | Argentina
          </div>
        </div>
      </div>
    </div>
  )
}

export default PurchaseLayout
