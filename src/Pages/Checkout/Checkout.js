import style from "./Checkout.module.css";
import PaymentCheckout from "../../Components/PaymentCheckout/PaymentCheckout";
import ProductsCheckout from "../../Components/ProductsCheckout/ProductsCheckout";
import { useEffect, useState } from "react";

function Checkout({ cart, setCart }) {
  const [itens, setItens] = useState("");
  const [currentTotal, setCurrentTotal] = useState(0);
  

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
        let otherTotal = currentTotal - Number(item.price) * Number(item.itens);
        setCurrentTotal(otherTotal);
      }
    });
  }

  return (
    <>
      {/* {cart.length === 0 || cart === undefined || cart[0].itens === 0 ? (
        window.location.replace("/")
      ) : (
        <div className={style.checkout_container}>
          <ProductsCheckout cart={cart} total={total} />

          <PaymentCheckout />
        </div>
      )} */}
      <div className={style.checkout_container}>
        <ProductsCheckout
          cart={cart}
          total={currentTotal}
          itens={itens}
          setItens={setItens}
          deleteItem={deleteItem}
          setCurrentTotal={setCurrentTotal}
        />

        <PaymentCheckout />
      </div>
    </>
  );
}

export default Checkout;
