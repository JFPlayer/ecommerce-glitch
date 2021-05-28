import React from 'react'

import './PurchaseLayout.scss'
import Logo from '../../../assets/logo-gray.svg'

import PurchaseSteps from '../PurchaseSteps'

const PurchaseLayout = ({ children }) => {
  return (
    <div className="purchase-process__body">
      <div className="purchase-process__container">
        <div className="purchase-process__header">
          <div className="purchase-process__logo">
            <Logo/>
          </div>
          <div className="purchase-process__header-steps">
            <PurchaseSteps
              stepActive={2}
            />
          </div>
        </div>

        <div className="purchase-process__main">
          {children}
        </div>

        <div className="purchase-process__footer">
          <div className="purchase-process__logo">
            <Logo/>
          </div>
          <div className="purchase-process__footer-copyright">
          Al comprar se aceptan los Términos y Condiciones
          <br/>
          <br/>
          Copyright 2021 | Todos los derechos reservados Glitch.com 
          <br/>
          Av. Corrientes 1234 | Capital Federal | Argentina
          </div>
        </div>
      </div>
    </div>
  )
}

export default PurchaseLayout