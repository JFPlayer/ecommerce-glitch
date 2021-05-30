import React from 'react'

import './PurchaseConfirmation.scss'

import Button from '../../Button'

const PurchaseConfirmation = () => {
  return (
    <div className="purchase-section">
      <div className="purchase__title">
        Confirmación de compra
      </div>
      <div className="purchase-confirmation__items">
        <div className="purchase-confirmation__item-section">
          <div className="purchase__title confirmation">
            Datos de entrega
            <Button
              light
            >
              Modificar
            </Button>
          </div>
          <div className="purchase-confirmation__item-info">
            <span className="purchase-confirmation__item-info-title">
              Direccion de envío:
            </span>
            <p className="purchase-confirmation__item-info-content">
              Av. Calle Falsa 1234, Capital Federal, Buenos Aires
            </p>
          </div>
        </div>

        <div className="purchase-confirmation__item-section">
          <div className="purchase__title confirmation">
            Pago
            <Button
              light
            >
              Modificar
            </Button>
          </div>

          <div className="purchase-confirmation__item-info">
            <span className="purchase-confirmation__item-info-title">
              Medio de pago:
            </span>
            <p className="purchase-confirmation__item-info-content">
              MercadoPago
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PurchaseConfirmation
