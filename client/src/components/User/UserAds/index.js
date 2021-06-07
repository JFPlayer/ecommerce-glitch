import React from 'react'

import './UserAds.scss'

import BannerUserAds from '../BannerUserAds'
import { BannerUserAdsNew } from '../BannerUserAds'

const UserAds = () => {
  return (
    <div className="user-ads">

      <div className="user__section">
        <div className="user__title">
          Slider (pagina principal)
        </div>
        <div className="user__section-content">
          <div className="user-ads__list">
            <BannerUserAdsNew placeholder="Nuevo Slider"/>
            <BannerUserAds/>
            <BannerUserAds/>
            <BannerUserAds/>
            <BannerUserAds/>
          </div>
        </div>
      </div>

      <div className="user__section">
        <div className="user__title">
          Banner (por categoria)
        </div>
        <div className="user__section-content">
          <div className="user-ads__list">
            <BannerUserAdsNew placeholder="Nuevo Banner"/>
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
