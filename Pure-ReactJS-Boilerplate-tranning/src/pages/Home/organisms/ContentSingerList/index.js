import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./style.scss";
import SwiperCore, {
  // EffectCoverflow,
  Pagination,
  Navigation
} from "swiper/core";

SwiperCore.use([Pagination, Navigation]);

function ContentSingerList() {
  return (
    <div className="ContentSingerList_wrapper">
      <Swiper
        centeredSlides
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={5}
        loop
        loopFillGroupWithBlank
        navigation
        className="swiper"
      >
        <SwiperSlide>
          <img
            src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/artists/v2/huong-tram.png"
            alt=""
            className="slider_img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/artists/v2/jack.png"
            alt=""
            className="slider_img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/artists/v2/khoi-my.png"
            alt=""
            className="slider_img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/artists/v2/justatee.png"
            alt=""
            className="slider_img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/artists/v2/wowy.png"
            alt=""
            className="slider_img"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ContentSingerList;
