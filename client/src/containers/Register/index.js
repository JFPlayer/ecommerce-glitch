import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import './Register.scss'

import InputText from  '../../components/InputText'
import Button from  '../../components/Button'

import { signUp } from '../../redux/userDucks'

const Register = () => {
  const { register, handleSubmit, watch, formState: { errors }  } = useForm()
  const form = { register, watch, errors }

  const history = useHistory()

  const dispatch = useDispatch()
  const isEmailRepeats = useSelector(state => state.user.repeatedUserEmail)

  const onSubmit = data => {
    dispatch(signUp(data))
  }

  const goToSignIn = (event) => {
    event.preventDefault()
    history.push('/')
  }

  return (
    <div className="register">
      <div className="register__container">
        <div className="register__title">
          Registrate en Glitch
        </div>
        <form
          className="register__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputText
            labelText="Nombre"
            name="firstName"
            required
            useForm={form}
          />
          <InputText
            labelText="Apellido"
            name="lastName"
            required
            useForm={form}
          />
          <InputText
            labelText="Email"
            name="email"
            type="email"
            required
            useForm={form}
          />
          <InputText
            type="password"
            labelText="Contraseña"
            name="password"
            required
            useForm={form}
          />
          {isEmailRepeats && 
            <div className="register__error">
              El email ya se encuentra registrado
            </div>
          }
          <div className="register__actions">
            <Button
              className="register__btn"
              primary
              type="submit"
              >
              Registrarme
            </Button>
            <Button
              className="register__btn"
              onClick={() => history.push('/')}
            >
              Volver
            </Button>

          </div>
          <div className="register__sign-in">
            Ya eres usuario?
            <a
              onClick={goToSignIn}
              href="/"
            >
              Iniciar sesión
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
