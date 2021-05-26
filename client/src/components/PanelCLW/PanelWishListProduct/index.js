import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import './PanelWishListProduct.scss'

import TrashIcon from '../../../assets/trashIcon.svg'
import image from '../../../assets/notebook.png'
import Checkbox from '../../Checkbox'

const PanelWishListProduct = () => {
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  const useFormObject = { register, errors, watch }

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="panel-wl-product">

      <div className="panel-wl-product__check">
        {/* <input type="checkbox"/> */}
        {/* <button onClick={handleSubmit(onSubmit)}>boton</button> */}
        <Checkbox useForm={useFormObject} name='check1'/>
      </div>

      <Link to='' className="panel-cart-product__description">
        <div className="panel-cart-product__image">
          <img src={image} alt="imagen"/>
        </div>

        <div className="panel-cart-product__info">
          <span>
          ASUS 255 G7 ATHLON 3150U 8GB 1TB 15.6"
          </span>
        </div>
      </Link>

      <div className="panel-cart-product__remove">
        <button>
          <TrashIcon/>
        </button>
      </div>
    </div>
  )
}

export default PanelWishListProduct
