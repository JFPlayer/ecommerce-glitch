import React, {useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
// import SwiperCore, { Zoom } from 'swiper/core'

// SwiperCore.use([Zoom])

import './ProductPreview.scss'

const ProductPreview = ({ images = [] }) => {
  const [swiper, setSwiper] = useState({})

  return (
    <div className="product-preview__container">
      <div className="product-preview__thumbs">
        {images.map((image, index) => (
          <div 
            key={image._id}
            className="product-preview__thumb-item" 
            onMouseEnter={() => swiper?.slideTo(index)}
          >
            <img src={image.URL} alt={image.key}/>
          </div>
        ))}
      </div>

      <div className="product-preview__slider">
        <Swiper
          className="product-preview__swiper"
          navigation={true}
          slidesPerView={1}
          zoom={true}
          onSwiper={setSwiper}
        >
          {images.map((image) => (
            <SwiperSlide 
              key={image._id}
              className="product-preview__swiper-img"
            >
              <img src={image.URL} alt={image.key}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ProductPreview
