import style from "./QuantityButton.module.css";
import { BiPlus, BiMinus } from "react-icons/bi";
import {useEffect} from 'react'

function Quantity_Button({ itens, setItens, id, setCurrentTotal, cart }) {
  let total = 0;

  useEffect(() => {
    cart.map((item, index) => {
      if (item.id === itens.id) {
        item.itens = itens.itemValue;
        let cartString = JSON.stringify(cart);
        if (localStorage.getItem("cart") == null) {
          localStorage.setItem("cart", cartString);
        } else {
          localStorage.setItem("cart", cartString);
        }
      }
      total = total + Number(item.price) * Number(item.itens);
    });
    setCurrentTotal(total);
  }, []);

  function decrease() {
    if (itens !== 0) {
      let itemValue = itens;
      itemValue = itemValue - 1;
      setItens({id, itemValue});
    }
  }
  function increase() {
    let itemValue = itens;
    itemValue = itemValue + 1;
    setItens({id, itemValue});
    console.log(itemValue)
  }
  return (
    <div className={style.quantity}>
      <div className={style.minus} onClick={decrease}>
        <BiMinus></BiMinus>
      </div>
      <div className={style.number}>{itens}</div>
      <div className={style.plus} onClick={increase}>
        <BiPlus></BiPlus>
      </div>
    </div>
  );
}

export default Quantity_Button;
