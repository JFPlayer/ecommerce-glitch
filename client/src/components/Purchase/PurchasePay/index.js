import React from 'react'
import { useForm } from 'react-hook-form'

import './PurchasePay.scss'
import LogoMP from '../../../assets/logoMP.svg'
import LogoVisa from '../../../assets/visa.svg'
import LogoMastercard from '../../../assets/mastercard.svg'

import Checkbox from '../../Checkbox'

const purchasePayOption = [
  {
    title: "Mercado Pago",
    name: "mercadoPago",
    image: [<LogoMP/>]
  },
  {
    title: "Tarjeta Debito/Credito",
    name: "card",
    image: [<LogoVisa/>, <LogoMastercard/>]
  },
]

const PurchasePay = () => {
  const { handleSubmit, register, watch, formState: {errors} } = useForm()
  const form = { register, watch, errors }

  return (
    <div className="purchase-section">
      <div className="purchase__title">
        Metodos de pago
      </div>
      {purchasePayOption.map(option => (
        <div className="purchase-pay__option">
          <Checkbox
            light
            useForm={form}
            labelText={option.title}
            name={option.name}
          />
          <span className="purchase-pay__option-logos">
            {option.image}
            {/* {option.image.map(image => (
              <span className="purchase-pay__option-logo">
                {image}
              </span>
            ))} */}
          </span>
        </div>
      ))}
    </div>
  )
}

export default PurchasePay
