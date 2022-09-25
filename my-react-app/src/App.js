import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";

import './App.css';
import DynamicSwiper from "./components/DynamicSwiper";



SwiperCore.use([Navigation, Pagination]);

function App() {

  return (
    <div className="App"> 
     <DynamicSwiper />
    </div>
  );
  
}

export default App;
