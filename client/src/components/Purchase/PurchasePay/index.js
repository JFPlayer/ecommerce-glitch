import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'

import './PurchasePay.scss'
import LogoMP from '../../../assets/logoMP.svg'
import LogoVisa from '../../../assets/visa.svg'
import LogoMastercard from '../../../assets/mastercard.svg'

import Checkbox from '../../Checkbox'
import PurchaseActions from '../PurchaseActions'
import Button from '../../Button'

import { setPurchasePay }from '../../../redux/userDucks'

const PurchasePay = () => {
  const { handleSubmit, register, watch, formState: {errors}, reset } = useForm()
  const form = { register, watch, errors }

  const { purchasePay } = useSelector(state => state.user)
  const dispatch = useDispatch()
  
  const handleChange = (event) => {
    reset({[event.target.name]: true})
  }

  const onSubmit = data => {
    const pay = Object.keys(data).find(key => data[key])
    dispatch(setPurchasePay(pay))
  }

  useEffect(() => {
    if(purchasePay) reset({ [purchasePay]: true }) 
  }, [])

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="purchase-pay"
        onChange={handleChange}
      >
        <div className="purchase-pay__title">
          Metodos de pago
        </div>
        <div className="purchase-pay__option">
          <Checkbox
            light
            useForm={form}
            labelText="Mercado Pago"
            name="Mercado Pago"
          />
          <span className="purchase-pay__option-logos">
            <LogoMP/>
          </span>
        </div>
        <div className="purchase-pay__option">
          <Checkbox
            light
            useForm={form}
            labelText="Tarjeta Debito/Credito"
            name="Tarjeta Debito/Credito"
          />
          <span className="purchase-pay__option-logos">
            <LogoVisa/>
            <LogoMastercard/>
          </span>
        </div>
        <div className="purchase-pay__btn">
          {purchasePay && watch(purchasePay) &&
            <span>
              Guardado
            </span>
          }
          <Button
            type="submit"
            light
          >
            Continuar
          </Button>
        </div>
        
      </form>

      <PurchaseActions 
        goToStep={(purchasePay && watch(purchasePay)) ? 3 : ''}
        className="purchase-du__actions"
      />
    </>
  )
}

export default PurchasePay
