/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";

import BottomContainer from "./BottomContainer";
import objData from '../imgJson.json'; // 얘가 parse까지 다 해줌.

// import ppap from '../assets/ppap.jpg';
// import thumb_guy from '../assets/thumb_guy.jpg'
// import thumb_dog_suit from '../assets/126dfdd244674062d9b87a15855105fe.jpg';
// import thumb_dog_wobbling from '../assets/633c9a7a98840f7cba6140488b4ad735.gif';
// import thumb_mumin from '../assets/50b997ae70f654b97da961eb70016b78.png';
// import thumb_VIP from "../assets/VIP.jpg"
// import thumb_01 from "../assets/01.jpg"
// import thumb_02 from "../assets/02.jpg"
// import thumb_04 from "../assets/04.jpg"
// import thumb_05 from "../assets/05.jpg"
// import thumb_06 from "../assets/06.jpg"
// import thumb_07 from "../assets/07.jpg"
// import thumb_08 from "../assets/08.jpg"
// import thumb_09 from "../assets/09.jpg"
// import thumb_10 from "../assets/10.jpg"
// import thumb_11 from "../assets/11.jpg"


const DynamicSwiper = ()  => {
  const keysList = Object.keys(objData);
  const results = [];

  keysList.forEach(function(key, index) {
    const likes = null;
    const likesParam = likes?likes:123;
    
    results.push(
      <SwiperSlide>
      <img src={"/assets/"+objData[key][0]} useMap="#tssss"></img>
        <map name="tssss"  id="tssss">
          {/* <area 
            shape="rect" 
            coords="60, 180, 1279, 1663" 
            href="https://www.naver.com/" 
          /> */}
        </map>
        
      <BottomContainer likes={likesParam}></BottomContainer>
      </SwiperSlide>
    );
    console.log(objData[key][0]);
  });

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
    >
      {results}
    </SSwiper>
  );
}

export default DynamicSwiper;