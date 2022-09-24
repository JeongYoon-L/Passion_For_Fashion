import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";

import './App.css';
import ppap from './assets/ppap.jpg'
import thumb_guy from './assets/thumb_guy.jpg'
import thumb_dog_suit from './assets/126dfdd244674062d9b87a15855105fe.jpg';
import thumb_dog_wobbling from './assets/633c9a7a98840f7cba6140488b4ad735.gif';
import thumb_mumin from './assets/50b997ae70f654b97da961eb70016b78.png';
import DynamicSwiper from "./components/DynamicSwiper";


const SSwiperSlide = styled(SwiperSlide)`
  .swiper-container {
    width: 100%;
    margin: 40px 0;
    padding: 45px 0;
  }

  .swiper-slide {
    opacity: 0.4;
    overflow: hidden;
    transition: .7s;
  }

  .swiper-slide img {
    width: 100%;
  }

  .swiper-slide-active {
    opacity: 1;
    z-index: 1;
    transform: scale(1.5);
}

`;

const SSwiper = styled(Swiper)`
  max-width:360px;
`;

SwiperCore.use([Navigation, Pagination]);

function App() {

  return (
    <div className="App"> 
     <DynamicSwiper />
    </div>
  );
  
}

export default App;
