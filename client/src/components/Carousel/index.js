import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// import SwiperCore, { Navigation, Autoplay} from 'swiper';

import './Carousel.scss'

import ProductCarousel from '../ProductCarousel'

const Carousel = ({ products }) => {
  return (
    <Swiper
      className="carousel__container"
      slidesPerView={2}
      spaceBetween={15}
      loop
      autoplay={{
        "delay": 5000,
        "disableOnInteraction": false,
        "pauseOnMouseEnter": true,
      }}
      navigation={true}
      breakpoints={{
        "480": {
          "slidesPerView": 3,
          "spaceBetween": 15
        },
        "800": {
          "slidesPerView": 5,
          "spaceBetween": 15
        }
      }}
    >
      {products.map(product => 
        <SwiperSlide
          key={product._id}
          className="carousel-swiper"
        >
          <ProductCarousel product={{...product}}/>
        </SwiperSlide>
      )}
    </Swiper>
  )
}

export default Carousel
