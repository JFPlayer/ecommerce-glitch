import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination, Navigation, Autoplay, EffectFade} from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import './Slider.scss'

import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import banner4 from '../../assets/banner4.png'

const banners = [banner1,banner2,banner3,banner4,]

SwiperCore.use([Pagination, Navigation, Autoplay, EffectFade]);

const Slider = () => {

  // const [swiper, setSwiper] = useState({})

  return (
    <div className="slider-swiper">
      <Swiper
        className="slider-swiper__container"
        slidesPerView={1}
        loop
        autoplay={{
          "delay": 3500,
          "disableOnInteraction": false
        }}
        pagination={{clickable: true}}
        navigation={true}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => setSwiper(swiper)}
        // onTransitionStart={() => console.log('start')}
        // onTransitionEnd={() => console.log('End')}
        effect="fade"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <img src={banner} alt=""/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
