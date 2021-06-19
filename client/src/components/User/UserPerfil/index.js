import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux'

import "./UserPerfil.scss";

import InputText from "../../InputText";
import Button from "../../Button";

import { updatePerfil, updateAddress, updatePassword } from '../../../redux/userDucks'

const UserPerfil = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const {
    handleSubmit: handleSubmitPerfil,
    register: registerPerfil,
    watch: watchPerfil,
    formState: formStatePerfil,
    reset: resetPerfil
  } = useForm();
  
  const {
    handleSubmit: handleSubmitAddress,
    register: registerAddress,
    watch: watchAddress,
    formState: formStateAddress,
    reset: resetAddress
  } = useForm();
  
  const {
    handleSubmit: handleSubmitPassword,
    register: registerPassword,
    watch: watchPassword,
    formState: formStatePassword,
    reset: resetPassword
  } = useForm();
  
  const formPerfil = { 
    register: registerPerfil, 
    watch: watchPerfil, 
    errors : formStatePerfil.errors 
  };
  
  const formAddress = { 
    register: registerAddress, 
    watch: watchAddress, 
    errors : formStateAddress.errors 
  };
  
    const formPassword = { 
      register: registerPassword, 
      watch: watchPassword, 
      errors : formStatePassword.errors 
    };
  
  const onSubmitPerfil = (data) => {
    dispatch(updatePerfil(data))
  };
  
  const onSubmitAddress = (data) => {
    dispatch(updateAddress(data))
  };
  
  const onSubmitPassword = (data) => {
    if(data.newPassword === data.confirmNewPassword) {
      dispatch(updatePassword(data.newPassword))
    }
    resetPassword({})
  };

  useEffect(() => {
    resetPerfil({
      firstName: user.userFirstName,
      lastName: user.userLastName,
      DNI: user.userDNI,
      phone: user.userPhone,
    })
  }, [user.userFirstName])

  useEffect(() => {
    resetAddress({
      street: user.userStreet,
      num: user.userNum,
      dpto: user.userDpto,
      province: user.userProvince,
      city: user.userCity,
      zipCode: user.userZipCode,
    })
  }, [user.userStreet])
  

  return (
    <div className="user-perfil">
      <div className="user__section">
        <div className="user__title">Datos de contacto</div>
        <div className="user__section-content">
          <form
            className="user-perfil__form perfil"
            onSubmit={handleSubmitPerfil(onSubmitPerfil)}
          >
            <InputText
              useForm={formPerfil}
              labelText="Nombre"
              name="firstName"
              required
            />
            <InputText
              useForm={formPerfil}
              labelText="Apellido"
              name="lastName"
              required
            />
            <InputText 
              useForm={formPerfil} 
              labelText="DNI" 
              name="DNI" 
              required 
            />
            <InputText
              useForm={formPerfil}
              labelText="Telefono/Celular"
              name="phone"
              required
            />
            <div className="user-perfil__title">
              <span className="user-perfil__email">
                Email:
              </span>
              <span>
                {user.userEmail}
              </span>
            </div>
            <div className="user-perfil__actions">
              <Button
                onClick={() => resetPerfil()}
              >
                Cancelar
              </Button>
              <Button 
                type="submit"
                primary
              >
                Guardar
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="user__section">
        <div className="user__title">Dirección</div>
        <div className="user__section-content">
          <form 
            className="user-perfil__form address"
            onSubmit={handleSubmitAddress(onSubmitAddress)}
          >
            <InputText
              useForm={formAddress}
              labelText="Calle"
              name="street"
              required
            />
            <InputText 
              useForm={formAddress} 
              labelText="Número" 
              name="num" 
              required 
            />
            <InputText
              useForm={formAddress}
              labelText="Piso o Dpto"
              name="dpto"
              required
            />
            <InputText
              useForm={formAddress}
              labelText="Provincia"
              name="province"
              required
            />
            <InputText 
              useForm={formAddress} 
              labelText="Ciudad" 
              name="city" 
              required 
            />
            <InputText
              useForm={formAddress}
              labelText="Código Postal"
              name="zipCode"
              required
            />
            <div className="user-perfil__actions">
              <Button
                onClick={() => resetAddress()}
              >
                Cancelar
              </Button>
              <Button 
                type="submit"
                primary
              >
                Guardar
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="user__section">
        <div className="user__title">Dirección</div>
        <div className="user__section-content">
          <form 
            className="user-perfil__form password"
            onSubmit={handleSubmitPassword(onSubmitPassword)}
          >
            <InputText
              useForm={formPassword}
              labelText="Nueva contraseña"
              name="newPassword"
              type="password"
              required
            />
            <InputText
              useForm={formPassword}
              labelText="Confirmar contraseña"
              name="confirmNewPassword"
              type="password"
              required
            />
            <div className="user-perfil__actions">
              <Button
                onClick={() => resetPassword()}
              >
                Cancelar
              </Button>
              <Button 
                type="submit"
                primary
              >
                Guardar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserPerfil;
