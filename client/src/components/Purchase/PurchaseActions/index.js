import React from 'react'
import { Link } from 'react-router-dom'

import './PurchaseActions.scss'
import { IoIosArrowBack } from 'react-icons/io'

import Button from '../../../components/Button'

const PurchaseActions = ({ className }) => {
  return (
    <div className={`purchase__actions ${className}`}>
      <Button
        primary
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
