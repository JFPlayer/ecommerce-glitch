import React from 'react'
import { useForm } from 'react-hook-form'

import './LoginBox.scss'

import InputText from '../InputText'
import Button from '../Button'
import LogoGoogle from '../../assets/logoGoogle.svg'
import LogoFacebook from '../../assets/logoFacebook.svg'

const LoginBox = ({ toClose }) => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm()

  const useFormObject = { register, errors, watch }

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div className="login__flex">
      <div className="login__grid-container">
        <div className="login__grid">
          <div className="login" onClick={e => e.stopPropagation()}>
            <div className="login__container">
              <form onSubmit={handleSubmit(onSubmit)}>
                <InputText 
                  labelText="Email" 
                  name="email"
                  required
                  useForm={useFormObject}
                  />
                <InputText
                  labelText="Contraseña" 
                  name="password" 
                  type="password"
                  required
                  useForm={useFormObject}
                />
                <div className="login__info">
                  <span>¿Olvidaste tu constraseña?</span>
                </div>
                <Button primary type="submit">Iniciar Sesión</Button>
              </form>

              <div className="login__info">
                <span>Iniciar sesión con...</span>
              </div>
              <div className="login__socialmedia-buttons">
                <Button primary logo="google" >
                  <LogoGoogle/>
                </Button>
                <Button primary logo="facebook">
                  <LogoFacebook/>
                </Button>
              </div>

              <div className="login__info">
                <span>¿Eres nuevo? Registrate</span>
              </div>
              <Button>
                Crear una cuenta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginBox
