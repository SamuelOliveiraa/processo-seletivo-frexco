import style from "./BannerHome.module.css";
import { Link } from "react-router-dom";

function BannerHome({ img }) {
  return (
    <Link to="/search" className={style.container}>
      <img src={img} alt="banner" />
    </Link>
  );
}

export default BannerHome;
