import React from 'react'

import './ImageUserProducts.scss'
import { FaTrashAlt } from 'react-icons/fa'
import { TiDelete } from 'react-icons/ti'

import Button from '../../Button'

import banner from '../../../assets/banner1.png'

const ImageUserProducts = () => {
  return (
    <div className="image-up">
      <img src={banner} alt=""/>
      <button className="image-up__btn-main">
        Principal
      </button>
      <button className="image-up__btn-remove">
        <TiDelete/>
      </button>
    </div>
  )
}

export const ImageUserProductsNew = () => {
  return (
    <div className="image-up new">
      <label className="new-image__box">
        Nueva<br/>Imagen
        <input 
          // {...register('bannerImage')}
          className="input-file__input"
          type="file"
          accept=".png, .jpeg, .jpg"
        />
      </label>
      {/* <div className="new-image__container">
        <img src={banner} alt=""/>
        <button className="image-up__btn-main">
          Principal
        </button>
        <button className="image-up__btn-remove">
          <TiDelete/>
        </button>
      </div> */}
    </div>
  )
}

export default ImageUserProducts
