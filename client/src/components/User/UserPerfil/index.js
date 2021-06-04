import React from 'react'
import { useForm } from 'react-hook-form'

import './UserPerfil.scss'

import InputText from '../../InputText'
import Button from '../../Button'

const UserPerfil = () => {
  const { handleSubmit, register, watch, formState: {errors} } = useForm()
  const form = { register, watch, errors }
  

  return (
    <main className="user__section">
      <div className="user__container">
        <div className="user__title">
          Perfil
        </div>
        <div className="user__content">

          <div className="user__inner-title">
            Datos de contacto
          </div>
          <form 
            className="user-perfil__form perfil"
          >
            <InputText
              useForm={form}
              labelText="Nombre"
              name="firstName"
              required
              showError
            />
            <InputText
              useForm={form}
              labelText="Apellido"
              name="lastName"
              required
              showError
            />
            <InputText
              useForm={form}
              labelText="DNI"
              name="DNI"
              required
              showError
            />
            <InputText
              useForm={form}
              labelText="Telefono/Celular"
              name="phone"
              required
              showError
            />
            <InputText
              useForm={form}
              labelText="Email"
              name="email"
              required
              showError
            />
            <Button
            >
              Cancelar
            </Button>
            <Button
              primary
            >
              Guardar
            </Button>
          </form>

          <div className="user__inner-title">
            Dirección
          </div>
          <form 
            className="user-perfil__form address"
          >
            <InputText
              useForm={form}
              labelText="Calle"
              name="street"
              required
              showError
            />
            <InputText
              useForm={form}
              labelText="Número"
              name="num"
              required
              showError
            />
            <InputText
              useForm={form}
              labelText="Piso o Dpto"
              name="dpto"
              required
              showError
            />
            <InputText
              useForm={form}
              labelText="Provincia"
              name="province"
              required
              showError
            />
            <InputText
              useForm={form}
              labelText="Ciudad"
              name="city"
              required
              showError
            />
            <InputText
              useForm={form}
              labelText="Código Postal"
              name="zipCode"
              required
              showError
            />
            <Button
            >
              Cancelar
            </Button>
            <Button
              primary
            >
              Guardar
            </Button>
          </form>

          <div className="user__inner-title">
            Dirección
          </div>
          <form 
            className="user-perfil__form password"
          >
            <InputText
              useForm={form}
              labelText="Nueva contraseña"
              name="newPassword"
              type="password"
              required
              showError
              />
            <InputText
              useForm={form}
              labelText="Confirmar contraseña"
              name="confirmNewPassword"
              type="password"
              required
              showError
            />
            <Button
            >
              Cancelar
            </Button>
            <Button
              primary
            >
              Guardar
            </Button>
          </form>
          
        </div>
      </div>
    </main>
  )
}

export default UserPerfil
