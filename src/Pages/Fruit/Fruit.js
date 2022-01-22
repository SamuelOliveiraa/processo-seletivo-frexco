import style from "./Fruit.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import api from "../../Config/api";
import { BiCartAlt } from "react-icons/bi";
import QuantityButton from "../../Components/QuantityButton/QuantityButton";
import BannerNoLoop from "../../Components/BannerNoLoop/BannerNoLoop";

function Fruit({ cart, setCart }) {
  const [fruit, setFruit] = useState([]);
  const [image, setImage] = useState('');
  const [itens, setItens] = useState(0);
  const { id } = useParams();

  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "appllication/json",
    },
  };

  useEffect(() => {
    api
      .get(`/fruit/${id}`, headers)
      .then((resp) => {
        setImage(resp.data.images[0]);
        setFruit(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function currentImg(e) {
    for (let i = 0; i < e.target.parentNode.parentNode.children.length; i++) {
      e.target.parentNode.parentNode.children[i].classList.remove(
        `${style.active}`
      );
    }
    e.target.parentNode.classList.add(`${style.active}`);
    setImage(e.target.src);
  }

  function addCart() {
    if (itens === 0) {
      console.log("sem itens");
      return false;
    } else {
      let cartString = JSON.stringify(cart);

      if (localStorage.getItem("cart") === null) {
        localStorage.setItem("cart", cartString);
      } else {
        cartString = JSON.parse(localStorage.getItem("cart"));
        setCart(cartString);
      }

      if (cart.length === 0) {
        let newCart = {
          id: fruit.id,
          name: fruit.name,
          images: fruit.images,
          price: fruit.price,
          itens: 1,
        };

        cart.push(newCart);
        cartString = JSON.stringify(cart);

        if (localStorage.getItem("cart") === null) {
          localStorage.setItem("cart", cartString);
        } else {
          localStorage.setItem("cart", cartString);
        }
      } else {
        let reference = "";
        cart.map((item) => {
          if (item.id === fruit.id) {
            item.itens = itens;
            cartString = JSON.stringify(cart);

            if (localStorage.getItem("cart") === null) {
              localStorage.setItem("cart", cartString);
            } else {
              localStorage.setItem("cart", cartString);
            }
            reference = false;
          }
        });
        if (reference !== false) {
          let newCart = {
            id: fruit.id,
            name: fruit.name,
            images: fruit.images,
            price: fruit.price,
            itens: 1,
          };

          cart.push(newCart);
          cartString = JSON.stringify(cart);

          if (localStorage.getItem("cart") === null) {
            localStorage.setItem("cart", cartString);
          } else {
            localStorage.setItem("cart", cartString);
          }
        }
      }
    }
  }

  return (
    <>
      {fruit === undefined || fruit.length === 0 ? (
        ""
      ) : (
        <div className={style.container}>
          <div className={style.swiper_container}>
            {<BannerNoLoop data={fruit} />}
          </div>

          <div className={style.img_content}>
            <div className={style.principal}>
              <img src={image} alt="" />
            </div>
            {
              <div className={style.others}>
                <div className={`${style.other} ${style.active}`}>
                  <img src={fruit.images[0]} alt="shoes" onClick={currentImg} />
                </div>
                <div className={`${style.other} `}>
                  <img src={fruit.images[1]} alt="shoes" onClick={currentImg} />
                </div>
                <div className={`${style.other} `}>
                  <img src={fruit.images[2]} alt="shoes" onClick={currentImg} />
                </div>
                <div className={`${style.other}`}>
                  <img src={fruit.images[0]} alt="shoes" onClick={currentImg} />
                </div>
              </div>
            }
          </div>

          <div className={style.text}>
            <h2>{fruit.name}</h2>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae expedita atque provident, assumenda ut, alias ratione,
              quia quasi fugit debitis perspiciatis
            </p>

            <p>
              <strong>
                {Number(fruit.price).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}

                <span className={style.discount}>
                  {Math.round(
                    ((Number(fruit.oldPrice) - Number(fruit.price)) /
                      fruit.price) *
                      100
                  )}
                  %
                </span>
              </strong>

              <span className={style.old}>
                {Number(fruit.oldPrice).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </p>

            <div className={style.buttons}>
              <QuantityButton itens={itens} setItens={setItens} />

              <div className={`${style.btn} + flex_center`} onClick={addCart}>
                <div className={style.icon}>
                  <BiCartAlt />
                </div>
                <div className={style.btn_text}>Adicionar</div>
              </div>
            </div>

            <div className={style.description}>
              <h2>Descrição</h2>

              <table>
                <tbody>
                  <tr className="flex_between">
                    <th>Quantidade por porção</th>
                    <th>%VD(*)</th>
                  </tr>
                  <tr className="flex_between">
                    <td>Carboidratos (g /100g) </td>
                    <td>{fruit.nutritions.carbohydrates}</td>
                  </tr>
                  <tr className="flex_between">
                    <td>Proteínas (g /100g) </td>
                    <td>{fruit.nutritions.protein}</td>
                  </tr>
                  <tr className="flex_between">
                    <td>Gordura Total (g /100g) </td>
                    <td>{fruit.nutritions.fat}</td>
                  </tr>
                  <tr className="flex_between">
                    <td>Calorias (g /100g) </td>
                    <td>{fruit.nutritions.calories}</td>
                  </tr>
                  <tr className="flex_between">
                    <td>Açucar (g /100g) </td>
                    <td>{fruit.nutritions.sugar}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      ;
    </>
  );
}

export default Fruit;
