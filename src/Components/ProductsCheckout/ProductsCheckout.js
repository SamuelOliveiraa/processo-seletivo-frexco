import style from "./ProductsCheckout.module.css";
import { useEffect, useState } from "react";
import { BiX, BiChevronLeft } from "react-icons/bi";
import QuantityButton from "../QuantityButton/QuantityButton";
import Button from "../Button/Button";

function Products_Checkout({ cart, total }) {
  const [itens, setItens] = useState("");
  useEffect(() => {
    setItens();
  });

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

        <div className={style.td_container}>
          {cart.length !== 0 &&
            cart.map((item) => (
              <div className={style.tr}>
                <div className={style.td}>
                  <div className={style.text_content}>
                    <div className={style.img_container}>
                      <img src={item.src} alt="" />
                    </div>

                    <div className={style.text}>
                      <h2>{item.title}</h2>

                      <span>{item.colors.name}</span>

                      <span>
                        {Number(item.price).toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </span>
                      <span></span>
                    </div>
                  </div>

                  <div className={style.quantity_container}>
                    <QuantityButton itens={item.itens} setItens={setItens} />
                  </div>

                  <div className={style.delete}>
                    <BiX />
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className={style.total_container}>
          <Button text="Voltar" icon={<BiChevronLeft />} to="/" />
          <div className={style.text}>
            <div className={style.subtotal}>
              <h2>Subtotal:</h2>

              <span>
                {Number(total).toLocaleString("pt-br", {
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
                {Number(total).toLocaleString("pt-br", {
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

export default Products_Checkout;
