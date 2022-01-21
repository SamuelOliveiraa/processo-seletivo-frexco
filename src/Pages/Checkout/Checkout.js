import style from "./Checkout.module.css";
import PaymentCheckout from "../../Components/PaymentCheckout/PaymentCheckout";
import ProductsCheckout from "../../Components/ProductsCheckout/ProductsCheckout";

function Checkout({ cart, setCart }) {
  let total = 0;

  cart.map((item) => {
    total = total + Number(item.price);
    console.log(total);
  });

  console.log(cart);

  return (
    <>
      {/* {cart.length === 0 || cart === undefined ? (
        window.location.replace("/")
      ) : (
        <div className={style.checkout_container}>
          <ProductsCheckout cart={cart} total={total} />

          <PaymentCheckout />
        </div>
      )} */}
      <div className={style.checkout_container}>
        <ProductsCheckout cart={cart} total={total} />

        <PaymentCheckout />
      </div>
    </>
  );
}

export default Checkout;
