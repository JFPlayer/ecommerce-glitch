import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useSelector, useDispatch } from "react-redux"

import "./PurchaseDataUser.scss"

import InputText from "../../InputText"
import Checkbox from "../../Checkbox"
import PurchaseActions from "../PurchaseActions"
import Button from '../../Button'

import { updatePerfil, updateAddress, setPurchasePerfil, setPurchaseAddress } from '../../../redux/userDucks'

const PurchaseDataUser = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const [savedPerfil, setSavedPerfil] = useState(false)
  const [savedAddress, setSavedAddress] = useState(false)

  const {
    register: registerPerfil,
    handleSubmit: handleSubmitPerfil,
    watch: watchPerfil,
    formState: formStatePerfil,
    reset: resetPerfil
  } = useForm();
  
  const formPerfil = {
    register: registerPerfil,
    watch: watchPerfil,
    errors: formStatePerfil.errors,
  };
  
  const {
    register: registerAddress,
    handleSubmit: handleSubmitAddress,
    watch: watchAddress,
    formState: formStateAddress,
    reset: resetAddress
  } = useForm();

  const formAddress = {
    register: registerAddress,
    watch: watchAddress,
    errors: formStateAddress.errors,
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

  const onSubmitPerfil = (data) => {
    const { savePerfil, ...perfil } = data
    if(savePerfil) {
      dispatch(updatePerfil(perfil))
    }
    dispatch(setPurchasePerfil(perfil))
    setSavedPerfil(true)
  };
  
  const handleChangePerfil = () => {
    if(savedPerfil) setSavedPerfil(false)
  }
  
  const onSubmitAddress = (data) => {
    const { saveAddress, ...address } = data
    if(saveAddress) {
      dispatch(updateAddress(address))
    }
    dispatch(setPurchaseAddress(address))
    setSavedAddress(true)
  };

  const handleChangeAddress = () => {
    if(savedAddress) setSavedAddress(false)
  }

  return (
    <>
      <div className="purchase-du">
        <div className="purchase-du__title">Datos Personales</div>
        <div className="purchase-du__form">
          <div className="purchase-du__email">{user.userEmail}</div>
          <form
            onSubmit={handleSubmitPerfil(onSubmitPerfil)}
            onChange={handleChangePerfil}
            className="purchase-du__info-personal"
          >
            <InputText
              useForm={formPerfil}
              light
              name="firstName"
              labelText="Nombre"
              required
            />
            <InputText
              useForm={formPerfil}
              light
              name="lastName"
              labelText="Apellido"
              required
            />
            <InputText
              useForm={formPerfil}
              light
              name="DNI"
              labelText="DNI"
              required
            />
            <InputText
              useForm={formPerfil}
              light
              name="phone"
              labelText="Telefono/Celular"
              required
            />
            <Checkbox
              className="purchase-du__checkbox"
              light
              useForm={formPerfil}
              name="savePerfil"
              labelText="Guardar estos datos en mi perfil"
            />
            <div className="purchase-du__btn">
              {savedPerfil &&
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
        </div>
        <div className="purchase-du__title">Información de Entrega</div>
        <div className="purchase-du__form">
          <form
            onSubmit={handleSubmitAddress(onSubmitAddress)}
            className="purchase-du__info-address"
            onChange={handleChangeAddress}
          >
            <InputText
              useForm={formAddress}
              light
              name="street"
              labelText="Calle"
              required
            />
            <InputText
              useForm={formAddress}
              light
              name="num"
              labelText="Número"
              required
            />
            <InputText
              useForm={formAddress}
              light
              name="dpto"
              labelText="Piso o Dpto"
              required
            />
            <InputText
              useForm={formAddress}
              light
              name="province"
              labelText="Provincia"
              required
            />
            <InputText
              useForm={formAddress}
              light
              name="city"
              labelText="Ciudad"
              required
            />
            <InputText
              useForm={formAddress}
              light
              name="zipCode"
              labelText="Código Postal"
              required
            />
            <Checkbox
              className="purchase-du__checkbox"
              light
              useForm={formAddress}
              name="saveAddress"
              labelText="Guardar esta dirección en mi perfil"
            />
            <div className="purchase-du__btn">
              {savedAddress &&
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
        </div>
      </div>

      <PurchaseActions 
        active={savedPerfil && savedAddress}
        goToStep="2"
        className="purchase-du__actions"
      />
    </>
  );
};

export default PurchaseDataUser;
