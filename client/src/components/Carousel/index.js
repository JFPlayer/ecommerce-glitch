import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Autoplay} from 'swiper';

import './Carousel.scss'

import ProductCarousel from '../ProductCarousel'

const Carousel = () => {
  return (
    <Swiper
      className="carousel__container"
      slidesPerView={2}
      spaceBetween={15}
      loop
      autoplay={{
        "delay": 3500,
        "disableOnInteraction": false
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
      <SwiperSlide>
        <ProductCarousel/>
      </SwiperSlide>
      <SwiperSlide>
        <ProductCarousel/>
      </SwiperSlide>
      <SwiperSlide>
        <ProductCarousel/>
      </SwiperSlide>
      <SwiperSlide>
        <ProductCarousel/>
      </SwiperSlide>
      <SwiperSlide>
        <ProductCarousel/>
      </SwiperSlide>
      <SwiperSlide>
        <ProductCarousel/>
      </SwiperSlide>
      <SwiperSlide>
        <ProductCarousel/>
      </SwiperSlide>
    </Swiper>
  )
}

export default Carousel
