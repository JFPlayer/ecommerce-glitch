import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './PurchaseConfirmation.scss'

import Button from '../../Button'
import PurchaseActions from '../PurchaseActions'

const PurchaseConfirmation = () => {
  const dispatch = useDispatch()
  const { purchaseAddress, purchasePay } = useSelector(state => state.user)

  const goToStep = step => {
    dispatch({
      type: 'SET_PURCHASE_PROCESS_STEP',
      payload: step
    })
  }

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
                onClick={() => goToStep(1)}
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
                {`${purchaseAddress.street} ${purchaseAddress.num}, ${purchaseAddress.city}, ${purchaseAddress.province}`}
              </p>
            </div>
          </div>

          <div className="purchase-confirmation__item">
            <div className="purchase__confirmation__item-title">
              Pago
              <Button
                onClick={() => goToStep(2)}
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
                {purchasePay}
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
