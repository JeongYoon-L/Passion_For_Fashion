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

const DynamicSwiper = ()  => {
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
      initialSlide= {2}
      // onSlideChange={()=>{createNewSlide()}}
    >
      {slides}
    </SSwiper>
  );
}

export default DynamicSwiper;