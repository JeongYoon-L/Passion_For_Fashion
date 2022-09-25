import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
import { useState } from "react";

import './App.css';
import final_opening from './assets/final_opening.gif'
import ppap from './assets/ppap.jpg'
import thumb_guy from './assets/thumb_guy.jpg'
import thumb_dog_suit from './assets/126dfdd244674062d9b87a15855105fe.jpg';
import thumb_dog_wobbling from './assets/633c9a7a98840f7cba6140488b4ad735.gif';
import thumb_mumin from './assets/50b997ae70f654b97da961eb70016b78.png';
import DynamicSwiper from "./components/DynamicSwiper";



SwiperCore.use([Navigation, Pagination]);

function App() {
  const [opening, toggleOpening] = useState(false);

  const SSwiper = styled(Swiper)`
  max-width:360px;
  `;

  if(opening == false){
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
        <img src={final_opening} className="opening"
        onClick={() => toggleOpening(true)}
        ></img>
      </SSwiper>
    );
  }
  else{
    return (
      <div className="App"> 
        <DynamicSwiper />
      </div>
    );

  }

  
}

export default App;
