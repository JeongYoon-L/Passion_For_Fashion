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
import thumb_dog_wobbling from '../assets/633c9a7a98840f7cba6140488b4ad735.gif';
import thumb_mumin from '../assets/50b997ae70f654b97da961eb70016b78.png';

const DynamicSwiper = ()  => {
  const [slides, setSlides] = useState(
      [<SwiperSlide>
        <img src={ppap}></img>
      </SwiperSlide>,
      <SwiperSlide>
        <img src={ppap}></img>
      </SwiperSlide>,
      
    ]
    );

  const createNewSlide = () => {
    setSlides( prevSlides => [
        prevSlides,
        <SwiperSlide>
          <img src={thumb_guy}></img>
        </SwiperSlide>
      ]
    );
  };

  const SSwiper = styled(Swiper)`
    max-width:360px;
  `;
  

  return (
    <SSwiper
      className="banner"
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={()=>{createNewSlide()}}
    >
      {slides}
    </SSwiper>
  );
}

export default DynamicSwiper;