import style from "./CardsContainer.module.css";
import CardFruit from "../CardFruit/CardFruit";
import Loader from "../Loader/Loader";
import { useEffect, useState } from "react";
import api from "../../Config/api";

function CardsShoes({ url, cart, setCart, limit }) {
  const [allFruits, setAllFruits] = useState([]);
  const [loading, setLoading] = useState(true);

  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "appllication/json",
    },
  };

  useEffect(() => {
    api
      .get(`${url}`, headers)
      .then((resp) => {
        console.log(resp.data.data);
        setAllFruits(resp.data.data);
        setLoading(true);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <div className={`${loading === false ? "" : style.loading} ${style.cards}`}>
      {loading !== false && <Loader />}
      {allFruits !== undefined && allFruits.length !== 0 ? (
        allFruits.map((fruit, index) =>
          limit ? (
            index < limit && (
              <CardFruit
                key={index}
                data={fruit}
                cart={cart}
                setCart={setCart}
              />
            )
          ) : (
            <CardFruit key={index} data={fruit} cart={cart} setCart={setCart} />
          )
        )
      ) : (
        <h2>Frutas não encontradas</h2>
      )}
    </div>
  );
}

export default CardsShoes;