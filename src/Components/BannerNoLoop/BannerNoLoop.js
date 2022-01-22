import style from "./BannerNoLoop.module.css";

import "./BannerNoLoop.module.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// import Swiper core and required modules
import { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function BannerNoLoop({ data }) {
  return (
    <div className={style.swiper}>
      <div className={style.wrapper}>
      {data !== undefined &&
        data.images.map((item, index) => (
          <div className={style.img_container} key={index}>
            <img src={item} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BannerNoLoop;
