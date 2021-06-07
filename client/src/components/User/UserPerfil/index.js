import React from "react";
import { useForm } from "react-hook-form";

import "./UserPerfil.scss";

import InputText from "../../InputText";
import Button from "../../Button";

const UserPerfil = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const form = { register, watch, errors };

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div className="user-perfil">
      <div className="user__section">
        <div className="user__title">Datos de contacto</div>
        <div className="user__section-content">
          <form 
            className="user-perfil__form perfil"
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputText
              useForm={form}
              labelText="Nombre"
              name="firstName"
              required
            />
            <InputText
              useForm={form}
              labelText="Apellido"
              name="lastName"
              required
            />
            <InputText
              useForm={form}
              labelText="DNI"
              name="dni"
              required
            />
            <InputText
              useForm={form}
              labelText="Telefono/Celular"
              name="phone"
              required
            />
            <InputText
              useForm={form}
              labelText="Email"
              name="email"
              required
            />
            <div className="user-perfil__actions">
              <Button>Cancelar</Button>
              <Button primary>Guardar</Button>
            </div>
          </form>
        </div>
      </div>

      <div className="user__section">
        <div className="user__title">Dirección</div>
        <div className="user__section-content">
          <form className="user-perfil__form address">
            <InputText
              useForm={form}
              labelText="Calle"
              name="street"
              required
            />
            <InputText
              useForm={form}
              labelText="Número"
              name="num"
              required
            />
            <InputText
              useForm={form}
              labelText="Piso o Dpto"
              name="dpto"
              required
            />
            <InputText
              useForm={form}
              labelText="Provincia"
              name="province"
              required
            />
            <InputText
              useForm={form}
              labelText="Ciudad"
              name="city"
              required
            />
            <InputText
              useForm={form}
              labelText="Código Postal"
              name="zipCode"
              required
              // showError
            />
            <div className="user-perfil__actions">
              <Button>Cancelar</Button>
              <Button primary>Guardar</Button>
            </div>
          </form>
        </div>
      </div>

      <div className="user__section">
        <div className="user__title">Dirección</div>
        <div className="user__section-content">
          <form className="user-perfil__form password">
            <InputText
              useForm={form}
              labelText="Nueva contraseña"
              name="newPassword"
              type="password"
              required
            />
            <InputText
              useForm={form}
              labelText="Confirmar contraseña"
              name="confirmNewPassword"
              type="password"
              required
            />
            <div className="user-perfil__actions">
              <Button>Cancelar</Button>
              <Button primary>Guardar</Button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default UserPerfil;
