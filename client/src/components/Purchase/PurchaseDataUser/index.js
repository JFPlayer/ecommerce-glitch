import React from 'react'
import { useForm } from 'react-hook-form'

import './PurchaseDataUser.scss'

import InputText from '../../InputText'
import Checkbox from '../../Checkbox'
import PurchaseActions from '../PurchaseActions'

const PurchaseDataUser = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const form = { register, watch, errors }


  return (
    <>
      <div className="purchase-du">
        <div className="purchase-du__title">
          Datos Personales
        </div>
        <div className="purchase-du__form">
          <div className="purchase-du__email">
            correo@gmail.com
          </div>
          <div className="purchase-du__info-personal">
            <InputText
              useForm={form}
              light
              name="firstName"
              labelText="Nombre"
              required
              showError
            />
            <InputText
              useForm={form}
              light
              name="lastName"
              labelText="Apellido"
              required
              showError
            />
            <InputText
              useForm={form}
              light
              name="DNI"
              labelText="DNI"
              required
              showError
            />
            <InputText
              useForm={form}
              light
              name="phone"
              labelText="Telefono/Celular"
              required
              showError
            />
            <Checkbox
              light
              useForm={form}
              name="saveData"
              labelText="Guardar estos datos en mi perfil"
            />
          </div>
        </div>
        <div className="purchase-du__title">
          Información de Entrega
        </div>
        <div className="purchase-du__form">
          <div className="purchase-du__info-address">
            <InputText
              useForm={form}
              light
              name="address"
              labelText="Calle"
              required
              showError
            />
            <InputText
              useForm={form}
              light
              name="num"
              labelText="Número"
              required
              showError
            />
            <InputText
              useForm={form}
              light
              name="dpto"
              labelText="Piso o Dpto"
              required
              showError
            />
            <InputText
              useForm={form}
              light
              name="province"
              labelText="Provincia"
              required
              showError
            />
            <InputText
              useForm={form}
              light
              name="city"
              labelText="Ciudad"
              required
              showError
            />
            <InputText
              useForm={form}
              light
              name="ZIP"
              labelText="Código Postal"
              required
              showError
            />
            <Checkbox
              light
              useForm={form}
              name="saveAddress"
              labelText="Guardar esta dirección en mi perfil"
            />
          </div>
        </div>
      </div>

      <PurchaseActions className="purchase-du__actions"/>
    </>
  )
}

export default PurchaseDataUser
