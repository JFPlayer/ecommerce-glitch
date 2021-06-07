import React from 'react'
import { useForm } from 'react-hook-form'

import './BannerUserAds.scss'
import { FaTrashAlt } from 'react-icons/fa'
import { BiCloudUpload } from 'react-icons/bi'
import { TiDelete } from 'react-icons/ti'

import banner from '../../../assets/banner1.png'


const BannerUserAds = () => {
  
  return (
    <div className="banner-ua">
      <img src={banner} alt=""/>
      <div className="banner-ua__title">
        Titulo
      </div>
      <button className="banner-ua__btn-remove">
        <TiDelete/>
      </button>
    </div>
  )
}

export const BannerUserAdsNew = ({ placeholder }) => {
  const {handleSubmit, register, watch, setValue} = useForm()

  const onSubmit = data => {
    console.log(data)
  }
  
  return (
    <form className="banner-ua new-banner" onSubmit={handleSubmit(onSubmit)}>
      <label className="new-banner__box">
        {placeholder}
        <input 
          {...register('bannerImage')}
          className="input-file__input"
          type="file"
          accept=".png, .jpeg, .jpg"
        />
      </label>

      {watch('bannerImage') && watch('bannerImage')[0] && 
      (
        <div className="new-banner__fields-container">
          <div className="banner-ua__title">
            <input 
              {...register('bannerTitle')}
              type="text"
              placeholder={placeholder}
            />
          </div>
          
          <img src={URL.createObjectURL(watch('bannerImage')[0])} alt="Nuevo banner"/>
          
          <button 
            className="banner-ua__btn-remove"
            onClick={() => setValue('bannerImage', null)}
          >
            <TiDelete/>
          </button>

          <button className="banner-ua__btn-upload">
            <BiCloudUpload/>
          </button>

        </div>
      )}
    </form>
  )
}

export default BannerUserAds
