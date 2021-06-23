import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import './BannerUserAds.scss'
import { BiCloudUpload } from 'react-icons/bi'
import { TiDelete } from 'react-icons/ti'

import { createBanner, deleteBanner } from '../../../redux/categoriesDucks'
import { createSlider, deleteSlider } from '../../../redux/globalDucks'


const BannerUserAds = ({ src, title, id, type }) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    type === "category" ? 
      dispatch(deleteBanner(id)) 
      : 
      dispatch(deleteSlider(id))
  }
  
  return (
    <div className="banner-ua">
      <img src={src} alt={title}/>
      {title && 
        <div className="banner-ua__title">
          {title}
        </div>
      }
      <button 
        className="banner-ua__btn-remove"
        onClick={handleDelete}
      >
        <TiDelete/>
      </button>
    </div>
  )
}

export const BannerUserAdsNew = ({ id, placeholder }) => {
  const {handleSubmit, register, watch, setValue} = useForm()

  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  const onSubmit = data => {
    id ? 
      dispatch(createBanner(data.banner[0], id)) 
      : 
      dispatch(createSlider(data.banner[0]))
    // setValue('banner', null)
    setLoading(true)
  }
  
  return (
    <form 
      className={`banner-ua ${!watch('banner')?.length ? 'new' : ''}`} 
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="new-banner__box">
        {placeholder || 'Nuevo'}
        <input 
          {...register('banner')}
          type="file"
          accept=".png, .jpeg, .jpg"
        />
      </label>

      {watch('banner') && watch('banner')[0] && 
      
        <div className="new-banner__fields-container">
          {placeholder &&
            <div className="banner-ua__title">
              <span>
                {placeholder}
              </span>
            </div>
          }
          
          <img src={URL.createObjectURL(watch('banner')[0])} alt="Nuevo banner"/>
          
          <button 
            className="banner-ua__btn-remove"
            onClick={() => setValue('banner', null)}
          >
            <TiDelete/>
          </button>

          <button
            type="submit"
            className="banner-ua__btn-upload"
          >
            <BiCloudUpload/>
          </button>

        </div>
      }
      
      {true && 
        <div className="banner_ua__loading">

        </div>
      }
    </form>
  )
}

export default BannerUserAds
