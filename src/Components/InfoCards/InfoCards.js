import style from "./InfoCards.module.css";

import { FaTruck, FaQuestionCircle } from "react-icons/fa";
import { BiGift } from "react-icons/bi";

function InfoCards() {
  return (
    <div className={style.cards}>
      <div className={style.card}>
        <div className={style.icon_container}>
          <FaTruck></FaTruck>
        </div>

        <div className={style.text}>
          <h2>FRETE RÁPIDO E GRATUITO</h2>

          <p>No pedido acima de R$90,00</p>
        </div>
      </div>

      <div className={style.card}>
        <div className={style.icon_container}>
          <BiGift></BiGift>
        </div>

        <div className={style.text}>
          <h2>SUPORTE DE AJUDA ON-LINE</h2>

          <p>Em caso de duvida entre em contato </p>
        </div>
      </div>

      <div className={style.card}>
        <div className={style.icon_container}>
          <FaQuestionCircle></FaQuestionCircle>
        </div>

        <div className={style.text}>
          <h2>DEVOLVEMOS SEU DINHEIRO EM 7 DIAS ÚTEIS</h2>

          <p>No pedido acima de R$90,00</p>
        </div>
      </div>
    </div>
  );
}

export default InfoCards;
