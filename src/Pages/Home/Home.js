import { Link } from "react-router-dom";
import style from "./Home.module.css";

import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import InfoCards from "../../Components/InfoCards/InfoCards";
import BannerHome from "../../Components/BannerHome/BannerHome";

function Home({ cart, setCart }) {
  return (
    <div>
      <BannerHome img={"https://api-processo-seletivo-frexco.herokuapp.com/files/banner.png"} />

      <InfoCards />

      <Link to="/search" className={`${style.text_container} flex_between`}>
        <h2>Ofertas da Semana</h2>

        <p>Confira aqui as melhoras ofertas</p>
      </Link>

      <CardsContainer
        url={"/all"}
        cart={cart}
        setCart={setCart}
        limit={9}
      />

    </div>
  );
}

export default Home;
