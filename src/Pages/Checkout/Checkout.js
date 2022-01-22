import style from "./Checkout.module.css";
import PaymentCheckout from "../../Components/PaymentCheckout/PaymentCheckout";
import ProductsCheckout from "../../Components/ProductsCheckout/ProductsCheckout";
import { useEffect, useState } from "react";
import Message from "../../Components/Message/Message";

function Checkout({ cart, setCart }) {
  const [currentTotal, setCurrentTotal] = useState(0);
  const [msg, setMsg] = useState(true);

  useEffect(() => {
    let total = 0;
    cart.map((item) => {
      total = total + Number(item.price) * Number(item.itens);
    });
    setCurrentTotal(total);
  }, []);

  let a = JSON.parse(localStorage.getItem("cart"));
  useEffect(() => {
    setCart(a);
  }, [a.length]);

  function deleteItem(e) {
    cart.map((item, index) => {
      if (item.id === Number(e.target.dataset["id"])) {
        let otherTotal = currentTotal - Number(item.price) * Number(item.itens);
        setCurrentTotal(otherTotal);

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
    <>
      {cart.length === 0 || cart === undefined || cart[0].itens === 0 ? (
        window.location.replace("/")
      ) : (
        <>
          {msg && <Message msg={msg} />}
          <div className={style.checkout_container}>
            <ProductsCheckout
              cart={cart}
              currentTotal={currentTotal}
              deleteItem={deleteItem}
              setCurrentTotal={setCurrentTotal}
            />

            <PaymentCheckout />
          </div>
        </>
      )}
    </>
  );
}

export default Checkout;
