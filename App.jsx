import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import classes from "../Layout/Header.module.css";
import slide_image_1 from '../../assests/images/img_1.jpg';
import slide_image_2 from '../../assests/images/img_2.jpg';
import slide_image_3 from '../../assests/images/img_3.jpg';
import slide_image_4 from '../../assests/images/img_4.jpg';
import slide_image_5 from '../../assests/images/img_5.jpg';
import slide_image_6 from '../../assests/images/img_6.jpg';
import slide_image_7 from '../../assests/images/img_7.jpg';
import { Link } from 'react-router-dom';

import './Fitness.css'; 

function Fitness() {
  return (
    <>
    <div className="container" >
    <header className={classes.header}>
     <div className="container"> <h1 className="heading">Fitness Gallery</h1></div>
     <div><button type="button"><Link to="/Main">Home</Link></button></div></header>
      <Swiper 
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        className="swiper_container"
      >
        <SwiperSlide className='swiper-slide'>
          <img src={slide_image_1} alt="slide_image" style={{ maxWidth: '100%', maxHeight: '60%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" style={{ maxWidth: '100%', maxHeight: '60%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" style={{ maxWidth: '100%', maxHeight:'60%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" style={{ maxWidth: '100%', maxHeight: '60%'}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" style={{ maxWidth: '100%', maxHeight: '60%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" style={{ maxWidth: '100%', maxHeight: '60%'}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" style={{ maxWidth: '100%', maxHeight: '60%' }} />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div></>
  );
}

export default Fitness;
