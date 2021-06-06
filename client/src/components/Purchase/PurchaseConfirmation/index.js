import React from 'react'

import './PurchaseConfirmation.scss'

import Button from '../../Button'
import PurchaseActions from '../PurchaseActions'

const PurchaseConfirmation = () => {
  return (
    <>
      <div className="purchase-confirmation">
        <div className="purchase-confirmation__title">
          Confirmación de compra
        </div>
        <div className="purchase-confirmation__resume">
          <div className="purchase-confirmation__item">
            <div className="purchase__confirmation__item-title">
              Datos de entrega
              <Button
                light
              >
                Modificar
              </Button>
            </div>
            <div className="purchase-confirmation__item-info">
              <span className="purchase__confirmation__item-subtitle">
                Direccion de envío:
              </span>
              <p className="purchase-confirmation__item-info-content">
                Av. Calle Falsa 1234, Capital Federal, Buenos Aires
              </p>
            </div>
          </div>

          <div className="purchase-confirmation__item">
            <div className="purchase__confirmation__item-title">
              Pago
              <Button
                light
              >
                Modificar
              </Button>
            </div>

            <div className="purchase-confirmation__item-info">
              <span className="purchase__confirmation__item-subtitle">
                Medio de pago:
              </span>
              <p className="purchase-confirmation__item-info-content">
                MercadoPago
              </p>
            </div>
          </div>
        </div>
      </div>

      <PurchaseActions className="purchase-du__actions"/>
    </>
  )
}

export default PurchaseConfirmation
