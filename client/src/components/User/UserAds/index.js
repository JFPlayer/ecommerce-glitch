import React from 'react'

import './UserAds.scss'

import BannerUserAds from '../BannerUserAds'
import { BannerUserAdsNew } from '../BannerUserAds'

const UserAds = () => {
  return (
    <div className="user__section">
      <div className="user__container">
        <div className="user__title">
          Anuncios
        </div>
        <div className="user__content">
          <div className="user__inner-title">
            Slider
          </div>
          <div className="user-ads__list-container">
            <BannerUserAdsNew placeholder="Nuevo Slider"/>
            <BannerUserAds/>
            <BannerUserAds/>
            <BannerUserAds/>
            <BannerUserAds/>
          </div>
        </div>

        <div className="user__content">
          <div className="user__inner-title">
            Banner por categoria
          </div>
          <div className="user-ads__list-container">
            <BannerUserAdsNew placeholder="Nuevo Banner"/>
            <BannerUserAds/>
            <BannerUserAds/>
            <BannerUserAds/>
            <BannerUserAds/>
            <BannerUserAds/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserAds
