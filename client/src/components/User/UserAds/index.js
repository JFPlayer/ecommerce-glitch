import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './UserAds.scss'

import BannerUserAds from '../BannerUserAds'
import { BannerUserAdsNew } from '../BannerUserAds'

const MAX_BANNERS = 5

const UserAds = () => {
  const { categories } = useSelector(state => state.categories)
  const { banners } = useSelector(state => state.global)

  return (
    <div className="user-ads">

      <div className="user__section">
        <div className="user__title">
          Slider (pagina principal)
        </div>
        <div className="user__section-content">
          <div className="user-ads__list">
            {banners.length < MAX_BANNERS &&
              <BannerUserAdsNew placeholder="Nuevo Slider"/>
            }
            {banners.map(banner => 
              <BannerUserAds
                key={banner._id}
                id={banner._id}
                type="slider"
                src={banner.URL}
              />
            )}
          </div>
        </div>
      </div>

      <div className="user__section">
        <div className="user__title">
          Banner (por categoria)
        </div>
        <div className="user__section-content">
          <div className="user-ads__list">
            {categories.map(category => 
              category.image ? 
                <BannerUserAds
                  key={category._id}
                  id={category._id}
                  type="category"
                  src={category.image.URL}
                  title={category.title}
                />
              :
                <BannerUserAdsNew
                  key={category._id}
                  url={`/api/categories/${category._id}`}
                  id={category._id}
                  placeholder={category.title}
                />
            )}
          </div>
        </div>
      </div>

    </div>
  )
}

export default UserAds
