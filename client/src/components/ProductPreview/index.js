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
    <div className="product-images">
      <div className="product-images__thumbs">
        {arr.map((item, index) => (
          <div className="product-images__thumb-item" onClick={() => swiper?.slideTo(index)}>
            <img src={item} alt=""/>
          </div>
        ))}
      </div>
      <div className="product-images__slider">
        <Swiper
          className="product-images__swiper"
          navigation={true}
          slidesPerView={1}
          onSwiper={setSwiper}
        >
          {arr.map((item) => (
            <SwiperSlide>
              <div className="product-images__main">
                <img src={item} alt=""/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  )
}

export default ProductPreview
