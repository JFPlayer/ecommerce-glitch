import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './PanelWishListProduct.scss'

import ButtonRemove from '../../ButtonRemove'
import Checkbox from '../../Checkbox'

import { removeProductWishList } from '../../../redux/userDucks'

const PanelWishListProduct = ({ product, useForm }) => {
  const dispatch = useDispatch()

  const removeItemFromWishList = () => {
    dispatch(removeProductWishList(product._id))
  }

  return (
    <div className="panel-wl-product">

      <div className="panel-wl-product__check">
        <Checkbox useForm={useForm} name={product._id}/>
      </div>

      <Link 
        to={`/products/${product._id}`}
        className="panel-wl-product__description"
      >
        <div className="panel-wl-product__image">
          <img src={product.images[0].URL} alt={product.title}/>
        </div>

        <span className="panel-wl-product__info">
          {product.title}
        </span>
      </Link>
      
      <div className="panel-wl-product__remove">
        <ButtonRemove
          onClick={removeItemFromWishList}
        />
      </div>
    </div>
  )
}

export default PanelWishListProduct
