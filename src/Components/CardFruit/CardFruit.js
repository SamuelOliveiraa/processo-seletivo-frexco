import style from "./CardFruit.module.css";
import { Link } from "react-router-dom";

import Button from "../Button/Button";
import { BiCartAlt } from "react-icons/bi";

function CardShoes({ data }) {
  function addCart() {
    let cartString = JSON.stringify([]);

    if (localStorage.getItem("cart") === null) {
      let newCart = {
        id: data.id,
        name: data.name,
        images: data.images,
        price: data.price,
        itens: 1,
      };

      cartString.push(newCart);
      cartString = JSON.stringify(cartString);
      localStorage.setItem("cart", cartString);
    } else {
      cartString = JSON.parse(localStorage.getItem("cart"));

      let reference = "";
      cartString.map((item) => {
        if (item.id === data.id) {
          //mensagem de erro
          console.log("item ja existe no carrinho");
          reference = false;
        }
      });
      if (reference !== false) {
        let newCart = {
          id: data.id,
          name: data.name,
          images: data.images,
          price: data.price,
          itens: 1,
        };

        cartString.push(newCart);
        cartString = JSON.stringify(cartString);
        localStorage.setItem("cart", cartString);
      }
    }
  }
  return (
    <div className={style.card}>
      <div className={style.img_container}>
        <img src={data.images[0]} alt="" />
      </div>

      <div className={style.text}>
        <h2>{data.name}</h2>

        <p>({data.subtitle})</p>

        <div className={style.text_container}>
          <p className={style.price}>
            <span className={style.old_price}>
              {Number(data.oldPrice).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            {Number(data.price).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>

          <div className={style.button_container} onClick={addCart}>
            <Button
              to="/"
              text="Adicionar"
              icon={<BiCartAlt></BiCartAlt>}
            ></Button>
          </div>
        </div>

        <Button
          text="Ver mais"
          icon=""
          to={`/fruit/${data.id}`}
          className={style.button}
        />
      </div>

      <div className={`${style.discount} + flex_center`}>
        {Math.round(
          ((Number(data.oldPrice) - Number(data.price)) / Number(data.price)) *
            100
        )}
        %
      </div>
    </div>
  );
}

export default CardShoes;
