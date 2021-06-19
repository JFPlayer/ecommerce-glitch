import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import './PurchaseActions.scss'
import { IoIosArrowBack } from 'react-icons/io'

import Button from '../../../components/Button'

const PurchaseActions = ({ className }) => {
  const purchaseProcessStep = useSelector(state => state.user.purchaseProcessStep)
  const dispatch = useDispatch()

  const changeStep = () => {
    if(purchaseProcessStep < 3)
    dispatch({
      type: 'SET_PURCHASE_PROCESS_STEP',
      payload: purchaseProcessStep + 1
    })
  }

  return (
    <div className={`purchase__actions ${className}`}>
      <Button
        primary
        onClick={changeStep}
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
