import React, {useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react"

import './ProductPreview.scss'

import notebook from '../../assets/notebook.png'
import banner from '../../assets/banner1.png'

const arr = [notebook, banner]

const ProductPreview = () => {
  const [thumbActive, setThumbActive] = useState(0)
  const [swiper, setSwiper] = useState({})


  return (
    <div className="product-preview__container">
      <div className="product-preview__thumbs">
        {arr.map((item, index) => (
          <div className="product-preview__thumb-item" onClick={() => swiper?.slideTo(index)}>
            <img src={item} alt=""/>
          </div>
        ))}
      </div>

      <div className="product-preview__slider">
        <Swiper
          className="product-preview__swiper"
          navigation={true}
          slidesPerView={1}
          onSwiper={setSwiper}
        >
          {arr.map((item) => (
            <SwiperSlide className="product-preview__swiper-img">
              <img src={item} alt=""/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ProductPreview
