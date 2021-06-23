import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './PurchaseActions.scss'
import { IoIosArrowBack } from 'react-icons/io'

import Button from '../../../components/Button'

const PurchaseActions = ({ className, goToStep, active, action }) => {
  const dispatch = useDispatch()

  const changeStep = () => {
    if(active) {
      dispatch({
        type: 'SET_PURCHASE_PROCESS_STEP',
        payload: goToStep
      })
    }
  }

  return (
    <div className={`purchase__actions ${className}`}>
      <Button
        disabled={!active}
        primary
        onClick={() => action ? action() : changeStep()}
      >
        Continuar con la compra
      </Button>
      
      <Link to="/" className="purchase__actions-back">
        <IoIosArrowBack/>
        Agregar mas productos
      </Link>
    </div>
  )
}

export default PurchaseActions
