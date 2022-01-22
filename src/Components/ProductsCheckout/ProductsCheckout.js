import style from "./ProductsCheckout.module.css";
import { BiX, BiChevronLeft } from "react-icons/bi";
import QuantityButton from "../QuantityButton/QuantityButton";
import Button from "../Button/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProductsCheckout({ cart, currentTotal, deleteItem, setCurrentTotal }) {
  const [currentItens, setCurrentItens] = useState("");

  return (
    <div className={style.products}>
      <h2 className={style.title}>Carrinho de Compras</h2>

      <div className={style.table}>
        <div className={style.tr}>
          <div className={style.th}>
            <span>Produto</span>
            <span>Quantidade</span>
            <span></span>
          </div>
        </div>

        {
          <div className={style.td_container}>
            {cart.length !== 0 &&
              cart.map((item, index) => (
                <div className={style.tr} key={index}>
                  <div className={style.td}>
                    <Link
                      to={`/fruit/${item.id}`}
                      className={style.text_content}
                    >
                      <div className={style.img_container}>
                        <img src={item.images[0]} alt="" />
                      </div>

                      <div className={style.text}>
                        <h2>{item.name}</h2>

                        <span>
                          {Number(item.price).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </span>
                        <span></span>
                      </div>
                    </Link>

                    <div className={style.quantity_container}>
                      <QuantityButton
                        cart={cart}
                        id={item.id}
                        currentItens={item.itens}
                        setCurrentItens={setCurrentItens}
                        page={true}
                      />
                    </div>

                    <div
                      className={style.delete}
                      onClick={deleteItem}
                      data-id={item.id}
                    >
                      <BiX />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        }

        <div className={style.total_container}>
          <Button text="Voltar" icon={<BiChevronLeft />} to="/" />
          <div className={style.text}>
            <div className={style.subtotal}>
              <h2>Subtotal:</h2>

              <span>
                {Number(currentTotal).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>

            <div className={style.shipping}>
              <h2>Frete:</h2>

              <span>R$ 0</span>
            </div>

            <div className={style.total}>
              <h2>Total:</h2>

              <span>
                {Number(currentTotal).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsCheckout;
