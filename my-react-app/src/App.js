import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import './App.css';
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import ppap from './ppap.jpg'
import thumb_guy from './thumb_guy.jpg'

SwiperCore.use([Navigation, Pagination])

function App() {
  return (
    <div className="App"> 
      <Swiper
        className="banner"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>Slide 1
          <img src = {ppap}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src = {thumb_guy}></img>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
  
}

export default App;
