import style from "./BannerNoLoop.module.css";
import "./BannerNoLoop.module.css";

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
