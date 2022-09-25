import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";



import ppap from '../assets/ppap.jpg';
import thumb_guy from '../assets/thumb_guy.jpg'
import thumb_dog_suit from '../assets/126dfdd244674062d9b87a15855105fe.jpg';
import Person1 from '../assets/Person1.jpg';
import Person2 from '../assets/Person2.jpg';
import Person3 from '../assets/Person3.jpg';
import Person4 from '../assets/Person4.jpg';
import Person5 from '../assets/Person5.jpg';
import thumb_VIP from "../assets/VIP.jpg"
import thumb_01 from "../assets/01.jpg"
import thumb_02 from "../assets/02.jpg"
import thumb_04 from "../assets/04.jpg"
import thumb_05 from "../assets/05.jpg"
import thumb_06 from "../assets/06.jpg"
import thumb_07 from "../assets/07.jpg"
import thumb_08 from "../assets/08.jpg"
import thumb_09 from "../assets/09.jpg"
import thumb_10 from "../assets/10.jpg"
import thumb_11 from "../assets/11.jpg"

import ImgPage from "./ImgPage";


const DynamicSwiper = ()  => {
  const [URLInfo, toggleInfo] = useState(false);

  const [slides, setSlides] = useState(
      [<SwiperSlide>
        <img src={Person3}></img>
      </SwiperSlide>,

      <SwiperSlide>
        <img src={Person2}></img>
      </SwiperSlide>,
      <SwiperSlide>
      <img src={Person1}></img>
      </SwiperSlide>,
      <SwiperSlide>
      <img src={Person4}></img>
      </SwiperSlide>,
      <SwiperSlide>
      <img src={Person5}></img>
      </SwiperSlide>,

    ]
    );

  const createNewSlide = () => {
    setSlides( prevSlides => [
        prevSlides,
        <SwiperSlide>
          <ImgPage imgUrl={thumb_mumin}> </ImgPage>
        </SwiperSlide>
      ]
    );
  };

  const SSwiper = styled(Swiper)`
    max-width:360px;
    
  `;
  
  if(URLInfo == false){
    return (
      <SSwiper
        // className="banner"
        // className = "opening"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        initialSlide= {2}

        loop = {true}

        onClick={() => toggleInfo(true)}
        // onSlideChange={()=>{createNewSlide()}}
      >
        {slides}
      </SSwiper>
    );

  }
  else{
    return (
      <SwiperSlide
        // className="banner"
        // className = "opening"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        initialSlide= {2}
        loop = {true}
        onClick={() => toggleInfo(false)}
        // onSlideChange={()=>{createNewSlide()}}
      >
        <img src={Person1} class = "transparent_img"></img>
      </SwiperSlide>
    );

  }


  
}

export default DynamicSwiper;