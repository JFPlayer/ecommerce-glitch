import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './PurchaseSteps.scss'
import { RiShoppingCartFill } from 'react-icons/ri'

const steps = {
  ['Carrito']: <RiShoppingCartFill/>,
  ['Datos personales y entrega']: 1,
  ['Pago']: 2,
  ['Confirmación']: 3,
}

const PurchaseSteps = ({ stepActive }) => {
  const purchaseProcessStep = useSelector(state => state.user.purchaseProcessStep)
  const dispatch = useDispatch()
  
  const setStep = (step) => {
    if(step < purchaseProcessStep) {
      dispatch({
        type: 'SET_PURCHASE_PROCESS_STEP',
        payload: step,
      })
    }
  }

  return (
    <div className="steps">
      {Object.entries(steps).map(([name, icon], index, arr) => (
        <div 
          className={`steps__item ${stepActive >= index && 'active'}`} 
          key={name}
        >
          <div
            onClick={() => setStep(index)}
            className="steps__item-container"
            style={index < purchaseProcessStep ? {cursor: 'pointer'} : {}}
          >
            <span className="steps__icon">
              {icon}
            </span>
            <span className="steps__title">
              {name}
            </span>
          </div>
          {arr.length - 1 !== index && 
            <div className="steps__line"></div>
          }
        </div>
      ))}
    </div>
  )
}

export default PurchaseSteps
