import style from "./ModalCart.module.css";
import { BiTrash } from "react-icons/bi";
import { useEffect } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function ModalCart({ cartState, cart, setCart }) {
  function toggleCart() {
    if (cartState === "") {
      return `${style.modal_cart} + ${style.inactive}`;
    } else {
      return `${style.modal_cart}`;
    }
  }

  let cartString = JSON.stringify(cart);

  if (localStorage.getItem("cart") === null) {
    localStorage.setItem("cart", cartString);
  }

  let a = JSON.parse(localStorage.getItem("cart"));
  useEffect(() => {
    setCart(a);
  }, [a.length]);

  function deleteItem(e) {
    cart.map((item, index) => {
      if (item.id === Number(e.target.dataset["id"])) {
        cart.splice(index, 1);
        let cartString = JSON.stringify(cart);
        if (localStorage.getItem("cart") == null) {
          localStorage.setItem("cart", cartString);
        } else {
          localStorage.setItem("cart", cartString);
        }
        setCart(a);
      }
    });
  }

  return (
    <div className={toggleCart()}>
      <h2>Carinho</h2>
      <div className={style.cart_container}>
        {cart.length === 0 || cart === null ? (
          <div className={`${style.empty} flex_center`}>
            <p>Your cart is empty.</p>
          </div>
        ) : (
          cart.map((item, index) => (
            <div className={style.full} key={index}>
              <div className={style.full_container}>
                <Link to={`/fruit/${item.id}`}>
                  <img src={item.images[0]} alt="" />
                </Link>

                <Link to={`/fruit/${item.id}`}>
                  <span className="title">{item.name}</span>

                  <span className="price">
                    R${item.price} x {item.itens}
                    <strong>R${(item.price * item.itens).toFixed(2)}</strong>
                  </span>
                </Link>

                <div
                  className={style.icon_container}
                  onClick={deleteItem}
                  data-id={item.id}
                >
                  <BiTrash />
                </div>
              </div>
            </div>
          ))
        )}

        {cart.length === 0 || cart === null ? (
          ""
        ) : (
          <Button icon="" to="/checkout" text="Checkout" />
        )}
      </div>
      ;
    </div>
  );
}

export default ModalCart;
