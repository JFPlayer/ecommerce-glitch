import React from 'react'
import { useForm } from 'react-hook-form'

import './BannerUserAds.scss'
import { FaTrashAlt } from 'react-icons/fa'
import { BiCloudUpload } from 'react-icons/bi'
import { TiDelete } from 'react-icons/ti'


// import InputFile from '../../InputFile'
import Button from '../../Button'

import banner from '../../../assets/banner1.png'


const BannerUserAds = () => {
  
  return (
    <div className="banner-ua">
      <div className="banner-ua__title">
        Titulo
      </div>
      <div className="banner-ua__content">
        <div className="banner-ua__image">
          <img src={banner} alt=""/>
        </div>
        <div className="banner-ua__btn">
          <button className="btn-remove">
            <FaTrashAlt/>
          </button>
        </div>
      </div>
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
        Nuevo Banner
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
          <div className="banner-ua__content">
            <div className="banner-ua__image">
              <div className="input-file__image-container">
                <img src={URL.createObjectURL(watch('bannerImage')[0])} alt="nuevo banner"/>
                <button 
                  className="input-file__image-btn"
                  onClick={() => setValue('bannerImage', null)}
                >
                  <TiDelete/>
                </button>
              </div>
            </div>

            <div className="banner-ua__btn">
              <Button
                type="submit"
                primary
              >
                <BiCloudUpload/>
              </Button>
            </div>
          </div>
        </div>
      )}
    </form>
  )
}

export default BannerUserAds
