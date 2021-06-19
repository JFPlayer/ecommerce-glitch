import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import './LoginBox.scss'
import { MdClose } from 'react-icons/md'

import LogoGoogle from '../../assets/logoGoogle.svg'
import LogoFacebook from '../../assets/logoFacebook.svg'
import Logo from '../../assets/logo.svg'

import InputText from '../InputText'
import Button from '../Button'
import UserNav from '../User/UserNav'

import { useMediaQuery } from '../../hooks/useMediaQuery'

import { signIn } from '../../redux/userDucks'

const LoginBox = ({ toClose, positionX }) => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm()
  const useFormObject = { register, errors, watch }

  const dispatch = useDispatch()
  const { loggedIn } = useSelector(state => state.user)

  const history = useHistory()
  
  const isDesktop = useMediaQuery("(min-width: 800px)")

  const onSubmit = data => {
    dispatch(signIn(data))
  }

  return (
    <div 
      className={`login ${loggedIn ? 'is-login' : ''}`}
      onClick={e => e.stopPropagation()}
      // style={{left: (isDesktop || loggedIn) ? positionX : '', transform: 'translateX(-50%)'}}
      style={(isDesktop || loggedIn) ? {left: positionX, transform: 'translateX(-50%)'} : {}}
    >
      <div className="login__btn-close" onClick={toClose}>
        <MdClose/>
      </div>
      
      <div className="login__container">

        {loggedIn ? 
          <UserNav/>
        :
          <>
            <div className="login__logo-glitch">
              <Logo/>
            </div>
            <form 
              onSubmit={handleSubmit(onSubmit)}
              className="login__credentials"
            >
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
              <p className="login__info">
                ¿Olvidaste tu constraseña?
              </p>
              <Button primary type="submit">Iniciar Sesión</Button>
            </form>

            <div className="login__socialmedia">
              <p className="login__info">
                Iniciar sesión con...
              </p>
              <div className="login__socialmedia-buttons">
                <Button primary logo="google">
                  <LogoGoogle/>
                </Button>
                <Button primary logo="facebook">
                  <LogoFacebook/>
                </Button>
              </div>
            </div>

            <div className="login__new-account">
              <p className="login__info">
                ¿Eres nuevo? Registrate
              </p>
              <Button
                onClick={() => history.push('/register')}
              >
                Crear una cuenta
              </Button>
            </div>
          </>
        }

      </div>
    </div>
  )
}

export default LoginBox
