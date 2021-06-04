import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import './PanelWishListProduct.scss'

import image from '../../../assets/notebook.png'

import ButtonRemove from '../../ButtonRemove'
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
        <Checkbox useForm={useFormObject} name='check1'/>
      </div>

      <Link to='' className="panel-wl-product__description">
        <div className="panel-wl-product__image">
          <img src={image} alt="imagen"/>
        </div>

        <span className="panel-wl-product__info">
          ASUS 255 G7 ATHLON 3150U 8GB 1TB 15.6"
        </span>
      </Link>
      
      <div className="panel-wl-product__remove">
        <ButtonRemove/>
      </div>
    </div>
  )
}

export default PanelWishListProduct
