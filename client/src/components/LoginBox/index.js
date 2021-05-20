import React from 'react'
import { useForm } from 'react-hook-form'

import './LoginBox.scss'

import InputText from '../InputText'
import Button from '../Button'

const LoginBox = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div className="login__grid">
      <div className="login">
        <div className="login__container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputText 
              labelText="Email" 
              name="email"
              register={register}
              watch={watch}
              error={errors}
              required
            />
            <InputText
              labelText="Contraseña" 
              name="password" 
              type="password" 
              register={register}
              watch={watch}
              error={errors}
            />
            <Button 
              
            >
              Iniciar Sesion
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginBox
